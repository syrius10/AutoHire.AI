import joblib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

##### Identifies high-potential employees for leadership roles. #####

# Sample Data: [Years at Company, Leadership Score, Innovation Index] → Leadership Potential
data = np.array([
    [4, 85, 7, 1],  
    [6, 90, 8, 1],  
    [2, 75, 6, 0],  
    [8, 92, 9, 1],  
])

X = data[:, :-1]
y = data[:, -1]

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# Save trained model
joblib.dump(model, "high_potential_leaders_ai.pkl")
