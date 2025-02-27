import joblib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

##### AI-based skill transition tracking & role adaptability recommendations. #####

# Sample data: [Current Skill Level, Industry Demand, Training Hours] -> Transition Readiness
data = np.array([
    [3, 7, 20, 1],  
    [5, 9, 40, 1],  
    [2, 5, 10, 0],  
    [6, 10, 50, 1],  
])

X = data[:, :-1]  # Current Skill Level, Industry Demand, Training Hours
y = data[:, -1]   # Transition Readiness (1 = Ready, 0 = Not Ready)

# Train AI model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# Save trained model
joblib.dump(model, "skill_transition.pkl")

def predict_skill_transition(skill_level, demand, training_hours):
    """Predicts readiness for role transition based on skill level & demand."""
    prediction = model.predict([[skill_level, demand, training_hours]])
    return "Ready for Transition" if prediction[0] == 1 else "Needs More Training"

if __name__ == "__main__":
    print(predict_skill_transition(4, 8, 30))
