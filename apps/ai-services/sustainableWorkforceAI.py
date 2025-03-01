import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression

##### AI-driven workforce sustainability planning #####

app = Flask(__name__)

# Sample dataset: [Turnover Rate, Employee Engagement, Work-Life Balance, Training Hours]
data = np.array([
    [15, 70, 8, 10, 80],  # High sustainability
    [30, 50, 5, 5, 60],   # Medium sustainability
    [50, 30, 3, 2, 40],   # Low sustainability
])

X = data[:, :-1]  # Features: Turnover Rate, Engagement Score, Work-Life Balance, Training Hours
y = data[:, -1]   # Sustainability Score

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save model
joblib.dump(model, "sustainable_workforce.pkl")

@app.route("/predict_sustainability", methods=["POST"])
def predict_sustainability():
    """Predicts workforce sustainability score."""
    data = request.json
    features = np.array([[data["turnover_rate"], data["engagement_score"], data["work_life_balance"], data["training_hours"]]])
    prediction = model.predict(features)[0]
    
    return jsonify({"Sustainability Score": round(prediction, 2)})

if __name__ == "__main__":
    app.run(port=5083, debug=True)
