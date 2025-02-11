import requests
import os
from dotenv import load_dotenv
import threading
import time


class Vio:
    _instance = None
    market = None
    fetch_interval = 10 * 60  # 10 mins

    latestMarketUrl = "https://api.vi-o.tech/v1/market/latest"
    itemListUrl = "https://api.vi-o.tech/v1/market/items"
    recentMarketUrl = "https://api.vi-o.tech/v1/market/recent"
    itemHistoryUrl = "https://api.vi-o.tech/v1/market/history/Conciliator"

    _lock = threading.Lock()

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        load_dotenv()
        self.apiKey = "5d7d26a2-59ed-40ea-b45b-d46b9f3bfcd9"
        self.apiHeaders = {"x-api-key": self.apiKey}

        # Start the periodic task to fetch data
        self.periodic_fetch()
        self.start_periodic_fetch()

    def api_request(self, url, params=None):
        # Handles all general api requests to the vio api
        try:
            # Getting requests response
            response = requests.get(url, headers=self.apiHeaders, params=params)
            response.raise_for_status()  # Raise error for non-200 status codes
            return {"data": response.json(), "error": None}  # Returning data
        except (
            requests.exceptions.RequestException
        ) as error:  # If there's an error, handle it
            print("Error:", error)
            return {"data": None, "error": str(error)}

    def get_item_latest(self, item):
        result = self.api_request(self.latestMarketUrl, {"items": item})
        if result["error"]:
            print("Error fetching data:", result["error"])
        else:
            return result["data"]

    def get_market(self):
        # Gets data for the entire market
        result = self.api_request(self.recentMarketUrl)
        if result["error"]:
            print("Error fetching data:", result["error"])
        else:
            Vio.market = result["data"]["items"]
            print("Data fetched and stored successfully.")

    def get_item_list(self):
        result = self.api_request(self.itemListUrl)
        if result["error"]:
            print("Error fetching data:", result["error"])
        else:
            return result["data"]

    def start_periodic_fetch(self):
        # Start a periodic task to fetch data every fetch_interval seconds
        threading.Timer(self.fetch_interval, self.periodic_fetch).start()

    def periodic_fetch(self):
        # Perform the periodic fetch and schedule the next fetch
        self.get_market()
        self.start_periodic_fetch()


vio = Vio()
data = vio.get_item_list()
for item in data:
    print('"' + item + '",')
# for item in data:
#     if " -" in item or " _" in item or " |" in item:
#         continue
#     print(f'"{item}",')
