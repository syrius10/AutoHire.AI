import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### AI-based identification of high-potential strategic leaders. #####

# Sample dataset: [Experience (Years), Strategic Thinking Score, Leadership Projects] -> Leadership Potential
data = np.array([
    [5, 85, 3, 1],  # High Potential
    [8, 90, 5, 1],  # High Potential
    [3, 70, 1, 0],  # Medium Potential
    [10, 95, 7, 1],  # High Potential
    [2, 60, 0, 0],  # Low Potential
])

X = data[:, :-1]  # Features: Experience, Strategic Thinking Score, Leadership Projects
y = data[:, -1]   # Target: Leadership Potential (1 = High, 0 = Low)

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "strategic_leadership_ai.pkl")

def predict_leadership_potential(experience, strategy_score, projects):
    """Predicts if an individual has high strategic leadership potential."""
    prediction = model.predict([[experience, strategy_score, projects]])[0]
    return "High Potential Leader" if prediction == 1 else "Needs Further Development"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_leadership_potential(6, 88, 4))  # Expected Output: "High Potential Leader"
