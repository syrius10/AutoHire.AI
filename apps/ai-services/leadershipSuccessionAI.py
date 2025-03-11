import joblib
import numpy as np
from sklearn.linear_model import LogisticRegression

##### AI-powered leadership succession planning. #####

# Sample Data: [Years at Company, Performance Score, Leadership Training] → Succession Readiness
data = np.array([
    [5, 88, 1, 1],  
    [7, 92, 1, 1],  
    [3, 75, 0, 0],  
    [10, 95, 1, 1],  
])

X = data[:, :-1]
y = data[:, -1]

model = LogisticRegression(random_state=42)
model.fit(X, y)

# Save trained model
joblib.dump(model, "leadership_succession_ai.pkl")
