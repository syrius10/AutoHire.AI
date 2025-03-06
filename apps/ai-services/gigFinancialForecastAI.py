import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### AI-based predictive financial forecasting for independent workers. #####

# Sample dataset: [Past Monthly Income] → Predicted Future Monthly Income
data = np.array([
    [1000, 1200],  
    [2000, 2200],  
    [3000, 3300],  
    [4000, 4400],  
    [5000, 5500]
])

X = data[:, :-1]  # Past Income
y = data[:, -1]   # Future Income

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save model
joblib.dump(model, "gig_financial_forecast.pkl")

def predict_future_income(past_income):
    """Predicts freelancer future earnings based on past trends."""
    prediction = model.predict([[past_income]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_future_income(3500))  # Example prediction
