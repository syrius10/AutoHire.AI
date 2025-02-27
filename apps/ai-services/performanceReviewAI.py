import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor

##### AI-powered employee performance tracking & feedback #####

# Sample dataset: [Task Completion %, Peer Feedback, Manager Rating] -> Performance Score
data = np.array([
    [85, 4.2, 4.5, 88],  
    [75, 3.8, 4.0, 78],  
    [90, 4.7, 4.9, 92],  
    [65, 3.5, 3.8, 70],  
])

X = data[:, :-1]  # Task Completion %, Peer Feedback, Manager Rating
y = data[:, -1]   # Performance Score (out of 100)

# Train AI model
model = GradientBoostingRegressor()
model.fit(X, y)

# Save trained model
joblib.dump(model, "performance_review.pkl")

def predict_performance(task_completion, peer_feedback, manager_rating):
    """Predicts employee performance score based on evaluation data."""
    prediction = model.predict([[task_completion, peer_feedback, manager_rating]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_performance(80, 4.0, 4.2))  # Example Output: 84.5
