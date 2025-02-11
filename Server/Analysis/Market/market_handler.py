from Analysis.Market.Scripts.market_net_worth import MarketNetWorth


class MarketHandler:
    def get_data(item_analysis):
        # Getting market data
        market_net_worth, new_item_analysis = MarketNetWorth.get_net(item_analysis)

        # Creating market obj
        market_obj = {
            "marketNetWorth": market_net_worth,
        }

        return market_obj, new_item_analysis
