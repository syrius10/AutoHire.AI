import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestClassifier

##### Uses historical workload, stress level, and work hours to predict burnout. #####
##### Identifies employees at risk of fatigue and decreased productivity. #####

app = Flask(__name__)

# Load Pre-Trained Model
try:
    model = joblib.load("burnout_risk_model.pkl")
except FileNotFoundError:
    model = None    # Placeholder if model isn't available

@app.route("/predict_burnout", methods=["POST"])
def predict_burnout():
    data = request.json
    features = np.array([[data["work_hours"], data["stress_level"], data["sleep_quality"]]])

    if model:
        burnout_score = model.predict(features)[0]
    else:
        burnout_score = (data["work_hours"] * 0.3) + (data["stress_level"] * 0.5) + (data["sleep_quality"] * 0.2)

    return jsonify({"burnoutRisk": round(burnout_score, 2)})

if __name__ == "__main__":
    app.run(port=5036, debug=True)