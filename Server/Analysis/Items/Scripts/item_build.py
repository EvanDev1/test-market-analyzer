from Data.data import item_recipes, station_data
from vio import Vio as VioClass

Vio = VioClass._instance


class ItemBuild:

    resource_order = [
        "Credits",
        "Water",
        "Reknite",
        "Korrelite",
        "Gellium",
        "Axnit",
        "Narcor",
        "Red Narcor",
        "Drone core",
        "Drone command core",
        "Power cell",
        "Metal scraps",
        "Vexnium",
    ]

    @staticmethod
    def get_resource_cost(r, amt):
        # Get the cost for a certain amount of resources

        market = Vio.market  # Market data
        rData = market.get(r)  # Resource data
        # If the resource exists get its cost, otherwise print out an error
        if rData is None:
            # at some point i'm gonna have it get the last estimate value but yk wtv
            return 0, True  # Return that item is missing

        sell_orders = rData["sell"]
        amount = amt
        rPrice = 0

        # Getting cost from sell orders (and moving on to the next if it runs out)
        for order in sell_orders:
            amount -= order["amount"]
            if amount <= 0:
                rPrice += (order["amount"] - abs(amount)) * order["price"]
                break
            else:
                rPrice += order["amount"] * order["price"]

        return round(rPrice, 2), False

    def sort_resources(resources):
        # Sorts the resources list so it looks nice :)
        return ItemBuild.resource_order.index(resources["name"])

    def item_sold_by_station(item_name):
        station_item = station_data.get(item_name)
        if station_item:
            station_sell = station_item["station_sell"]
            if station_sell:
                return station_sell

    def get_blueprint(item_r):
        market = Vio.market

        # Check if item recipe has a blueprint
        blueprint = item_r.get("blueprint")
        if blueprint is None:
            return

        # Check if there's a market for the blueprint
        blueprint_market = market.get(blueprint)  # Get blueprint market
        if blueprint_market is None:
            return

        # Check if the market has sell order(s)
        sell_orders = blueprint_market.get("sell")
        if sell_orders is None:
            return

        # Create blueprint obj and return it
        blueprint_cost = sell_orders[0]["price"]  # Blueprint price
        blueprint_obj = {
            "name": blueprint,
            "cost": blueprint_cost,
        }
        return blueprint_obj

    def get_item_build(item):
        market = Vio.market  # Market data

        # Laying out what the final item build will look like
        item_build = {
            "cost": 0,  # Total cost of item and inner items
            "resources": [],  # Recipe layout
        }

        # If item is sold by station add only credits to the recipe
        station_sell = ItemBuild.item_sold_by_station(item)
        if station_sell is not None:
            item_build["cost"] = station_sell
            r_obj = {
                "name": "Credits",
                "cost": station_sell,
            }
            item_build["resources"].append(r_obj)  # Adding the obj
            return item_build

        item_r = item_recipes.get(item)  # Get the item's recipe

        # Add build time values
        item_build["totalBuildTime"] = item_r["buildTime"]
        item_build["itemBuildTime"] = item_r["buildTime"]

        if item_r is None:
            # This should hopefully never happen
            print(f"{item} should hopefully not have a recipe...")
            return

        # Getting the blueprint (if it has one)
        item_blueprint = ItemBuild.get_blueprint(item_r)
        if item_blueprint:
            item_build["blueprint"] = item_blueprint

        # Looping through each resource of the recipe, getting its cost, and adding
        # it to the item build
        for r, amt in item_r["resources"].items():
            r_cost, missing = ItemBuild.get_resource_cost(r, amt)  # Gets item cost
            r_obj = {
                "name": r,
                "amount": amt,
                "cost": r_cost,
                "missing": missing,
            }  # Creating the resource object and all needed data
            item_build["cost"] += r_cost
            item_build["resources"].append(r_obj)  # Adding the obj

        item_build["resources"] = sorted(
            item_build["resources"], key=ItemBuild.sort_resources
        )  # Sorting the resources to be in the same order every time

        if len(item_r["items"]) > 0:  # If there's an inner item get its recipe as well
            inner_item = item_r["items"][0]

            inner_build = ItemBuild.get_item_build(inner_item)
            station_sell = ItemBuild.item_sold_by_station(inner_item)
            if station_sell is not None:
                item_build["cost"] = station_sell
                r_obj = {
                    "name": "Credits",
                    "cost": station_sell,
                }
                item_build["resources"].append(r_obj)  # Adding the obj
                return item_build

            inner_build_time = inner_build["itemBuildTime"]

            inner_build_obj = {
                "name": inner_item,
                "buildTime": inner_build_time,
                "resources": inner_build["resources"],
            }  # Inner item obj

            # Adding inner item values to parent item
            item_build["totalBuildTime"] += inner_build["totalBuildTime"]
            item_build["resources"].append(inner_build_obj)
            item_build["cost"] += inner_build["cost"]

        return item_build
