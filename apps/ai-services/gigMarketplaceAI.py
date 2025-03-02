import joblib
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

##### AI-powered gig work marketplace matching freelancers to tasks #####

# Sample dataset: [Freelancer Skills, Experience (Years), Rating] -> Job Match Score
data = np.array([
    [5, 3, 4.5, 90],  # Strong match
    [3, 2, 3.5, 75],  # Medium match
    [1, 1, 2.0, 40],  # Weak match
    [4, 5, 4.8, 95],  # Excellent match
])

X = data[:, :-1]  # Freelancer Skills, Experience, Rating
y = data[:, -1]   # Match Score (0-100)

# Train AI model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)

# Save trained model
joblib.dump(model, "gig_marketplace_ai.pkl")

def predict_gig_match(skills, experience, rating):
    """Predicts job match score for a freelancer."""
    prediction = model.predict([[skills, experience, rating]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_gig_match(4, 3, 4.0))  # Expected Output: A match score
