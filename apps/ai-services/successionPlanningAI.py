import joblib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

##### AI model suggesting leadership succession paths. #####

# Sample dataset: [Experience (Years), Leadership Courses, Promotions, Performance Score]
data = np.array([
    [5, 2, 1, 80],
    [10, 4, 2, 90],
    [15, 6, 3, 95],
    [3, 1, 0, 70],
])

X = data[:, :-1]
y = data[:, -1]

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# Save model
joblib.dump(model, "succession_planning_ai.pkl")