import joblib
import numpy as np
from sklearn.ensemble import IsolationForest

##### Detects fake/manipulated freelancer reviews #####

# Sample dataset: [Review Length, Sentiment Score, Repetition Rate] -> Fake Review (1=Fake, 0=Genuine)
data = np.array([
    [250, 0.9, 0.02, 0],
    [100, 0.1, 0.5, 1],
    [180, 0.7, 0.1, 0],
    [90, 0.2, 0.7, 1],
])

X = data[:, :-1]  # Features
y = data[:, -1]   # Labels

model = IsolationForest(contamination=0.1, random_state=42)
model.fit(X)

# Save trained model
joblib.dump(model, "review_validation_ai.pkl")
