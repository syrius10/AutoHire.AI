import joblib
import numpy as np
from sklearn.linear_model import LogisticRegression

##### Detects potential hiring bias in the recruitment process. #####
##### AI-driven bias detection & elimination in hiring and work assignments. #####

# Sample dataset: [Candidate Gender (0=Male, 1=Female), Ethnicity Score (0-1), Skill Score, Past Bias Reports] -> Bias Probability
data = np.array([
    [0, 0.2, 80, 0, 0],  # No Bias
    [1, 0.9, 85, 1, 1],  # Bias Detected
    [0, 0.5, 75, 0, 0],  # No Bias
    [1, 0.3, 90, 0, 0],  # No Bias
])

X = data[:, :-1]  # Candidate Gender, Ethnicity Score, Skill Score, Past Bias Reports
y = data[:, -1]   # Target: Bias Detected (1 = Yes, 0 = No)

# Train AI model
model = LogisticRegression(random_state=42)
model.fit(X, y)

# Save trained model
joblib.dump(model, "bias_elimination_model.pkl")

def detect_bias(candidate_gender, ethnicity_score, skill_score, past_bias_reports):
    """Detects potential hiring bias in the recruitment process."""
    prediction = model.predict([[candidate_gender, ethnicity_score, skill_score, past_bias_reports]])[0]
    return "Bias Detected" if prediction == 1 else "No Bias"

# ✅ Test Case
if __name__ == "__main__":
    print(detect_bias(1, 0.8, 88, 0))  # Expected: Bias Detected
