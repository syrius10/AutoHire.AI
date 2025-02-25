import joblib
import numpy as np
from sklearn.linear_model import Ridge

##### Forecasts freelancer earnings based on demand & experience #####

# Sample dataset: [Experience Level, Job Demand, Avg Hourly Rate] -> Predicted Monthly Earnings
data = np.array([
    [1, 50, 30, 2000],  
    [3, 70, 40, 3500],  
    [5, 85, 60, 5000],  
    [7, 95, 80, 7500],  
])

X = data[:, :-1]  # Experience Level, Job Demand, Avg Hourly Rate
y = data[:, -1]   # Predicted Monthly Earnings

model = Ridge()
model.fit(X, y)

# Save trained model
joblib.dump(model, "earnings_forecast_model.pkl")
