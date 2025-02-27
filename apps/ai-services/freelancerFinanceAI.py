import joblib
import numpy as np
from sklearn.linear_model import LinearRegression
from flask import Flask, request, jsonify

##### AI-powered financial planning & income forecasting for freelancers #####

app = Flask(__name__)

# Sample dataset: [Monthly Gigs, Avg Earnings Per Gig, Experience Years] -> Monthly Income
data = np.array([
    [5, 300, 1, 1500],
    [10, 400, 2, 4000],
    [15, 500, 4, 7500],
    [20, 700, 6, 14000],
])

X = data[:, :-1].astype(float)  # Features: Monthly Gigs, Avg Earnings Per Gig, Experience Years
y = data[:, -1].astype(float)  # Target: Monthly Income

model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "freelancer_finance_ai.pkl")


@app.route("/income-forecast", methods=["POST"])
def income_forecast():
    """AI-powered freelancer income forecasting"""
    try:
        data = request.json
        features = np.array([[data["monthly_gigs"], data["avg_earnings"], data["experience"]]])
        income_prediction = model.predict(features)[0]
        return jsonify({"estimatedIncome": round(income_prediction, 2)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5066, debug=True)
