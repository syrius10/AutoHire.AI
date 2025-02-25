import joblib
import numpy as np
from flask import Flask, request, jsonify

##### Uses engagement levels, workload, and company tenure to predict employee attrition risk. #####
##### Helps HR teams take proactive actions to improve retention. #####

app = Flask(__name__)

# Load AI Model
try:
    model = joblib.load("retention_model.pkl")
except FileNotFoundError:
    model = None

@app.route("/predict_retention", methods=["POST"])
def predict_retention():
    data = request.json
    features = np.array([[data["engagement_score"], data["workload"], data["tenure"]]])

    if model:
        retention_risk = model.predict(features)[0]
    else:
        retention_risk = (data["engagement_score"] * -0.4) + (data["workload"] * 0.3) + (data["tenure"] * -0.2)

    return jsonify({"retentionRisk": round(retention_risk, 2)})

if __name__ == "__main__":
    app.run(port=5038, debug=True) 