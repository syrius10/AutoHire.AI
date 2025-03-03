import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### Trains a model to predict employee wellness based on work-life balance factors. #####
##### Features: Stress Level, Sleep Hours, Work Hours, Workload #####
##### Target: Wellness Score (Higher is better) #####
##### AI-driven wellness monitoring and stress management. #####
##### This model continuously monitors employee stress levels, workload, and self-reported wellness metrics to provide personalized well-being recommendations. #####


# Sample dataset: [Stress Level, Sleep Hours, Work Hours, Workload] -> Wellness Score
data = np.array([
    [3, 7, 8, 5, 80],  # Balanced
    [5, 5, 10, 8, 60], # Overworked
    [2, 8, 7, 4, 90],  # Healthy
    [4, 6, 9, 6, 70],  # Moderate Stress
])

X = data[:, :-1]  # Features: Stress Level, Sleep Hours, Work Hours, Workload
y = data[:, -1]   # Target: Wellness Score (Higher is better)

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "real_time_wellness.pkl")

def predict_wellness(stress, sleep, work_hours, workload):
    """Predicts employee wellness score based on work-life balance factors."""
    wellness_score = model.predict([[stress, sleep, work_hours, workload]])[0]
    return f"Wellness Score: {round(wellness_score, 2)}"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_wellness(4, 6, 9, 7))  # Expected Output: Wellness Score
