import numpy as np
import joblib
from sklearn.linear_model import LinearRegression

##### AI-powered real-time employee productivity & energy tracking. #####

# Sample dataset: [Sleep Hours, Work Hours, Breaks Taken] → Productivity Score
data = np.array([
    [6, 8, 2, 85],  # High productivity
    [5, 10, 1, 60],  # Moderate productivity
    [4, 12, 0, 40],  # Low productivity
    [7, 7, 3, 90],  # Very high productivity
])

X = data[:, :-1]  # Sleep Hours, Work Hours, Breaks Taken
y = data[:, -1]   # Productivity Score

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "productivity_energy_tracker.pkl")

def track_productivity(sleep_hours, work_hours, breaks_taken):
    """Predicts real-time productivity score based on sleep, work hours, and breaks."""
    prediction = model.predict([[sleep_hours, work_hours, breaks_taken]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(track_productivity(6, 9, 2))  # Example prediction
