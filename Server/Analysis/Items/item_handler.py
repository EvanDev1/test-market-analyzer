from Analysis.Items.Scripts.item_build import ItemBuild
from Analysis.Items.Scripts.craft_flip import CraftFlip
from Analysis.Items.Scripts.demand import Demand
from Analysis.Items.Scripts.order_flip import OrderFlip
from Analysis.Items.Scripts.station_price import StationPrice
from Analysis.Items.Scripts.item_category import ItemCategory

from Data.data import item_list, item_recipes

from vio import Vio as VioClass

Vio = VioClass._instance


class ItemHandler:
    @staticmethod
    def get_item_data(item_name):
        # Get the complete item data
        market = Vio.market

        # Default item obj
        item_obj = {
            "itemName": item_name,
            "categories": ItemCategory.get_item_category(item_name),
        }

        if market.get(item_name) is None:
            item_obj["data"] = None
            return item_obj

        item_data = {}

        # Recipe data
        if item_recipes.get(item_name):
            # Getting recipe data
            build = ItemBuild.get_item_build(item_name)
            craft_flip = CraftFlip.get_craft_flip(item_name, build["cost"])

            # Adding recipe data
            item_data["build"] = build
            item_data["craftFlip"] = craft_flip

        # Normal data
        demand = Demand.get_item_demand(item_name)
        order_flip = OrderFlip.get_order_flip(item_name)
        station_price = StationPrice.get_station_price(item_name)

        # Adding normal data
        item_data["demand"] = demand
        item_data["orderFlip"] = order_flip
        item_data["stationPrice"] = station_price

        item_obj["data"] = item_data
        return item_obj

    def get_data():
        item_data_obj = []

        for item_name in item_list:
            item_data = ItemHandler.get_item_data(item_name)
            item_data_obj.append(item_data)

        print(f"Calculated data for {len(item_list)} items")

        return item_data_obj
