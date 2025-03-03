import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import GradientBoostingClassifier, RandomForestClassifier

##### AI-powered bias detection & ethical hiring enforcement #####

app = Flask(__name__)

# **Merged dataset combining previous features**
# Features: [Gender Bias, Age Bias, Ethnic Bias, Disability Inclusion, Experience, Skill Match, Education Level, Past Bias Reports]
data = np.array([
    [1, 1, 0, 8, 5, 80, 3, 0, 1],  # Fair Hiring
    [3, 2, 1, 4, 10, 90, 4, 0, 1],  # Fair Hiring
    [0, 0, 0, 10, 3, 60, 2, 1, 0],  # Biased Hiring
    [2, 3, 2, 5, 7, 85, 3, 0, 1],   # Fair Hiring
])

X = data[:, :-1]  # All Features
y = data[:, -1]   # Ethical Hiring Score (1 = Fair, 0 = Biased)

# ✅ **Train Gradient Boosting Model (Strong Predictor)**
gb_model = GradientBoostingClassifier()
gb_model.fit(X, y)

# ✅ **Train Random Forest Model (Backup Predictor)**
rf_model = RandomForestClassifier()
rf_model.fit(X, y)

# ✅ **Save Both Models**
joblib.dump(gb_model, "ethical_hiring_gb.pkl")
joblib.dump(rf_model, "ethical_hiring_rf.pkl")

@app.route("/detect_bias", methods=["POST"])
def detect_bias():
    """Detects bias in hiring decisions using ensemble AI models."""
    data = request.json
    features = np.array([[data["gender_bias"], data["age_bias"], data["ethnic_bias"], data["disability_inclusion_score"],
                          data["experience"], data["skill_match"], data["education_level"], data["bias_history"]]])

    gb_prediction = gb_model.predict(features)[0]
    rf_prediction = rf_model.predict(features)[0]

    # ✅ **Final Decision: If either model predicts fairness, the decision is fair**
    final_decision = "Fair Hiring" if gb_prediction == 1 or rf_prediction == 1 else "Biased Hiring"

    return jsonify({"Ethical Hiring Score": final_decision})

if __name__ == "__main__":
    app.run(port=5084, debug=True)
