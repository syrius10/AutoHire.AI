import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestClassifier

##### ✅ Predicts internal promotions, lateral moves & leadership readiness. #####
##### ✅ Uses past performance data & skill progression. #####

app = Flask(__name__)

# ✅ Train Model
def train_model():
    data = np.array([
        [2, 80, 3, 1],  
        [5, 90, 5, 1],  
        [3, 75, 2, 0],  
        [7, 95, 6, 1],  
    ])
    X = data[:, :-1]  
    y = data[:, -1]  

    model = RandomForestClassifier()
    model.fit(X, y)

    joblib.dump(model, "talent_mobility_model.pkl")

# ✅ Load Model
try:
    model = joblib.load("talent_mobility_model.pkl")
except FileNotFoundError:
    train_model()
    model = joblib.load("talent_mobility_model.pkl")

# ✅ API for Talent Mobility Predictions
@app.route("/predict_mobility", methods=["POST"])
def predict_mobility():
    data = request.json
    features = np.array([[data["years_at_company"], data["performance_score"], data["skills_acquired"]]])

    mobility_prediction = model.predict(features)[0]
    return jsonify({"mobilitySuggestion": "Promotion" if mobility_prediction == 1 else "No Promotion"})

if __name__ == "__main__":
    app.run(port=5032, debug=True)
