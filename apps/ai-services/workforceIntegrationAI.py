import numpy as np
import joblib
from sklearn.cluster import KMeans

##### AI-driven workforce integration modeling #####

# Sample dataset: [Employee Count, Skills Overlap, Cultural Fit Score]
data = np.array([
    [500, 70, 8.5], 
    [1000, 85, 9.0], 
    [1500, 60, 7.5], 
    [2000, 90, 9.2], 
])

model = KMeans(n_clusters=2)
model.fit(data)

joblib.dump(model, "workforce_integration_model.pkl")
