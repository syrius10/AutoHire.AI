import joblib
import numpy as np
from sklearn.svm import SVR

##### Assesses competitor rates & pricing strategies #####

# Sample dataset: [Competitor Rate, Experience Level, Demand] -> Price Competitiveness Score
data = np.array([
    [30, 1, 60, 20],  
    [45, 3, 75, 35],  
    [70, 5, 85, 50],  
    [90, 7, 95, 80],  
])

X = data[:, :-1]  # Competitor Rate, Experience Level, Demand
y = data[:, -1]   # Price Competitiveness Score

model = SVR()
model.fit(X, y)

# Save trained model
joblib.dump(model, "competition_analysis_model.pkl")
