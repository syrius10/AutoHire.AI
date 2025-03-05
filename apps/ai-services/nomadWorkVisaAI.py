import joblib
import numpy as np
from sklearn.linear_model import LogisticRegression

##### Predicts work visa approval likelihood. #####
##### Predicts the ease of obtaining a work visa based on country policies, skill shortage, and employment status. #####

# Sample dataset: [Country Visa Score, Skill Shortage, Job Type Match, Work Experience Years]
data = np.array([
    [85, 1, 1, 5, 1],  # High Chance
    [70, 0, 1, 2, 1],  # Moderate Chance
    [40, 0, 0, 1, 0],  # Low Chance
    [90, 1, 1, 7, 1],  # High Chance
])

X = data[:, :-1]  # Features: Country Visa Score, Skill Shortage, Job Type Match, Work Experience
y = data[:, -1]   # Target: Work Visa Approval (1 = High Chance, 0 = Low Chance)

# Train AI model
model = LogisticRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "nomad_work_visa.pkl")

def predict_work_visa_eligibility(visa_score, skill_shortage, job_match, experience_years):
    """Predicts likelihood of obtaining a work visa."""
    prediction = model.predict([[visa_score, skill_shortage, job_match, experience_years]])[0]
    return "High Chance of Approval" if prediction == 1 else "Low Chance of Approval"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_work_visa_eligibility(80, 1, 1, 4))  # Expected Output: "High Chance of Approval"
