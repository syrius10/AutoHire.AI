import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-driven self-optimizing work schedules for employee well-being. #####

# Sample dataset: [Workload, Preferred Work Hours, Energy Level] → Optimized Work Schedule
data = np.array([
    [8, 6, 7, 1],  # Optimized: Start early
    [5, 8, 6, 0],  # Optimized: Mid-day work
    [7, 4, 5, 1],  # Optimized: Afternoon work
    [9, 3, 4, 0],  # Optimized: Evening work
])

X = data[:, :-1]  # Workload, Preferred Hours, Energy Level
y = data[:, -1]   # Optimized Work Schedule (1 = Morning, 0 = Evening)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "work_schedule_optimizer.pkl")

def optimize_work_schedule(workload, preferred_hours, energy_level):
    """Predicts optimized work schedule based on employee well-being factors."""
    prediction = model.predict([[workload, preferred_hours, energy_level]])[0]
    return "Morning Schedule" if prediction == 1 else "Evening Schedule"

# ✅ Test Case
if __name__ == "__main__":
    print(optimize_work_schedule(6, 5, 7))  # Example prediction
