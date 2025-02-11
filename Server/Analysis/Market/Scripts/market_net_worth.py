from vio import Vio as VioClass

Vio = VioClass._instance


class MarketNetWorth:

    def get_item_nets(item_analysis):
        item_nets = {}

        market_net = 0

        for item in item_analysis:
            item_name = item["itemName"]
            item_data = item.get("data")

            if item_data is None:
                continue

            item_net = item_data["demand"]["netWorth"]

            item_nets[item_name] = item_net
            market_net += item_net

        market_net = round(market_net)

        return market_net, item_nets

    def get_net(item_analysis):
        market_net, item_nets = MarketNetWorth.get_item_nets(item_analysis)
        new_item_analysis = []

        for item_data in item_analysis:
            item_net = item_nets.get(item_data["itemName"])
            if item_net is None:
                new_item_analysis.append(item_data)
                continue

            market_share = item_net / market_net * 100
            market_share = round(market_share, 5)

            new_item_data = item_data
            new_item_data["data"]["demand"]["marketShare"] = market_share
            new_item_analysis.append(new_item_data)

        return market_net, new_item_analysis
