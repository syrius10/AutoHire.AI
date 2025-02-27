import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### 🔹 Automates HR functions like hiring, payroll, employee onboarding, and benefits management. #####
##### 🔹 Uses machine learning to predict HR trends, payroll optimizations, and workforce needs. #####

# Sample training data: [Hiring Demand, Payroll Budget, Employee Growth] -> HR Action
data = np.array([
    [5, 500000, 20, 1],  # Approve Hiring
    [2, 300000, 5, 0],   # No Action
    [8, 800000, 30, 1],  # Approve Hiring
    [1, 200000, 2, 0],   # No Action
])

X = data[:, :-1]  # Hiring Demand, Payroll Budget, Employee Growth
y = data[:, -1]   # HR Action (1 = Hire, 0 = No Action)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "hr_automation_ai.pkl")

def predict_hr_action(hiring_demand, payroll_budget, employee_growth):
    """Predicts whether HR should approve new hires or hold based on budget and workforce needs."""
    prediction = model.predict([[hiring_demand, payroll_budget, employee_growth]])[0]
    return "Approve Hiring" if prediction == 1 else "Hold Action"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_hr_action(6, 600000, 25))  # Expected Output: "Approve Hiring"
