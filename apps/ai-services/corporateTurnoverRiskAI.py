import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import GradientBoostingClassifier

##### ✅ Predicts company-wide attrition risk. #####
##### ✅ Analyzes engagement scores, workload, and tenure. #####

app = Flask(__name__)

# Define constant for the model filename
MODEL_FILENAME = "corporate_turnover_model.pkl"

# ✅ Train Model
def train_model():
    data = np.array([
        [70, 40, 2, 1],  
        [90, 30, 5, 0],  
        [60, 50, 1, 1],  
        [85, 35, 7, 0],  
    ])
    X = data[:, :-1]  
    y = data[:, -1]  

    model = GradientBoostingClassifier(learning_rate=0.1, random_state=42)
    model.fit(X, y)

    joblib.dump(model, MODEL_FILENAME)

# ✅ Load Model
try:
    model = joblib.load(MODEL_FILENAME)
except FileNotFoundError:
    train_model()
    model = joblib.load(MODEL_FILENAME)

# ✅ API for Turnover Risk Prediction
@app.route("/predict_turnover", methods=["POST"])
def predict_turnover():
    data = request.json
    features = np.array([[data["engagement_score"], data["workload"], data["tenure"]]])

    risk_prediction = model.predict(features)[0]
    return jsonify({"turnoverRisk": "High" if risk_prediction == 1 else "Low"})

if __name__ == "__main__":
    app.run(port=5034, debug=True)
