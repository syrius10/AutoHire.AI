import joblib
from sklearn.neighbors import KNeighborsClassifier
import numpy as np

##### AI-powered freelancer-job matching #####

# Sample dataset: [Skills Score, Experience, Client Rating] -> Freelancer Match Score
data = np.array([
    [85, 5, 4.8, 1],  
    [70, 3, 4.5, 1],  
    [60, 2, 4.2, 0],  
    [90, 7, 4.9, 1],  
])

X = data[:, :-1]  # Features: Skills Score, Experience, Client Rating
y = data[:, -1]   # Label: Match (1 = Yes, 0 = No)

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

joblib.dump(model, "freelance_talent_matching.pkl")
