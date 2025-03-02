import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-powered task delegation & optimization. #####

# Sample dataset: [Skill Level, Workload, Task Complexity] → Assigned Priority
data = np.array([
    [8, 2, 5, 1],  # High skill, low workload → High priority task
    [6, 5, 7, 0],  # Medium skill, medium workload → Medium priority task
    [4, 8, 6, 0],  # Low skill, high workload → Low priority task
    [9, 3, 8, 1],  # Expert, manageable workload → High priority
])

X = data[:, :-1]  # Skill Level, Workload, Task Complexity
y = data[:, -1]   # Task Assignment Priority (1 = High, 0 = Low)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "task_delegation_ai.pkl")

def assign_task(skill, workload, complexity):
    """Determines task priority based on AI predictions."""
    prediction = model.predict([[skill, workload, complexity]])[0]
    return "High Priority Task" if prediction == 1 else "Low Priority Task"

if __name__ == "__main__":
    print(assign_task(7, 4, 6))  # Example task assignment
