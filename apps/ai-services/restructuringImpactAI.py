import numpy as np
import joblib
from sklearn.linear_model import LinearRegression

##### Predicts workforce restructuring effects #####

# Dataset: [Department Restructuring, Attrition Rate, Productivity Change]
data = np.array([
    [5, 10, -2],  
    [3, 5, 1],  
    [7, 15, -5],  
    [4, 7, 0],  
])

X = data[:, :-1]  # Restructuring & Attrition
y = data[:, -1]   # Productivity Impact

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, "restructuring_impact_model.pkl")
