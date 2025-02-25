import joblib
import numpy as np
from sklearn.ensemble import RandomForestRegressor

##### Predicts freelance market trends & job pricing #####

# Sample dataset: [Quarter, Demand Increase, Avg Rate] -> Market Growth Score
data = np.array([
    [1, 10, 30, 50],  
    [2, 20, 40, 60],  
    [3, 15, 50, 70],  
    [4, 25, 60, 90],  
])

X = data[:, :-1]  # Quarter, Demand Increase, Avg Rate
y = data[:, -1]   # Market Growth Score

model = RandomForestRegressor()
model.fit(X, y)

# Save trained model
joblib.dump(model, "freelance_market_trends.pkl")
