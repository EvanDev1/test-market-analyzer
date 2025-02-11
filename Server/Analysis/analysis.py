from Analysis.Market.market_handler import MarketHandler
from Analysis.Items.item_handler import ItemHandler
from Analysis.Users.user_handler import UserHandler

from Data.json_func import save_to_json_file

analysis_path = "MarketData/analysis.json"


class Analysis:

    def get_analysis():
        # Get market analysis
        item_analysis = ItemHandler.get_data()
        market_analysis, item_analysis = MarketHandler.get_data(item_analysis)
        user_analysis = UserHandler.get_data(market_analysis)

        # Create the analysis obj
        analysis_obj = {
            "userData": user_analysis,
            "marketData": market_analysis,
            "itemData": item_analysis,
        }

        # Save to analysis.json
        save_to_json_file(analysis_obj, analysis_path)

        return analysis_obj
