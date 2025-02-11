import json
import os


def get_json_data(file_name):
    current_directory = os.path.dirname(os.path.abspath(__file__))
    json_file_path = os.path.join(current_directory, file_name)

    # Read JSON data from file
    with open(json_file_path, "r") as json_file:
        data = json.load(json_file)

    return data


item_list = get_json_data("./ItemData/item_list.json")
item_recipes = get_json_data("./ItemData/item_recipes.json")
station_data = get_json_data("./ItemData/station_data.json")
item_categories = get_json_data("./ItemData/item_categories.json")