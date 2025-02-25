import joblib
import numpy as np
from flask import Flask, request, jsonify

##### Detects fraudulent activities in gig work & payments. #####
##### Uses AI to analyze transaction history & behavioral anomalies. #####

app = Flask(__name__)

# Simulated fraud detection model
model = joblib.load("fraud_detection_model.pkl")

@app.route("/detect_fraud", methods=["POST"])
def detect_fraud():
    data = np.array([[request.json["transaction_amount"], request.json["frequency"], request.json["dispute_rate"]]])
    fraud_risk = model.predict(data)[0]
    return jsonify({"fraud_risk": "High" if fraud_risk else "Low"})

if __name__ == "__main__":
    app.run(port=5052, debug=True)
