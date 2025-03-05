import joblib
import numpy as np
from flask import Flask, request, jsonify

##### AI model that predicts freelancer credibility based on blockchain data. #####
##### AI-driven freelancer credibility scoring via blockchain. #####

# Sample dataset: [Past Jobs, Rating, Payment Timeliness] → Credibility Score
data = np.array([
    [50, 4.8, 1, 95],  # Highly credible freelancer
    [20, 3.9, 0, 75],  # Medium credibility
    [5, 2.5, 0, 40],   # Low credibility
])

X = data[:, :-1]  # Features: Past Jobs, Rating, Payment Timeliness
y = data[:, -1]   # Credibility Score

# Train AI model
from sklearn.ensemble import RandomForestRegressor
model = RandomForestRegressor()
model.fit(X, y)

# Save trained model
joblib.dump(model, "blockchain_credibility.pkl")

app = Flask(__name__)

@app.route("/credibility-score", methods=["POST"])
def credibility_score():
    """Predicts freelancer credibility score based on blockchain data."""
    data = request.json
    past_jobs = data["past_jobs"]
    rating = data["rating"]
    payment_timeliness = data["payment_timeliness"]

    prediction = model.predict([[past_jobs, rating, payment_timeliness]])[0]
    return jsonify({"credibility_score": round(prediction, 2)})

if __name__ == "__main__":
    app.run(port=5124, debug=True)
