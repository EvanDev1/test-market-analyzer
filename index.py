from vio import Vio as VioClass

Vio = VioClass()

import time
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from flask_cors
from dotenv import dotenv_values

from Analysis.analysis import Analysis

market_analysis = Analysis.get_analysis()
if market_analysis:
    print("Saved complete market analysis")

app = Flask(__name__)
CORS(app)


@app.route("/get-market-analysis/")
def get_market():
    try:
        if market_analysis is None:
            raise Exception("Error reading market analysis.")
        return jsonify(market_analysis), 200
    except Exception as e:
        error_message = f"Error: {str(e)}"
        return jsonify({"error": error_message}), 500


if __name__ == "__main__":
    app.run(debug=True)
