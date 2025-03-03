import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### Trains a model to predict workforce demand based on economic indicators. #####
##### AI-driven real-time economic workforce predictions. #####

# Sample dataset: [GDP Growth, Unemployment Rate, Industry Demand Score] -> Workforce Demand Index
data = np.array([
    [2.5, 5.0, 80, 90],  # Strong growth
    [1.2, 6.5, 70, 75],  # Moderate
    [-0.5, 8.0, 60, 50],  # Weak economy
    [3.0, 4.5, 85, 95],  # High workforce demand
])

X = data[:, :-1]  # Features: GDP Growth, Unemployment Rate, Industry Demand Score
y = data[:, -1]   # Target: Workforce Demand Index

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save model
joblib.dump(model, "economic_workforce.pkl")

def predict_workforce_demand(gdp_growth, unemployment_rate, industry_demand):
    """Predicts workforce demand based on economic indicators."""
    prediction = model.predict([[gdp_growth, unemployment_rate, industry_demand]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_workforce_demand(2.0, 5.2, 78))  # Expected Output: Workforce Demand Index
