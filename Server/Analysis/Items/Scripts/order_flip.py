from Data.data import station_data

from vio import Vio as VioClass

Vio = VioClass._instance


class OrderFlip:

    def get_order_price(item_name, order_type):
        item_market = Vio.market[item_name]
        orders = item_market[order_type]

        station_item = station_data.get(item_name)
        station_price = None
        if station_item:
            station_price = station_item["station_" + order_type]

        price = 0
        if len(orders) > 0:
            price = orders[0]["price"]
        elif station_price:
            price = station_price
        else:
            price = 0

        return price

    def get_order_flip(item_name):

        buy_price = OrderFlip.get_order_price(item_name, "buy")
        sell_price = OrderFlip.get_order_price(item_name, "sell")

        profit = sell_price - buy_price
        if profit < 0:
            profit == 0

        profit = round(profit, 2)  # Round to 2 decimal places

        order_flip_obj = {
            "buyPrice": buy_price,
            "sellPrice": sell_price,
            "profit": profit,
        }

        return order_flip_obj
