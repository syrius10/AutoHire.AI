import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### AI-based employee performance prediction & task assignment #####

# Sample dataset: [Work Hours, Task Completion Rate, Years of Experience] -> Performance Score
data = np.array([
    [40, 0.9, 2, 85],  # High performer
    [35, 0.75, 1, 70],  # Medium performer
    [50, 0.95, 5, 95],  # Top performer
    [30, 0.6, 3, 60],  # Low performer
])

X = data[:, :-1]  # Input: Work Hours, Task Completion Rate, Years of Experience
y = data[:, -1]   # Output: Performance Score

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "performance_prediction.pkl")

def predict_performance(work_hours, completion_rate, experience):
    """Predicts employee performance based on work conditions."""
    prediction = model.predict([[work_hours, completion_rate, experience]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_performance(42, 0.85, 3))  # Example test case
