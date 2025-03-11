import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from flask import Flask, request, jsonify

##### AI-driven personalized well-being plans for employees #####

app = Flask(__name__)

# Sample dataset: [Work Hours, Workload, Job Satisfaction, Stress Level] -> Well-Being Score
data = np.array([
    [40, 3, 8, 2, 80],  # Healthy
    [45, 4, 6, 3, 70],  # Slightly stressed
    [50, 5, 5, 5, 50],  # Stressed
    [30, 2, 9, 1, 90],  # Excellent well-being
])

X = data[:, :-1]  # Work Hours, Workload, Job Satisfaction, Stress Level
y = data[:, -1]   # Well-Being Score (0-100)

# Train AI model
model = RandomForestClassifier(min_samples_leaf=2, max_features="auto", random_state=42)
model.fit(X, y)

# Save trained model
joblib.dump(model, "well_being_ai.pkl")

def predict_well_being(work_hours, workload, job_satisfaction, stress_level):
    """Predicts employee well-being score based on workplace conditions."""
    score = model.predict([[work_hours, workload, job_satisfaction, stress_level]])[0]
    return {"WellBeingScore": round(score, 2)}

# ✅ Test Case
if __name__ == "__main__":
    print(predict_well_being(42, 3, 7, 2))  # Expected Output: {"WellBeingScore": 75}
