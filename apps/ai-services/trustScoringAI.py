import numpy as np
from sklearn.ensemble import RandomForestRegressor
import joblib

##### AI-based freelancer & employer trust and credibility scoring. #####

# Sample dataset: [Number of Jobs Completed, Ratings, Payment Timeliness, Dispute History] → Trust Score
data = np.array([
    [50, 4.8, 95, 0, 90],  # Highly trusted freelancer
    [20, 4.2, 85, 1, 75],  # Medium trust
    [10, 3.5, 70, 2, 60],  # Low trust
    [5, 2.8, 50, 3, 40],   # Poor credibility
])

X = data[:, :-1]  # Features: Jobs Completed, Ratings, Payment Timeliness, Dispute History
y = data[:, -1]   # Trust Score (0-100)

# Train AI model
model = RandomForestRegressor(n_estimators=100, random_state=42, min_samples_leaf=2, max_features="auto")
model.fit(X, y)

# Save trained model
joblib.dump(model, "trust_scoring_model.pkl")

def predict_trust_score(jobs_completed, rating, payment_timeliness, dispute_count):
    """Predicts the trust score of a freelancer or employer."""
    prediction = model.predict([[jobs_completed, rating, payment_timeliness, dispute_count]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_trust_score(30, 4.5, 90, 1))  # Expected Output: Trust Score around 80
