import joblib
import numpy as np
from flask import Flask, request, jsonify

##### AI-powered reskilling suggestions. #####

app = Flask(__name__)

# Load AI Model
try:
    model = joblib.load("smart_reskilling_model.pkl")
except FileNotFoundError:
    model = None

@app.route("/reskilling-suggestions", methods=["POST"])
def reskilling_suggestions():
    data = request.json
    skills = np.array([[data["currentSkills"], data["targetIndustry"]]])

    if model:
        suggestions = model.predict(skills)
    else:
        suggestions = ["Cloud Computing Certification", "Cybersecurity Training"]

    return jsonify({"reskillingPaths": suggestions})

if __name__ == "__main__":
    app.run(port=5057, debug=True)
