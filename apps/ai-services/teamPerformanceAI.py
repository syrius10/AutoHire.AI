import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
from flask import Flask, request, jsonify

##### AI-based team performance monitoring & collaboration optimization #####

app = Flask(__name__)

# Sample dataset: [Collaboration Score, Productivity Score, Communication Score] -> Team Performance Category
data = np.array([
    [8, 9, 9, 1],  # High Performing
    [6, 7, 7, 1],  # Good Performance
    [4, 5, 6, 0],  # Needs Improvement
    [2, 3, 4, 0],  # Poor Performance
])

X = data[:, :-1]  # Collaboration Score, Productivity Score, Communication Score
y = data[:, -1]   # Performance Category (1 = Strong Team, 0 = Needs Improvement)

# Train AI model
model = GradientBoostingClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "team_performance_ai.pkl")

def predict_team_performance(collaboration, productivity, communication):
    """Predicts if a team is performing optimally based on various metrics."""
    prediction = model.predict([[collaboration, productivity, communication]])[0]
    return "High Performing Team" if prediction == 1 else "Needs Improvement"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_team_performance(7, 8, 8))  # Expected Output: "High Performing Team"
