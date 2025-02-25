import joblib
import numpy as np
from sklearn.neighbors import NearestNeighbors

##### AI-powered freelancer-client matching #####

# Sample dataset: [Years of Experience, Rating, Completed Projects]
data = np.array([
    [2, 4.5, 15],
    [5, 4.8, 50],
    [3, 4.2, 20],
    [8, 5.0, 80],
])

model = NearestNeighbors(n_neighbors=1, algorithm="auto")
model.fit(data)

# Save trained model
joblib.dump(model, "freelance_network_ai.pkl")
