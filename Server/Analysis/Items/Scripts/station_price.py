from Data.data import station_data

class StationPrice:
    def get_station_price(item_name):
        station_item = station_data.get(item_name)
        if station_item is None:
            station_price_obj = {"stationBuy": None, "stationSell": None}
            return station_price_obj
        else:
            station_price_obj = {
                "stationBuy": station_item["station_buy"],
                "stationSell": station_item["station_sell"],
            }

            return station_price_obj
