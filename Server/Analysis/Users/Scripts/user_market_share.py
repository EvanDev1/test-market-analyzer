from vio import Vio as VioClass

Vio = VioClass._instance


class UserMarketNet:

    def get_item_lowest_price(item_name):
        market = Vio.market
        item_data = market.get(item_name)
        if item_data is None:
            print(f"{item_name} is not in market data... which makes no sense uhmm")

        sell_orders = item_data["sell"]
        if len(sell_orders) > 0:
            return sell_orders[0]["price"]
        else:
            print("Uhmmmm sell orders length isn't greater than 0 uhmmm")
            return

    def get_user_net(user_orders):
        user_net = 0

        for order in user_orders["sell"]:
            item_name = order["itemName"]
            amount = order["amount"]
            price = UserMarketNet.get_item_lowest_price(item_name)

            order_value = amount * price
            user_net += order_value

        for order in user_orders["buy"]:
            user_net += order["amount"] * order["price"]

        return user_net

    def get_user_market_net(user_data, market_analysis):

        market_net = market_analysis["marketNetWorth"]
        new_user_data = {}

        for user_key, user in user_data.items():
            user_orders = user["orders"]
            user_net = UserMarketNet.get_user_net(user_orders)

            user_share = user_net / market_net * 100

            user_obj = {
                **user,
            }

            user_obj["data"]["marketShare"] = user_share
            user_obj["data"]["netWorth"] = user_net

            new_user_data[user_key] = user_obj

        return new_user_data
