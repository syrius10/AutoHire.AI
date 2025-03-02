import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### AI-driven team collaboration & productivity monitoring. #####

# Sample dataset: [Communication Score, Work Distribution, Feedback Score] → Productivity Score
data = np.array([
    [9, 8, 9, 85],  # Strong collaboration, high productivity
    [7, 6, 7, 70],  # Moderate collaboration, average productivity
    [5, 4, 6, 55],  # Low collaboration, low productivity
    [8, 7, 8, 78],  # Good teamwork, above-average productivity
])

X = data[:, :-1]  # Communication, Work Distribution, Feedback Score
y = data[:, -1]   # Productivity Score

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "collaboration_tracking_ai.pkl")

def predict_productivity(communication, work_distribution, feedback):
    """Predicts team productivity based on AI analysis."""
    score = model.predict([[communication, work_distribution, feedback]])[0]
    return f"Predicted Productivity Score: {round(score, 2)}"

if __name__ == "__main__":
    print(predict_productivity(7, 6, 8))  # Example productivity prediction
