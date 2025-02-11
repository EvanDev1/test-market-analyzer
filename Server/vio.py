import requests
from datetime import datetime
from dotenv import dotenv_values
import threading
from Data.json_func import read_json_file, save_to_json_file
from datetime import datetime, timezone


class Vio:
    _instance = None
    market = None
    vio_market = None
    fetch_interval = 60

    market_path = "MarketData/market.json"
    recentMarketUrl = "https://api.vi-o.tech/v1/market/recent"

    _lock = threading.Lock()

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        print("Vio API Handler is now running...")
        env_vars = dotenv_values(".env")
        self.apiKey = env_vars.get("API_KEY")
        self.apiHeaders = {"x-api-key": self.apiKey}
        market_data = read_json_file(self.market_path)

        self.market = market_data["items"]

        # Start the periodic fetching
        # self.periodic_fetch()

    def get_datetime(self):
        current_time = datetime.now(timezone.utc)
        formatted_time = current_time.strftime("%Y-%m-%dT%H:%M:%S.%fZ")
        return self.parse_datetime(formatted_time)

    def api_request(self, url, params=None):
        try:
            response = requests.get(url, headers=self.apiHeaders, params=params)
            response.raise_for_status()
            return {"data": response.json(), "error": None}
        except requests.exceptions.RequestException as error:
            print("Error:", error)
            return {"data": None, "error": str(error)}

    def parse_datetime(self, datetime_str, format_str="%Y-%m-%dT%H:%M:%S.%fZ"):
        try:
            datetime_obj = datetime.strptime(datetime_str, format_str)
            return datetime_obj
        except ValueError:
            print(
                f"Error: Unable to parse datetime string '{datetime_str}' with format '{format_str}'."
            )
            return None

    def get_market(self):
        result = self.api_request(self.recentMarketUrl)
        if result["error"]:
            print("Error fetching data:", result["error"])
            return

        vio_market = result["data"]
        if self.vio_market is None:
            self.vio_market = vio_market
            return

        current_id = self.vio_market["_id"]
        vio_id = vio_market["_id"]

        vio_item_count = len(vio_market["items"])

        if current_id != vio_id:
            self.vio_market = vio_market
            save_to_json_file(vio_market, self.market_path)
            print(f"|{vio_item_count} items, ID: {vio_id}| Updated market")
        else:
            print(
                f"|{vio_item_count} items, ID: {current_id}| Did not update vio market."
            )

    def start_periodic_fetch(self):
        # Create a thread for periodic fetching
        self.fetch_thread = threading.Timer(self.fetch_interval, self.periodic_fetch)
        self.fetch_thread.start()

    def periodic_fetch(self):
        self.get_market()
        # Reschedule the next fetch
        self.start_periodic_fetch()
