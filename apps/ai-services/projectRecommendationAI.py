import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-driven project recommendations #####

# Sample training data: [Skill Level, Industry, Past Success Rate] → Project Fit Score
data = np.array([
    [5, 1, 90, 1],
    [7, 2, 85, 1],
    [3, 3, 70, 0],
    [8, 1, 95, 1],
])

X = data[:, :-1]
y = data[:, -1]

model = RandomForestClassifier(min_samples_leaf=2, max_features="auto", random_state=42, n_estimators=100)
model.fit(X, y)

joblib.dump(model, "project_recommendation_ai.pkl")
