import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI model predicting HR policy based on emotional data. #####
##### HR Policy Recommendations: Standard Policy (0), Adaptive Policy (1) #####
##### Features: Stress Level, Workload, Job Satisfaction, Productivity #####
##### Target: HR Policy (1 = Adaptive Policy, 0 = Standard Policy) #####
##### Sample dataset: [Stress Level, Workload, Job Satisfaction, Productivity] -> HR Policy Recommendation #####
##### AI-driven emotion-aware HR policies & adaptive work scheduling. #####
##### This model analyzes employee emotions, stress levels, and productivity trends to recommend personalized HR policies and adaptive scheduling strategies. #####

# Sample dataset: [Stress Level, Workload, Job Satisfaction, Productivity] -> HR Policy Recommendation
data = np.array([
    [2, 3, 8, 80, 1],  # Flexible Schedule
    [4, 5, 5, 60, 0],  # Standard Policy
    [1, 2, 9, 90, 1],  # Remote Work Recommendation
    [3, 4, 6, 70, 0],  # Standard Policy
])

X = data[:, :-1]  # Features: Stress Level, Workload, Job Satisfaction, Productivity
y = data[:, -1]   # Target: HR Policy (1 = Adaptive Policy, 0 = Standard Policy)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "emotion_aware_hr_policy.pkl")

def predict_hr_policy(stress, workload, satisfaction, productivity):
    """Predicts the best HR policy based on emotional and productivity data."""
    prediction = model.predict([[stress, workload, satisfaction, productivity]])[0]
    return "Adaptive HR Policy" if prediction == 1 else "Standard HR Policy"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_hr_policy(3, 4, 7, 75))  # Expected Output: HR Policy Recommendation
