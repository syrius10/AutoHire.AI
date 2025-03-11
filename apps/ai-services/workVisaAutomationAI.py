import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### AI-based work visa eligibility and compliance automation.
##### This model determines the probability of a successful work visa application based on candidate profile & country regulations.

# Sample dataset: [Years of Experience, Job Offer Type, Country Visa Strictness] → Visa Approval
data = np.array([
    [5, 1, 3, 1],  # Approved (1 = Yes, 0 = No)
    [3, 0, 5, 0],
    [7, 1, 2, 1],
    [2, 0, 6, 0],
    [10, 1, 1, 1],
])

X = data[:, :-1]  # Years of Experience, Job Offer Type (1 = Skilled, 0 = Unskilled), Country Visa Strictness
y = data[:, -1]   # Visa Approval (1 = Yes, 0 = No)

# Train AI model
model = GradientBoostingClassifier(random_state=42, learning_rate=0.1)
model.fit(X, y)

# Save trained model
joblib.dump(model, "work_visa_automation.pkl")

def predict_visa_eligibility(experience, job_offer, country_strictness):
    """Predicts work visa eligibility based on experience, job type, and country rules."""
    prediction = model.predict([[experience, job_offer, country_strictness]])
    return "Eligible for Work Visa" if prediction[0] == 1 else "Not Eligible"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_visa_eligibility(6, 1, 3))  # Example input
