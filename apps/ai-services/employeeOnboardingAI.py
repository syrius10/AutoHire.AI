import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-driven automated onboarding process #####

# Sample dataset: [Experience (Years), Job Role ID, Skill Level] -> Onboarding Track
data = np.array([
    [0, 1, 3, 0],  # New Grad → Beginner Onboarding
    [2, 2, 4, 1],  # Junior Dev → Standard Onboarding
    [5, 3, 5, 2],  # Senior Engineer → Fast-Track Onboarding
    [10, 4, 5, 2],  # Manager → Leadership Onboarding
])

X = data[:, :-1]  # Experience, Job Role, Skill Level
y = data[:, -1]   # Onboarding Track (0=Beginner, 1=Standard, 2=Advanced)

# Train AI model
model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="sqrt")
model.fit(X, y)

# Save the trained model
joblib.dump(model, "employee_onboarding.pkl")

def predict_onboarding_track(experience, job_role, skill_level):
    """Predicts the best onboarding track for a new employee."""
    prediction = model.predict([[experience, job_role, skill_level]])[0]
    onboarding_tracks = ["Beginner", "Standard", "Advanced"]
    return onboarding_tracks[prediction]

# ✅ Test Case
if __name__ == "__main__":
    print(predict_onboarding_track(3, 2, 4))  # Expected output: "Standard"
