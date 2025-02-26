import joblib
import numpy as np
from flask import Flask, request, jsonify

##### AI-powered skill gap analysis & training paths. #####

app = Flask(__name__)

# Load Model
try:
    model = joblib.load("skill_gap_model.pkl")
except FileNotFoundError:
    model = None

@app.route("/skill-gap-analysis", methods=["POST"])
def skill_gap_analysis():
    data = request.json
    gap_data = np.array([[data["requiredSkills"], data["currentSkills"]]])

    if model:
        gap_report = model.predict(gap_data)
    else:
        gap_report = ["Deep Learning Fundamentals", "Kubernetes Mastery"]

    return jsonify({"skillGaps": gap_report})

if __name__ == "__main__":
    app.run(port=5058, debug=True)
