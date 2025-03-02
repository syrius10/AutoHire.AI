import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### Uses AI to recommend personalized skill learning paths and reskilling strategies. #####

# Sample dataset: [Skill Gap Score, Learning Speed, Job Market Demand] -> Suggested Reskilling Path
data = np.array([
    [8, 7, 9, 1],  # High-priority Reskilling Needed
    [5, 6, 7, 0],  # Medium-priority Reskilling
    [9, 8, 9, 1],  # Immediate Reskilling Required
    [3, 4, 5, 0],  # Low-priority Reskilling
])

X = data[:, :-1]  # Features: Skill Gap, Learning Speed, Market Demand
y = data[:, -1]   # Target: 1 = Reskilling Recommended, 0 = No Immediate Need

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "adaptive_reskilling_ai.pkl")

def recommend_reskilling(skill_gap, learning_speed, job_demand):
    """Predicts whether reskilling is needed based on skill gaps and job market demand."""
    prediction = model.predict([[skill_gap, learning_speed, job_demand]])[0]
    return "Reskilling Recommended" if prediction == 1 else "No Immediate Reskilling Needed"

# ✅ Test Case
if __name__ == "__main__":
    print(recommend_reskilling(7, 6, 8))  # Example input
