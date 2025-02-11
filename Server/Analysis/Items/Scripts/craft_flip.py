from Data.data import item_recipes
from vio import Vio as VioClass

Vio = VioClass._instance


class CraftFlip:
    # Get profitable flips from crafting item and then selling it

    def get_instant_flip(item_name, item_cost):
        # See if there's profit from instantly selling the item

        market = Vio.market
        buy_orders = market[item_name]["buy"]

        flip_profit = 0
        p_orders = []

        for order in buy_orders:
            order_profit = order["price"] - item_cost  # Get profit amount

            if order_profit <= 0:
                break

            flip_profit += order_profit  # Add orders profit to total item profit

            p_order = {
                **order,
                "profit": order_profit,
            }  # Adding the order profit to order
            if order["amount"] > 1:  # If there's more than 1 item in order add that
                p_order["totalProfit"] = order["amount"] * order_profit
            p_orders.append(p_order)

        instant_obj = {"profit": flip_profit, "orders": p_orders}
        return instant_obj

    def get_offer_flip(item_name, item_cost):
        item_market = Vio.market[item_name]
        sell_offers = item_market["sell"]
        if len(sell_offers) == 0:
            return -1

        offer_price = sell_offers[0]["price"]  # Cheapest sell order
        flip_profit = offer_price - item_cost  # Profit amount
        # If the offer price is < 100 starscape lets us go down by 0.05, otherwise
        # go down by 1 to undercut it.
        if offer_price <= 100:
            flip_profit -= 0.05
        else:
            flip_profit -= 1

        flip_profit = round(flip_profit, 2)  # Round to 2 decimal places

        return flip_profit

    def get_craft_flip(item_name, item_cost):
        instant_flip = CraftFlip.get_instant_flip(item_name, item_cost)
        offer_flip = CraftFlip.get_offer_flip(item_name, item_cost)

        craft_flip_obj = {
            "instant": instant_flip,
            "offerProfit": offer_flip,
        }

        return craft_flip_obj
