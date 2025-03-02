import joblib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

##### Uses AI to recommend career transition paths based on skills, experience, and industry demand. #####

# Sample dataset: [Current Role Level, Skill Set Match, Job Demand, Career Growth Potential] -> Recommended Transition
data = np.array([
    [3, 8, 7, 9, 1],  # Eligible for Promotion
    [2, 6, 5, 7, 0],  # No Immediate Transition
    [4, 9, 8, 9, 1],  # Recommended for Lateral Move
    [1, 4, 6, 5, 0],  # Needs Skill Development
])

X = data[:, :-1]  # Features: Current Role Level, Skill Set Match, Job Demand, Growth Potential
y = data[:, -1]   # Target: 1 = Transition Recommended, 0 = Stay in Current Role

# Train AI model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# Save trained model
joblib.dump(model, "role_transition_ai.pkl")

def suggest_role_transition(role_level, skill_match, job_demand, growth_potential):
    """Suggests whether an employee should transition to a new role."""
    prediction = model.predict([[role_level, skill_match, job_demand, growth_potential]])[0]
    return "Recommended for Role Transition" if prediction == 1 else "Stay in Current Role"

# ✅ Test Case
if __name__ == "__main__":
    print(suggest_role_transition(3, 7, 6, 8))  # Example input
