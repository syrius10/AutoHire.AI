import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### AI-Powered Leadership Decision-Making Model #####

# Sample dataset: [Experience (years), Strategic Thinking Score, Team Leadership Score] -> Decision Confidence Level
data = np.array([
    [3, 70, 75, 1],  
    [5, 80, 85, 1],  
    [1, 60, 65, 0],  
    [10, 90, 95, 1],  
])

X = data[:, :-1]  # Experience, Strategic Thinking, Team Leadership
y = data[:, -1]   # Leadership Decision Confidence (1 = High, 0 = Low)

# Train AI model
model = GradientBoostingClassifier(learning_rate=0.1, random_state=42)
model.fit(X, y)

# Save trained model
joblib.dump(model, "leadership_decision.pkl")

def assess_decision_confidence(experience, strategic_thinking, team_leadership):
    """Predicts leadership decision confidence level."""
    prediction = model.predict([[experience, strategic_thinking, team_leadership]])[0]
    return "High Confidence" if prediction == 1 else "Low Confidence"

# ✅ Test Case
if __name__ == "__main__":
    print(assess_decision_confidence(7, 85, 90))  # Expected Output: Decision Confidence Level
