import joblib
import numpy as np
from flask import Flask, request, jsonify

##### AI-powered career trajectory prediction based on industry trends. #####

app = Flask(__name__)

# Load pre-trained model
try:
    model = joblib.load("career_path_model.pkl")
except FileNotFoundError:
    model = None

@app.route("/predict-career-path", methods=["POST"])
def predict_career_path():
    data = request.json
    user_profile = np.array([[data["experience"], data["education"], data["industry_growth"]]])

    if model:
        prediction = model.predict(user_profile)[0]
    else:
        prediction = "Software Engineer"  # Default placeholder

    return jsonify({"recommendedCareer": prediction})

if __name__ == "__main__":
    app.run(port=5055, debug=True)
