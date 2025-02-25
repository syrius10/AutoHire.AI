import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-driven executive search & hiring model. #####

# Sample Data: [Years of Experience, Leadership Score, Industry Demand] → Hiring Suitability
data = np.array([
    [10, 85, 8, 1],  
    [15, 92, 7, 1],  
    [7, 70, 5, 0],  
    [20, 96, 9, 1],  
])

X = data[:, :-1]
y = data[:, -1]

model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "executive_talent_ai.pkl")
