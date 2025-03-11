import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### Identifies fake freelancer profiles #####

# Sample dataset: [Profile Completeness, Reviews Count, Response Rate, Identity Verified (0/1)] -> Fraud Risk
data = np.array([
    [100, 20, 90, 1, 0],
    [50, 5, 30, 0, 1],
    [85, 15, 80, 1, 0],
    [40, 2, 20, 0, 1],
])

X = data[:, :-1]
y = data[:, -1]

model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="auto")
model.fit(X, y)

# Save trained model
joblib.dump(model, "fraudulent_profile_detection_ai.pkl")
