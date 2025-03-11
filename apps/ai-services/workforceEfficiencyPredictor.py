import numpy as np
import joblib
from sklearn.ensemble import RandomForestRegressor

##### AI model predicting workforce productivity & efficiency. #####

# Sample dataset: [Avg Weekly Hours, Projects Completed, Team Size, Productivity Score]
data = np.array([
    [40, 5, 10, 80],
    [38, 6, 12, 85],
    [45, 7, 8, 90],
    [50, 4, 15, 75],
])

X = data[:, :-1]
y = data[:, -1]

model = RandomForestRegressor(n_estimators=100, random_state=42, min_samples_leaf=2, max_features="auto")
model.fit(X, y)

# Save model
joblib.dump(model, "workforce_efficiency_predictor.pkl")