import joblib
import numpy as np
from sklearn.ensemble import RandomForestRegressor

##### AI-powered freelancer reputation scoring #####

# Sample dataset: [Successful Projects, Avg Rating, Client Feedback Score] -> Reputation Score
data = np.array([
    [10, 4.5, 85, 80],
    [25, 4.8, 90, 95],
    [5, 4.0, 75, 60],
    [40, 5.0, 95, 99],
])

X = data[:, :-1]  # Features: Successful Projects, Avg Rating, Client Feedback Score
y = data[:, -1]   # Reputation Score

model = RandomForestRegressor()
model.fit(X, y)

# Save trained model
joblib.dump(model, "freelancer_reputation_ai.pkl")
