import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

#####AI-powered workflow optimization & process automation.#####

# Sample dataset: [Task Complexity, Task Urgency, Available Workforce] -> Automation Feasibility
data = np.array([
    [3, 5, 10, 1],  # Feasible for automation
    [2, 4, 5, 1],   # Feasible
    [5, 2, 2, 0],   # Not feasible
    [4, 5, 8, 1],   # Feasible
])

X = data[:, :-1]  # Input: Task Complexity, Task Urgency, Available Workforce
y = data[:, -1]   # Output: Workflow automation feasibility (1 = Yes, 0 = No)

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "workflow_automation.pkl")

def automate_workflow(task_complexity, task_urgency, available_staff):
    """Predicts whether a task is feasible for workflow automation."""
    prediction = model.predict([[task_complexity, task_urgency, available_staff]])[0]
    return "Workflow Automation Recommended" if prediction == 1 else "Manual Workflow Required"

# ✅ Test Case
if __name__ == "__main__":
    print(automate_workflow(4, 5, 7))  # Example test case
