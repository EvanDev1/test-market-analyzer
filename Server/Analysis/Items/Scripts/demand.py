from Data.data import item_recipes
from vio import Vio as VioClass

Vio = VioClass._instance


class Demand:

    def evaluate_buy_orders(item_name, buy_orders):
        total_price = 0

        for order in buy_orders:
            order_value = order["price"] * order["amount"]
            total_price += order_value

        return total_price

    def evaluate_sell_orders(item_name, sell_orders):
        if len(sell_orders) == 0:
            return 0

        total_price = 0
        lowest_price = sell_orders[0]["price"]

        for order in sell_orders:
            order_value = order["amount"] * lowest_price
            total_price += order_value

        return total_price

    def get_item_net(item_name):
        market = Vio.market
        item_data = market.get(item_name)

        if item_data is None:
            return

        buy_value = Demand.evaluate_buy_orders(item_name, item_data["buy"])
        sell_value = Demand.evaluate_sell_orders(item_name, item_data["sell"])

        item_net_worth = buy_value + sell_value
        item_net_worth = round(item_net_worth, 2)  # Round to 2 decimal places
        return item_net_worth

    def get_volume(item_name, order_type):
        item_market = Vio.market[item_name]
        orders = item_market[order_type]

        volume = 0
        min_price = 0

        for x, order in enumerate(orders):
            volume += order["amount"]
            if x == 0:
                min_price = order["price"]

        return volume, min_price

    def get_item_demand(item_name):
        item_market = Vio.market[item_name]

        sell_volume, sell_price = Demand.get_volume(item_name, "sell")
        buy_volume, buy_price = Demand.get_volume(item_name, "buy")

        demand_points = (sell_volume * sell_price + buy_volume * buy_price) / 100000

        if demand_points < 1:
            demand_points = round(demand_points, 2)
        else:
            demand_points = round(demand_points, 1)

        item_net_worth = Demand.get_item_net(item_name)

        demand_obj = {
            "sellVolume": sell_volume,
            "buyVolume": buy_volume,
            "demandPoints": demand_points,
            "netWorth": item_net_worth,
        }

        return demand_obj
