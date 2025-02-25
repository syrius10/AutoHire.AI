import numpy as np
import joblib
from sklearn.linear_model import LinearRegression

##### AI-powered real-time pricing model for freelance work #####

# Sample dataset: [Experience Level, Demand Score, Industry Rate] -> Suggested Price
data = np.array([
    [1, 50, 25, 30],  
    [3, 70, 40, 50],  
    [5, 85, 60, 75],  
    [7, 95, 80, 100],  
])

X = data[:, :-1]  # Experience Level, Demand Score, Industry Rate
y = data[:, -1]   # Suggested Price

model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "dynamic_pricing_model.pkl")
