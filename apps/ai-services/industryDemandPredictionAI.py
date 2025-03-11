import numpy as np
import pandas as pd
import joblib
from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestRegressor

##### Predictive analysis of future industry skill & job demands #####

app = Flask(__name__)

# Sample training data: [Year, Industry Growth %, Open Positions, Skills Demand Index]
data = np.array([
    [2023, 3.5, 15000, 85],
    [2024, 4.2, 17000, 90],
    [2025, 5.1, 20000, 95],
    [2026, 6.0, 23000, 98]
])

df = pd.DataFrame(data, columns=["year", "growth_rate", "open_positions", "skills_demand_index"])

X = df[["year", "growth_rate"]]
y = df["skills_demand_index"]

# Train prediction model
model = RandomForestRegressor(n_estimators=50, random_state=42, min_samples_leaf=2, max_features="auto")
model.fit(X, y)
joblib.dump(model, "industry_demand_prediction.pkl")

@app.route("/predict-industry-demand", methods=["POST"])
def predict_industry_demand():
    request_data = request.json
    year = request_data.get("year")
    growth_rate = request_data.get("growth_rate")

    model = joblib.load("industry_demand_prediction.pkl")
    predicted_demand = model.predict([[year, growth_rate]])[0]

    return jsonify({"predictedSkillDemand": round(predicted_demand, 2)})

if __name__ == "__main__":
    app.run(port=5061, debug=True)
