import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### AI-based stress-free, burnout-preventive work models. #####

# Sample dataset: [Work Hours, Stress Level, Sleep Quality] → Burnout Risk Level
data = np.array([
    [10, 8, 4, 1],  # High burnout risk
    [8, 5, 6, 0],  # Moderate burnout risk
    [6, 3, 8, 0],  # Low burnout risk
    [12, 9, 3, 1],  # High burnout risk
])

X = data[:, :-1]  # Work Hours, Stress Level, Sleep Quality
y = data[:, -1]   # Burnout Risk Level (1 = High Risk, 0 = Low Risk)

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "burnout_prevention.pkl")

def predict_burnout(work_hours, stress_level, sleep_quality):
    """Predicts burnout risk level based on work habits and stress levels."""
    prediction = model.predict([[work_hours, stress_level, sleep_quality]])[0]
    return "High Burnout Risk" if prediction == 1 else "Low Burnout Risk"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_burnout(9, 7, 5))  # Example prediction
