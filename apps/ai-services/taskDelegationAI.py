import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier
import random

##### AI-powered task delegation & optimization #####

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
model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="sqrt")
model.fit(X, y)

# Save trained model
joblib.dump(model, "task_delegation_ai.pkl")


class TaskDelegationAI:
    def __init__(self):
        self.task_complexity_threshold = 0.6  # Above this, assign to humans, else AI

    def assign_task(self, skill, workload, complexity):
        """Determines task priority and delegates to AI or Human."""
        priority = model.predict([[skill, workload, complexity]])[0]
        assigned_priority = "High Priority Task" if priority == 1 else "Low Priority Task"

        ai_capability = random.uniform(0.3, 1.0)  # AI's ability to handle tasks
        assigned_to = "AI Agent" if ai_capability >= self.task_complexity_threshold else "Human Freelancer"

        return {
            "task_priority": assigned_priority,
            "assigned_to": assigned_to
        }


# ✅ Test Case
if __name__ == "__main__":
    task_ai = TaskDelegationAI()
    result = task_ai.assign_task(skill=7, workload=4, complexity=6)
    print(result)  # Expected: Task priority + AI vs Human decision
