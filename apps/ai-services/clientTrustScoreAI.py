import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor

##### AI-generated client trust scores #####

# Sample dataset: [Payment Timeliness, Dispute History, Freelancer Ratings] -> Trust Score
data = np.array([
    [95, 2, 4.8, 90],
    [80, 5, 4.0, 70],
    [100, 0, 5.0, 98],
    [60, 8, 3.5, 50],
])

X = data[:, :-1]
y = data[:, -1]

model = GradientBoostingRegressor(random_state=42, learning_rate=0.1)
model.fit(X, y)

# Save trained model
joblib.dump(model, "client_trust_score_ai.pkl")
