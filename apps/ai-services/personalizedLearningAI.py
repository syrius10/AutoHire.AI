import joblib
import numpy as np
from flask import Flask, request, jsonify

##### AI-driven personalized learning recommendations. #####

app = Flask(__name__)

# Load AI Model
try:
    model = joblib.load("personalized_learning_model.pkl")
except FileNotFoundError:
    model = None

@app.route("/learning-recommendations", methods=["POST"])
def learning_recommendations():
    data = request.json
    skills = np.array([[data["currentSkills"], data["desiredRole"]]])

    if model:
        recommendations = model.predict(skills)
    else:
        recommendations = ["Machine Learning Bootcamp", "Advanced SQL Training"]  # Default suggestions

    return jsonify({"recommendedCourses": recommendations})

if __name__ == "__main__":
    app.run(port=5056, debug=True)
