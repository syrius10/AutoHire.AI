import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-driven end-to-end HR process automation. #####

# Sample dataset: [Employee Tenure (years), Performance Score, Promotion History, Salary Level]
data = np.array([
    [2, 85, 0, 50000, 1],  # Eligible for automation
    [5, 90, 1, 70000, 1],  # Eligible
    [1, 70, 0, 40000, 0],  # Not eligible
    [7, 95, 2, 90000, 1],  # Highly eligible
])

X = data[:, :-1]  # Input: Tenure, Performance Score, Promotion History, Salary Level
y = data[:, -1]   # Output: HR process automation eligibility (1 = Yes, 0 = No)

# Train AI model
model = RandomForestClassifier(random_state=42, n_estimators=100, min_samples_leaf=2, max_features="auto")
model.fit(X, y)

# Save trained model
joblib.dump(model, "hr_process_automation.pkl")

def automate_hr_process(tenure, performance_score, promotions, salary):
    """Predicts if HR processes can be automated for an employee."""
    prediction = model.predict([[tenure, performance_score, promotions, salary]])[0]
    return "HR Automation Recommended" if prediction == 1 else "Manual HR Process Needed"

# ✅ Test Case
if __name__ == "__main__":
    print(automate_hr_process(3, 88, 1, 60000))  # Example test case
