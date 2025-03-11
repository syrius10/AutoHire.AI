import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-based career progression automation for self-driven growth. #####

# Sample dataset: [Years of Experience, Skills Level, Career Growth Score] → Career Advancement Probability
data = np.array([
    [3, 2, 0],  # Early career, Intermediate skills → Low promotion chance
    [7, 3, 1],  # Mid-career, Advanced skills → High promotion chance
    [10, 4, 1], # Senior-level, Expert skills → Very High promotion chance
    [5, 2, 0],  # Early-Mid, Intermediate skills → Moderate promotion chance
])

X = data[:, :-1]  # Experience, Skills Level
y = data[:, -1]   # Career Advancement Probability (1 = Likely, 0 = Unlikely)

# Train AI model
model = RandomForestClassifier(min_samples_leaf=2, max_features="sqrt", random_state=42)
model.fit(X, y)

# Save trained model
joblib.dump(model, "self_adapting_career.pkl")

def predict_career_progression(experience, skills_level):
    """Predicts likelihood of career advancement based on AI analysis."""
    prediction = model.predict([[experience, skills_level]])[0]
    return "High Career Growth Likelihood" if prediction == 1 else "Moderate Growth Likelihood"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_career_progression(6, 3))  # Expected Output: Career Growth Likelihood
