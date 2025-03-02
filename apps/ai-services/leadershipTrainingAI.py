import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-driven personalized leadership training tailored to skills & experience. #####

# Sample dataset: [Experience (Years), Leadership Courses, Performance Score] -> Training Recommendation
data = np.array([
    [3, 1, 70, "Basic Leadership"],
    [5, 2, 80, "Advanced Leadership"],
    [10, 3, 90, "Executive Leadership"],
    [2, 0, 65, "Foundational Leadership"],
])

X = data[:, :-1].astype(float)  # Features: Experience, Leadership Courses, Performance Score
y = data[:, -1]  # Target: Training Recommendation

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "leadership_training_ai.pkl")

def recommend_leadership_training(experience, courses, performance):
    """Predicts the recommended leadership training program."""
    prediction = model.predict([[experience, courses, performance]])[0]
    return prediction

# ✅ Test Case
if __name__ == "__main__":
    print(recommend_leadership_training(6, 2, 85))  # Expected Output: "Advanced Leadership"
