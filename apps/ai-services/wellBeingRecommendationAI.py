import joblib
from flask import Flask, request, jsonify

##### Uses workload, engagement, and stress levels to recommend well-being strategies. #####
##### Suggests training programs, stress management tips, and lifestyle changes. #####

app = Flask(__name__)

recommendations = {
    "low_engagement": "Participate in mentorship programs and team-building activities.",
    "high_stress": "Consider mindfulness training and flexible work schedules.",
    "burnout_risk": "Reduce overtime hours and encourage work-life balance.",
}

@app.route("/recommend_wellbeing", methods=["POST"])
def recommend_wellbeing():
    data = request.json
    stress_level = data["stress_level"]
    engagement_score = data["engagement_score"]

    if engagement_score < 3:
        suggestion = recommendations["low_engagement"]
    elif stress_level > 7:
        suggestion = recommendations["high_stress"]
    else:
        suggestion = recommendations["burnout_risk"]

    return jsonify({"recommendation": suggestion})

if __name__ == "__main__":
    app.run(port=5037, debug=True)