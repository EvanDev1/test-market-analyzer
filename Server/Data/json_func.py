import json
from datetime import datetime
import os


def read_json_file(file_path):
    current_directory = os.path.dirname(os.path.abspath(__file__))
    json_file_path = os.path.join(current_directory, file_path)
    try:
        with open(json_file_path, "r") as file:
            data = json.load(file)
        return data
    except FileNotFoundError:
        print(f"[{datetime.now()}] Error: File '{json_file_path}' not found.")
        return None
    except json.JSONDecodeError:
        print(
            f"[{datetime.now()}] Error: Unable to decode JSON data in '{json_file_path}'."
        )
        return None


def save_to_json_file(data, file_path):
    current_directory = os.path.dirname(os.path.abspath(__file__))
    json_file_path = os.path.join(current_directory, file_path)
    try:
        with open(json_file_path, "w") as file:
            json.dump(data, file, indent=4)
        print(f"[{datetime.now()}] Data saved to '{json_file_path}' successfully.")
    except IOError:
        print(f"[{datetime.now()}] Error: Unable to write to file '{json_file_path}'.")
