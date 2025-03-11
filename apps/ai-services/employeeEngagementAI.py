import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from transformers import pipeline
from flask import Flask, request, jsonify

##### 🔹 AI MODEL 1: Sentiment Analysis for Employee Feedback #####
sentiment_analyzer = pipeline("sentiment-analysis")

##### 🔹 AI MODEL 2: Machine Learning for HR Engagement Data #####
# Sample dataset: [Workload Balance, Team Satisfaction, Career Growth] -> Engagement Level
data = np.array([
    [3, 4, 4, 1],  # Engaged
    [2, 3, 3, 0],  # Neutral
    [1, 2, 2, 0],  # Disengaged
    [4, 5, 5, 1],  # Highly Engaged
])

X = data[:, :-1]  # Workload Balance, Team Satisfaction, Career Growth
y = data[:, -1]   # Engagement Level (1 = Engaged, 0 = Disengaged)

# Train AI model
ml_model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="auto")
ml_model.fit(X, y)

# Save trained model
joblib.dump(ml_model, "employee_engagement_ml.pkl")

##### 🔹 AI API for Employee Engagement Analysis #####
app = Flask(__name__)

@app.route("/predict_engagement", methods=["POST"])
def predict_engagement():
    """Combines Sentiment Analysis with ML-based HR Data for Engagement Scoring."""
    data = request.json
    text_feedback = data.get("feedback", "")
    workload = data.get("workload_score", 3)  # Default: Neutral
    team_satisfaction = data.get("team_satisfaction", 3)  # Default: Neutral
    career_growth = data.get("career_growth", 3)  # Default: Neutral

    # ✅ 1️⃣ Sentiment Analysis for Feedback
    sentiment_result = sentiment_analyzer(text_feedback)[0]
    sentiment_score = sentiment_result["score"] if sentiment_result["label"] == "POSITIVE" else -sentiment_result["score"]

    # ✅ 2️⃣ Machine Learning-Based Engagement Score
    ml_engagement_score = ml_model.predict([[workload, team_satisfaction, career_growth]])[0]

    # ✅ 3️⃣ Combined Score (Averaged for Final Prediction)
    final_score = round((sentiment_score + ml_engagement_score) / 2, 2)

    return jsonify({"engagementScore": final_score, "sentimentAnalysis": sentiment_result["label"]})

if __name__ == "__main__":
    app.run(port=5073, debug=True)


