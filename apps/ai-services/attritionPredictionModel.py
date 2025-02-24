import random
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/predict_attrition", methods=["POST"])
def predict_attrition():
    data = request.json
    employee_satisfaction = data.get("satisfaction", 0.5)
    workload = data.get("workload", "medium")

    attrition_risk = 0.5 - (employee_satisfaction * 0.3)
    attrition_risk += 0.2 if workload == "high" else -0.1

    return jsonify({"attrition_risk": round(attrition_risk, 2)})

if __name__ == "__main__":
    app.run(port=5022, debug=True)