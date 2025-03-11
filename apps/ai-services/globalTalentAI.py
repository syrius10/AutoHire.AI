import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestClassifier

##### AI-powered global candidate sourcing & assessment #####

app = Flask(__name__)

# Sample dataset: [Experience, Education Level, Skill Match %, Remote Work Preference] → Candidate Suitability Score
data = np.array([
    [5, 3, 80, 1, 85],
    [8, 4, 90, 0, 92],
    [3, 2, 70, 1, 65],
    [10, 5, 95, 0, 98],
])

X = data[:, :-1]  # Candidate Features
y = data[:, -1]   # Suitability Score

model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="sqrt")
model.fit(X, y)

# Save the trained model
joblib.dump(model, "global_talent_ai.pkl")

@app.route("/global-talent", methods=["POST"])
def assess_candidate():
    data = request.json
    features = np.array([[data["experience"], data["education"], data["skill_match"], data["remote_pref"]]])
    suitability_score = model.predict(features)[0]
    return jsonify({"suitabilityScore": round(suitability_score, 2)})

if __name__ == "__main__":
    app.run(port=5043, debug=True)
