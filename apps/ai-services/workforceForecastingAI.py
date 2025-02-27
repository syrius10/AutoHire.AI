import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression

##### Predicts workforce productivity, growth, and hiring needs #####

app = Flask(__name__)

# Sample data: [Year, Industry Growth Rate, Hiring Budget] → Predicted Hiring Demand
data = np.array([
    [2023, 3.5, 500000, 200],
    [2024, 4.2, 600000, 250],
    [2025, 5.1, 750000, 300],
    [2026, 6.0, 900000, 350],
])

X = data[:, :-1]  # Year, Industry Growth Rate, Hiring Budget
y = data[:, -1]   # Predicted Hiring Demand

model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "workforce_forecasting.pkl")

@app.route("/forecast_hiring", methods=["POST"])
def forecast_hiring():
    try:
        data = request.json
        features = np.array([[data["year"], data["industry_growth"], data["hiring_budget"]]])
        prediction = model.predict(features)[0]
        return jsonify({"predictedHiringDemand": round(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5068, debug=True)
