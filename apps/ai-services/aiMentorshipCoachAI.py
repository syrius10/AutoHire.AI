import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### Real-time AI coaching & mentorship system for leadership growth. #####

# Sample dataset: [Mentorship Sessions, Feedback Score, Learning Engagement] -> Growth Index
data = np.array([
    [5, 4.5, 80, 85],
    [10, 4.8, 90, 95],
    [3, 3.9, 70, 75],
    [8, 4.2, 85, 88],
])

X = data[:, :-1]  # Features: Mentorship Sessions, Feedback Score, Learning Engagement
y = data[:, -1]  # Target: Growth Index

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "ai_mentorship_coach_ai.pkl")

def predict_leadership_growth(sessions, feedback, engagement):
    """Predicts leadership growth based on mentorship coaching insights."""
    prediction = model.predict([[sessions, feedback, engagement]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_leadership_growth(6, 4.6, 82))  # Expected Output: Growth Index
