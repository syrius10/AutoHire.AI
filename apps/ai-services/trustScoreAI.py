import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor

##### AI-generated freelancer & client trust scores #####

# Sample dataset: [Rating, Reviews, Completion Rate] → Trust Score
data = np.array([
    [4.8, 100, 95, 92],
    [4.2, 50, 85, 78],
    [3.9, 30, 70, 65],
])

X = data[:, :-1]
y = data[:, -1]

model = GradientBoostingRegressor(random_state=42, learning_rate=0.1)
model.fit(X, y)

joblib.dump(model, "trust_score_ai.pkl")
