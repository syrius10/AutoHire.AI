import numpy as np
from sklearn.ensemble import RandomForestClassifier
import joblib

##### AI model predicting real-time productivity. #####

# Sample dataset: [Hours Worked, Breaks Taken, Task Completion Rate] → Productivity Score (1 = High, 0 = Low)
data = np.array([
    [6, 3, 90, 1],  # High productivity
    [8, 2, 75, 1],  # Moderate productivity
    [10, 1, 60, 0],  # Low productivity
    [4, 4, 85, 1],  # High productivity
])

X = data[:, :-1]  # Hours Worked, Breaks Taken, Task Completion Rate
y = data[:, -1]  # Productivity Score (1 = High, 0 = Low)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "real_time_productivity.pkl")

def predict_productivity(hours_worked, breaks_taken, task_completion):
    """Predicts real-time productivity score."""
    prediction = model.predict([[hours_worked, breaks_taken, task_completion]])[0]
    return "High Productivity" if prediction == 1 else "Low Productivity"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_productivity(7, 3, 85))  # Expected Output: "High Productivity"
