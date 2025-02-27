import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from flask import Flask, request, jsonify

##### AI-driven freelancer career planning & management #####

app = Flask(__name__)

# Sample training data: [Experience Level, Completed Gigs, Client Ratings] -> Career Recommendation
data = np.array([
    [1, 5, 4.5, "Entry-Level Growth"],
    [3, 15, 4.7, "Expand Client Base"],
    [5, 30, 4.8, "Increase Rates & Specialization"],
    [7, 50, 4.9, "Become a Consultant"],
])

X = data[:, :-1].astype(float)  # Features: Experience Level, Completed Gigs, Client Ratings
y = data[:, -1]  # Career Recommendation Labels

model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "freelancer_career_ai.pkl")


@app.route("/career-planning", methods=["POST"])
def career_planning():
    """AI-powered freelancer career guidance"""
    try:
        data = request.json
        features = np.array([[data["experience"], data["completed_gigs"], data["rating"]]])
        recommendation = model.predict(features)[0]
        return jsonify({"careerRecommendation": recommendation})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5064, debug=True)
