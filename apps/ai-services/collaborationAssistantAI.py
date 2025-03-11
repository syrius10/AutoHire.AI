import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-powered virtual workforce collaboration assistant. #####

# Sample dataset: [Collaboration History, Communication Frequency, Project Completion Rate] -> Productivity Score
data = np.array([
    [8, 20, 90, 1],  # High collaboration
    [5, 15, 70, 1],  # Medium collaboration
    [3, 10, 50, 0],  # Low collaboration
    [2, 5, 30, 0],   # Poor collaboration
])

X = data[:, :-1]  # Collaboration History, Communication Frequency, Project Completion Rate
y = data[:, -1]   # Productivity Score (1 = High, 0 = Low)

# Train AI model
model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="auto")
model.fit(X, y)

# Save trained model
joblib.dump(model, "collaboration_assistant.pkl")

def predict_collaboration_score(history, frequency, completion_rate):
    """Predicts team collaboration effectiveness."""
    prediction = model.predict([[history, frequency, completion_rate]])[0]
    return "High Collaboration" if prediction == 1 else "Low Collaboration"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_collaboration_score(6, 18, 80))  # Expected Output: "High Collaboration"
