import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### Uses AI to dynamically suggest job role adjustments based on employee performance, skills, and organizational needs. #####

# Sample dataset: [Performance Score, Experience (Years), Skill Level, Adaptability] -> Suggested Role
data = np.array([
    [85, 5, 8, 7, 1],  # Promoted to Senior Role
    [70, 3, 6, 6, 0],  # Remains in Current Role
    [95, 7, 9, 8, 1],  # Promoted to Leadership Role
    [60, 2, 5, 5, 0],  # Needs Further Development
])

X = data[:, :-1]  # Features: Performance Score, Experience, Skill Level, Adaptability
y = data[:, -1]   # Target: 1 = Role Change, 0 = No Change

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "dynamic_role_ai.pkl")

def predict_role_adjustment(performance, experience, skill_level, adaptability):
    """Predicts whether an employee should transition to a new role."""
    prediction = model.predict([[performance, experience, skill_level, adaptability]])[0]
    return "Promote / Adjust Role" if prediction == 1 else "Stay in Current Role"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_role_adjustment(80, 4, 7, 7))  # Example input
