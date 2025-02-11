from Analysis.Users.Scripts.user_orders import UserOrders
from Analysis.Users.Scripts.user_market_share import UserMarketNet
from Analysis.Users.Scripts.user_order_flips import UserOrderFlips


class UserHandler:

    def get_data(market_analysis):
        # Getting user data
        user_data = UserOrders.get_user_orders()
        user_data = UserMarketNet.get_user_market_net(user_data, market_analysis)
        user_data = UserOrderFlips.get_user_order_flips(user_data)

        # Creating user data obj
        user_data_obj = user_data

        return user_data_obj


# There are two items being sold for like 100 million coins somehow..?

# Cheapest sell order price:
# 101001110.0
# 101001101.0
