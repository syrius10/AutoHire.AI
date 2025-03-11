import numpy as np
import joblib
from sklearn.svm import SVR

##### Assesses skills overlap & gaps #####

# Dataset: [Technical Skills Match %, Soft Skills Match %, Leadership Readiness] -> Skills Gap Score
data = np.array([
    [80, 70, 9, 5],  
    [60, 80, 6, 7],  
    [90, 85, 8, 3],  
    [70, 60, 7, 6],  
])

X = data[:, :-1]
y = data[:, -1]  # Skills Gap Score

model = SVR(C=1.0, kernel='rbf', gamma='scale')  # Default C=1.0, 'rbf' kernel, 'scale' for gamma
model.fit(X, y)

joblib.dump(model, "enterprise_skills_gap_model.pkl")
