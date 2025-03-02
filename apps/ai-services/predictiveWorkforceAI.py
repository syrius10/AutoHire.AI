import joblib
import numpy as np
from sklearn.ensemble import RandomForestRegressor

##### AI-driven workforce planning with predictive hiring needs. #####

# Sample dataset: [Industry Growth Rate, Hiring Budget, Company Size] -> Predicted Hiring Needs
data = np.array([
    [3.5, 500000, 200, 30],
    [4.2, 600000, 300, 50],
    [5.1, 750000, 500, 80],
    [6.0, 900000, 700, 120],
])

X = data[:, :-1]  # Features: Industry Growth Rate, Hiring Budget, Company Size
y = data[:, -1]   # Target: Hiring Needs (number of new employees)

# Train AI model
model = RandomForestRegressor()
model.fit(X, y)

# Save trained model
joblib.dump(model, "predictive_workforce.pkl")

def predict_hiring_needs(industry_growth, budget, company_size):
    """Predicts future hiring needs based on company trends."""
    prediction = model.predict([[industry_growth, budget, company_size]])[0]
    return round(prediction)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_hiring_needs(5.5, 800000, 400))  # Expected Output: Predicted hiring needs
