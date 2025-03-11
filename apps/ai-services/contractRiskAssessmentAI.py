import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### AI-driven contract risk analysis #####

# Sample dataset: [Payment Timeliness, Contract Length, Dispute Frequency] -> Risk Level
data = np.array([
    [30, 6, 1, 0],
    [15, 3, 5, 1],
    [45, 12, 0, 0],
    [10, 2, 8, 1],
])

X = data[:, :-1]  
y = data[:, -1]  

model = GradientBoostingClassifier(random_state=42, learning_rate=0.1)
model.fit(X, y)

joblib.dump(model, "contract_risk_assessment.pkl")
