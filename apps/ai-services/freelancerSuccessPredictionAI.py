import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### Forecasts freelancer success rates #####

# Sample dataset: [Years of Experience, Client Rating, Job Completion Rate] -> Success Probability
data = np.array([
    [5, 4.8, 98, 1],
    [3, 4.5, 90, 1],
    [1, 4.0, 75, 0],
    [7, 4.9, 99, 1],
])

X = data[:, :-1]  
y = data[:, -1]  

model = RandomForestClassifier(n_estimators=100)
model.fit(X, y)

joblib.dump(model, "freelancer_success_prediction.pkl")
