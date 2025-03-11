import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-powered job rotation & internal mobility predictions. #####

# Sample training data: [Years at Company, Performance Score, Skills Acquired] -> Rotation Likelihood
data = np.array([
    [2, 80, 3, 1],  
    [5, 90, 5, 1],  
    [3, 75, 2, 0],  
    [7, 95, 6, 1],  
])

X = data[:, :-1]  # Years at Company, Performance Score, Skills Acquired
y = data[:, -1]   # Rotation (1 = Likely, 0 = Unlikely)

# Train AI model
model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="auto")
model.fit(X, y)

# Save trained model
joblib.dump(model, "internal_job_rotation.pkl")

def predict_job_rotation(years, performance_score, skills):
    """Predicts likelihood of job rotation for an employee."""
    prediction = model.predict([[years, performance_score, skills]])
    return "Likely" if prediction[0] == 1 else "Unlikely"

if __name__ == "__main__":
    print(predict_job_rotation(4, 85, 4))
