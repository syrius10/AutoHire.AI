import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### Predicts employee attrition risk. #####

# Sample dataset: [Job Satisfaction, Workload, Years at Company, Left? (1=yes, 0=no)]
data = np.array([
    [3, 50, 2, 1],
    [4, 40, 5, 0],
    [2, 60, 1, 1],
    [5, 30, 8, 0],
])

X = data[:, :-1]
y = data[:, -1]

model = GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, max_depth=3, random_state=42)
model.fit(X, y)

# Save model
joblib.dump(model, "predictive_turnover_model.pkl")