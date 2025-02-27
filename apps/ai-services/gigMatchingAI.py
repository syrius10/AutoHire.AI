import joblib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
from flask import Flask, request, jsonify

##### Smart gig opportunity recommendations based on AI insights #####

app = Flask(__name__)

# Sample dataset: [Skill Match %, Market Demand %, Client Reviews] -> Gig Category
data = np.array([
    [90, 80, 4.5, "Software Development"],
    [75, 85, 4.3, "Graphic Design"],
    [60, 70, 4.0, "Content Writing"],
    [50, 90, 4.2, "Digital Marketing"],
])

X = data[:, :-1].astype(float)  # Features: Skill Match %, Market Demand %, Client Reviews
y = data[:, -1]  # Gig Category

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# Save trained model
joblib.dump(model, "gig_matching_ai.pkl")


@app.route("/gig-matching", methods=["POST"])
def gig_matching():
    """AI-powered gig recommendation system"""
    try:
        data = request.json
        features = np.array([[data["skill_match"], data["market_demand"], data["rating"]]])
        gig_category = model.predict(features)[0]
        return jsonify({"recommendedGig": gig_category})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5065, debug=True)
