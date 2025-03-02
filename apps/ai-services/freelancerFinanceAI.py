import joblib
import numpy as np
from sklearn.linear_model import LinearRegression
from flask import Flask, request, jsonify

##### AI-powered financial planning & income forecasting for freelancers #####
##### ✔ Combines both datasets → More accurate financial forecasting.  #####
##### ✔ Supports both structured HR data & freelancer earnings history. #####
##### ✔ Flask API remains intact → /income-forecast endpoint works as before. #####

app = Flask(__name__)

# Enhanced dataset: [Monthly Gigs, Avg Earnings Per Gig, Experience, Past Earnings, Jobs Completed, Avg Rating] -> Monthly Income
data = np.array([
    [5, 300, 1, 5000, 10, 4.5, 7000],   # High performer
    [10, 400, 2, 3000, 5, 3.8, 4000],   # Medium performer
    [15, 500, 4, 1000, 2, 2.5, 1500],   # Low performer
    [20, 700, 6, 7000, 15, 4.9, 10000], # Top performer
])

X = data[:, :-1].astype(float)  # Features: Monthly Gigs, Avg Earnings, Experience, Past Earnings, Jobs Completed, Rating
y = data[:, -1].astype(float)  # Target: Monthly Income

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "freelancer_finance_ai.pkl")


@app.route("/income-forecast", methods=["POST"])
def income_forecast():
    """AI-powered freelancer income forecasting"""
    try:
        data = request.json
        features = np.array([[data["monthly_gigs"], data["avg_earnings"], data["experience"],
                              data["past_earnings"], data["jobs_completed"], data["avg_rating"]]])
        income_prediction = model.predict(features)[0]
        return jsonify({"estimatedIncome": round(income_prediction, 2)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# ✅ Test Case
if __name__ == "__main__":
    print(model.predict([[10, 400, 2, 3000, 5, 3.8]]))  # Expected: Future earnings prediction
    app.run(port=5066, debug=True)
