import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### AI model suggesting workflow automation or delegation. #####

# Sample dataset: [Task Complexity, Employee Workload, AI Automation Feasibility] → Workflow Suggestion
data = np.array([
    [8, 6, 1, 1],  # Automate task
    [5, 4, 0, 0],  # Delegate task
    [7, 3, 1, 1],  # Automate task
    [3, 8, 0, 0],  # Delegate task
])

X = data[:, :-1]  # Task Complexity, Employee Workload, AI Automation Feasibility
y = data[:, -1]  # Workflow Suggestion (1 = Automate, 0 = Delegate)

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "adaptive_workflow.pkl")

def suggest_workflow(task_complexity, workload, automation_feasibility):
    """Suggests whether to automate or delegate a task."""
    prediction = model.predict([[task_complexity, workload, automation_feasibility]])[0]
    return "Automate Task" if prediction == 1 else "Delegate Task"

# ✅ Test Case
if __name__ == "__main__":
    print(suggest_workflow(6, 5, 1))  # Expected Output: "Automate Task" or "Delegate Task"
