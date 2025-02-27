import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### 🔹 Ensures fair hiring practices and eliminates bias in HR decisions. #####
##### 🔹 Uses machine learning to assess hiring fairness and diversity factors. #####

# Sample training data: [Candidate Score, Diversity Factor, HR Bias Score] -> Fair Hiring Decision
data = np.array([
    [85, 1, 2, 1],  # Fair Hire
    [70, 0, 5, 0],  # Biased Decision (Should Be Flagged)
    [90, 1, 1, 1],  # Fair Hire
    [60, 0, 7, 0],  # Biased Decision (Should Be Flagged)
])

X = data[:, :-1]  # Candidate Score, Diversity Factor, HR Bias Score
y = data[:, -1]   # Hiring Decision (1 = Fair, 0 = Biased)

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "ethics_governance_ai.pkl")

def evaluate_hiring_fairness(candidate_score, diversity_factor, hr_bias_score):
    """Predicts whether a hiring decision is fair or biased."""
    prediction = model.predict([[candidate_score, diversity_factor, hr_bias_score]])[0]
    return "Fair Hiring Decision" if prediction == 1 else "Potential Bias Detected"

# ✅ Test Case
if __name__ == "__main__":
    print(evaluate_hiring_fairness(75, 1, 3))  # Expected Output: "Fair Hiring Decision"
