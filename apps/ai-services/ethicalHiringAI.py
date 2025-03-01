import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import GradientBoostingClassifier

##### AI-based bias detection & ethical hiring enforcement #####

app = Flask(__name__)

# Sample dataset: [Gender Bias, Age Bias, Ethnic Bias, Disability Inclusion Score]
data = np.array([
    [1, 1, 0, 8, 1],  # Fair Hiring
    [3, 2, 1, 4, 0],  # Biased Hiring
    [0, 0, 0, 10, 1], # Highly Fair
    [2, 3, 2, 5, 0],  # Moderate Bias
])

X = data[:, :-1]  # Features: Gender Bias, Age Bias, Ethnic Bias, Disability Inclusion Score
y = data[:, -1]   # Ethical Hiring Score: (1 = Fair, 0 = Biased)

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, "ethical_hiring.pkl")

@app.route("/detect_bias", methods=["POST"])
def detect_bias():
    """Detects bias in hiring practices."""
    data = request.json
    features = np.array([[data["gender_bias"], data["age_bias"], data["ethnic_bias"], data["disability_inclusion_score"]]])
    prediction = model.predict(features)[0]
    result = "Fair Hiring" if prediction == 1 else "Biased Hiring"
    
    return jsonify({"Ethical Hiring Score": result})

if __name__ == "__main__":
    app.run(port=5084, debug=True)
