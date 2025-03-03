import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor

##### AI model predicting economic trends impacting hiring & workforce stability. #####
##### Predicts economic trends impacting hiring & workforce stability. #####
##### AI-based employer-employee economic forecast models. #####

# Sample dataset: [Average Salary, Cost of Living Index, Inflation Rate] -> Economic Forecast Score
data = np.array([
    [50000, 85, 2.5, 70],  # Stable economy
    [60000, 90, 3.0, 75],  # Strong growth
    [45000, 80, 1.5, 60],  # Moderate
    [40000, 95, 4.0, 50],  # Unstable economy
])

X = data[:, :-1]  # Features: Average Salary, Cost of Living Index, Inflation Rate
y = data[:, -1]   # Target: Economic Forecast Score

# Train AI model
model = GradientBoostingRegressor()
model.fit(X, y)

# Save model
joblib.dump(model, "economic_forecast.pkl")

def predict_economic_forecast(avg_salary, cost_of_living, inflation_rate):
    """Predicts economic trends impacting hiring & workforce stability."""
    prediction = model.predict([[avg_salary, cost_of_living, inflation_rate]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_economic_forecast(55000, 88, 2.8))  # Expected Output: Economic Forecast Score
