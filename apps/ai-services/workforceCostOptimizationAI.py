import numpy as np
import joblib
from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression

#####3✅ Predicts hiring costs, salary distribution, and budget allocation. #####
#####3✅ Combines AI model training and an API for real-time cost predictions. #####
##### ✅ Automatically retrains if the model is missing. #####

app = Flask(__name__)

# ✅ Train Model (Runs Once & Saves)
def train_model():
    data = np.array([
        [3.5, 500000, 200],
        [4.2, 600000, 250],
        [5.1, 750000, 300],
        [6.0, 900000, 350],
        [7.2, 1_000_000, 420],  
    ])
    X = data[:, :-1]  
    y = data[:, -1]  

    model = LinearRegression()
    model.fit(X, y)

    joblib.dump(model, "workforce_cost_model.pkl")

# ✅ Load Model (Retrain if missing)
try:
    model = joblib.load("workforce_cost_model.pkl")
except FileNotFoundError:
    train_model()
    model = joblib.load("workforce_cost_model.pkl")

# ✅ API for Real-Time Cost Predictions
@app.route("/predict_cost", methods=["POST"])
def predict_cost():
    data = request.json
    features = np.array([[data["num_hires"], data["avg_salary"], data["market_demand"]]])

    cost_prediction = model.predict(features)[0]
    return jsonify({"estimatedCost": round(cost_prediction, 2)})

if __name__ == "__main__":
    app.run(port=5031, debug=True)
