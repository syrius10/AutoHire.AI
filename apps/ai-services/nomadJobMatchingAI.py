import joblib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

##### Predicts job match score for digital nomads. #####
##### Uses AI to recommend job opportunities based on skills, work preferences, and location flexibility. #####

# Sample dataset: [Remote-Friendly, Skill Match %, Timezone Compatibility, Past Remote Work Exp] -> Job Match Score
data = np.array([
    [1, 90, 1, 2, 1],  # Strong Match
    [1, 80, 0, 1, 1],  # Good Match
    [0, 70, 1, 0, 0],  # Weak Match
    [1, 60, 1, 1, 1],  # Moderate Match
])

X = data[:, :-1]  # Features: Remote-Friendly, Skill Match %, Timezone Compatibility, Past Remote Work Exp
y = data[:, -1]   # Target: Job Match Score (1 = Strong Match, 0 = Weak Match)

# Train AI model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# Save trained model
joblib.dump(model, "nomad_job_matching.pkl")

def predict_nomad_job_match(remote_friendly, skill_match, timezone_compatible, remote_experience):
    """Predicts job match score for digital nomads."""
    prediction = model.predict([[remote_friendly, skill_match, timezone_compatible, remote_experience]])[0]
    return "Strong Match" if prediction == 1 else "Weak Match"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_nomad_job_match(1, 85, 1, 2))  # Expected Output: "Strong Match"
