import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor

##### AI-driven workforce prediction models that improve over time. #####

# Sample dataset: [Experience, Industry Demand, AI Adoption Level] → Workforce Prediction Score
data = np.array([
    [5, 80, 3, 75],  # Experienced, high demand, mid AI adoption
    [2, 60, 4, 60],  # Entry-level, moderate demand, high AI adoption
    [10, 90, 2, 85],  # Senior, high demand, low AI adoption
    [7, 50, 5, 65],  # Mid-career, low demand, high AI adoption
])

X = data[:, :-1]  # Experience, Industry Demand, AI Adoption Level
y = data[:, -1]   # Workforce Prediction Score

# Train AI model
model = GradientBoostingRegressor(random_state=42, learning_rate=0.1, n_estimators=100)
model.fit(X, y)

# Save trained model
joblib.dump(model, "self_improving_workforce.pkl")

def predict_workforce_evolution(experience, industry_demand, ai_adoption):
    """Predicts workforce evolution and demand over time."""
    prediction = model.predict([[experience, industry_demand, ai_adoption]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_workforce_evolution(6, 70, 3))  # Expected Output: Workforce Prediction Score
