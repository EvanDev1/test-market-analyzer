from vio import Vio as VioClass

Vio = VioClass._instance


class UserOrders:

    def check_orders(item_name, user_list, orders, order_type):
        new_user_list = user_list
        for order in orders:
            vendor = order["vendor"]
            user_data = user_list.get(vendor["name"])
            if user_data is None:
                # Create user object
                user_data = {
                    "_id": vendor["_id"],
                    "displayName": vendor["displayName"],
                    "data": {},
                    "orders": {"buy": [], "sell": []},
                }

            user_order_obj = {
                "itemName": item_name,
                "price": order["price"],
                "amount": order["amount"],
            }

            user_data["orders"][order_type].append(user_order_obj)
            new_user_list[vendor["name"]] = user_data

        return new_user_list

    def get_user_orders():
        market = Vio.market

        user_list = {}

        for item_name, item_data in market.items():
            buy_orders = item_data["buy"]
            sell_orders = item_data["sell"]

            user_list = UserOrders.check_orders(item_name, user_list, buy_orders, "buy")
            user_list = UserOrders.check_orders(
                item_name, user_list, sell_orders, "sell"
            )

        return user_list
