import joblib
import numpy as np
from sklearn.neural_network import MLPClassifier

##### AI-powered autonomous job seeker that applies for jobs & optimizes career paths. #####

# Sample dataset: [Years of Experience, Skill Match %, Previous Job Success] -> Job Application Success
data = np.array([
    [2, 70, 1, 1],  # Successful application
    [5, 90, 2, 1],  
    [1, 50, 0, 0],  # Unsuccessful
    [7, 95, 3, 1],  
])

X = data[:, :-1]  # Years of Experience, Skill Match %, Previous Job Success
y = data[:, -1]   # Job Application Success (1 = Yes, 0 = No)

# Train AI model
model = MLPClassifier(hidden_layer_sizes=(10, 5), max_iter=500)
model.fit(X, y)

# Save trained model
joblib.dump(model, "ai_job_seeker.pkl")

def apply_for_job(experience, skill_match, prev_success):
    """Determines if AI Job Seeker should apply based on past trends."""
    prediction = model.predict([[experience, skill_match, prev_success]])[0]
    return "Application Likely to Succeed" if prediction == 1 else "Application Unlikely to Succeed"

# ✅ Test Case
if __name__ == "__main__":
    print(apply_for_job(4, 85, 1))  # Expected Output: "Application Likely to Succeed"
