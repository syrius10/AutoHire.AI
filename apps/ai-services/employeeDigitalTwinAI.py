import joblib
import numpy as np
from sklearn.ensemble import RandomForestRegressor

##### AI-based Digital Twin Model for Employees #####

# Sample dataset: [Experience (years), Skill Level, Performance Score] -> Productivity Score
data = np.array([
    [2, 60, 70, 65],  
    [5, 80, 85, 80],  
    [10, 90, 95, 90],  
    [3, 65, 75, 70],  
])

X = data[:, :-1]  # Experience, Skill Level, Performance Score
y = data[:, -1]   # Predicted Productivity Score

# Train AI model
model = RandomForestRegressor(random_state=42, min_samples_leaf=2, max_features="sqrt", n_estimators=50)
model.fit(X, y)

# Save trained model
joblib.dump(model, "employee_digital_twin.pkl")

def predict_productivity(experience, skill_level, performance_score):
    """Predicts employee productivity using digital twin AI."""
    prediction = model.predict([[experience, skill_level, performance_score]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(predict_productivity(6, 75, 80))  # Expected Output: Productivity Score
