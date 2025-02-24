from flask import Flask, request, jsonify
import joblib
import numpy as np

##### AI model that suggests workforce adjustments based on market changes. #####

app = Flask(__name__)

# Load trained model
model = joblib.load("future_skill_trends_model.pkl")

@app.route("/predict_adaptability", methods=["POST"])
def predict_adaptability():
    data = request.json
    year = data.get("year", 2025)
    job_role = data.get("job_role", "AI Engineer")

    # Simulate encoding job roles
    job_role_encoded = {"Software Engineer": 0, "Data Scientist": 1, "AI Engineer": 2, "Cybersecurity Analyst": 3}.get(job_role, 0)

    prediction = model.predict([[year, job_role_encoded]])[0]

    strategy = "Expand hiring" if prediction > 7 else "Reskill existing workforce"

    return jsonify({"prediction": round(prediction, 2), "strategy": strategy})

if __name__ == "__main__":
    app.run(port-5029, debug=True)