from vio import Vio as VioClass

Vio = VioClass._instance


class UserOrderFlips:
    # Detect what items people are flipping

    def match_order_items(buy_orders, sell_orders):
        buy_items = [order["itemName"] for order in buy_orders]
        sell_items = [order["itemName"] for order in sell_orders]

        matched_items = []

        for item in buy_items:
            if item in sell_items:
                matched_items.append(item)

        return matched_items

    def get_fill_chance(order_place):
        if order_place <= 2:
            order_fill_chance = "High"
        elif order_place <= 4:
            order_fill_chance = "Medium"
        elif order_place <= 6:
            order_fill_chance = "Low"
        elif order_place <= 8:
            order_fill_chance = "Very low"
        else:
            order_fill_chance = "Extremely low"
        return order_fill_chance

    def buy_order_flips(
        item_name, user_id, buy_orders, lowest_sell_price, highest_buy_price
    ):
        buy_order_obj = None

        for x in range(0, len(buy_orders)):
            buy_order = buy_orders[x]
            order_vendor_id = buy_order["vendor"]["_id"]
            if order_vendor_id == user_id:
                # Orders match

                order_amount = buy_order["amount"]
                order_price = round(buy_order["price"], 2)
                item_profit = round(lowest_sell_price - order_price, 2)
                order_profit = round(item_profit * order_amount, 2)
                order_place = x + 1

                # Getting fullfillment chance
                order_fill_chance = UserOrderFlips.get_fill_chance(order_place)

                buy_order_obj = {
                    "itemName": item_name,
                    "amount": order_amount,
                    "price": order_price,
                    "highestPrice": highest_buy_price,
                    "itemProfit": item_profit,
                    "orderProfit": order_profit,
                    "orderPlace": order_place,
                    "fillChance": order_fill_chance,
                }

        return buy_order_obj

    def sell_order_flips(item_name, user_id, sell_orders, lowest_sell_price):
        sell_order_obj = None

        for x in range(0, len(sell_orders)):
            sell_order = sell_orders[x]
            order_vendor_id = sell_order["vendor"]["_id"]
            if order_vendor_id == user_id:
                # Orders match

                order_amount = sell_order["amount"]
                order_price = round(sell_order["price"], 2)
                order_place = x + 1

                # Getting fullfillment chance
                order_fill_chance = UserOrderFlips.get_fill_chance(order_place)

                sell_order_obj = {
                    "itemName": item_name,
                    "amount": order_amount,
                    "price": order_price,
                    "lowestPrice": lowest_sell_price,
                    "fillChance": order_fill_chance,
                    "orderPlace": order_place,
                }

        return sell_order_obj

    def get_flips(user, matched_items):
        market = Vio.market
        user_id = user["_id"]

        flip_buy_orders = []
        flip_sell_orders = []

        for item in matched_items:
            item_market = market[item]
            market_buy_orders = item_market["buy"]
            market_sell_orders = item_market["sell"]

            # Get cheapest sell order price
            if len(market_sell_orders) > 0:
                lowest_sell_price = market_sell_orders[0]["price"]
            else:
                lowest_sell_price = -1

            if len(market_buy_orders) > 0:
                highest_buy_price = market_buy_orders[0]["price"]
            else:
                highest_buy_price = -1

            # Getting flip orders
            buy_flip = UserOrderFlips.buy_order_flips(
                item, user_id, market_buy_orders, lowest_sell_price, highest_buy_price
            )
            sell_flip = UserOrderFlips.sell_order_flips(
                item, user_id, market_sell_orders, lowest_sell_price
            )

            # Appending flip orders
            flip_buy_orders.append(buy_flip)
            flip_sell_orders.append(sell_flip)

        return flip_buy_orders, flip_sell_orders

    def match_order_flips(matched_items, buy_orders, sell_orders):
        matched = {}
        for item in matched_items:
            matched[item] = {"itemName": item}

        for order in buy_orders:
            item_name = order["itemName"]
            del order["itemName"]
            order_data = order

            matched[item_name]["buy"] = order_data

        for order in sell_orders:
            item_name = order["itemName"]
            del order["itemName"]
            order_data = order

            matched[item_name]["sell"] = order_data

        matched_orders = []
        for order in matched.values():
            matched_orders.append(order)

        return matched_orders

    def get_user_order_flips(user_data):

        new_user_data = {}

        for user_key, user in user_data.items():
            buy_orders = user["orders"]["buy"]
            sell_orders = user["orders"]["sell"]

            matched_items = UserOrderFlips.match_order_items(buy_orders, sell_orders)
            buy_orders, sell_orders = UserOrderFlips.get_flips(user, matched_items)

            matched_orders = UserOrderFlips.match_order_flips(
                matched_items, buy_orders, sell_orders
            )

            new_user = user
            new_user["data"]["orderFlips"] = matched_orders
            new_user_data[user_key] = new_user

        return new_user_data
