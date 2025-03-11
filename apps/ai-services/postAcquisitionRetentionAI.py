import numpy as np
import joblib
from sklearn.ensemble import RandomForestClassifier

##### Analyzes retention risks post-acquisition #####

# Dataset: [Job Satisfaction, Compensation Change, Leadership Change] -> Retention Risk
data = np.array([
    [80, 5, 2, 0],  
    [65, -3, 3, 1],  
    [90, 10, 1, 0],  
    [50, -5, 4, 1],  
])

X = data[:, :-1]
y = data[:, -1]  # Retention Risk (1 = High, 0 = Low)

model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="sqrt")
model.fit(X, y)

joblib.dump(model, "post_acquisition_retention_model.pkl")
