from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load("workforce_cost_model.pkl")

@app.route("/workforce_cost", methods=["POST"])
def workforce_cost():
    data = request.json
    prediction = model.predict([[data["year"], data["hiring_budget"]]])[0]
    return jsonify({"forecasted_employee_count": round(prediction, 2)})

if __name__ == "__main__":
    app.run(port=5023, debug=True)
