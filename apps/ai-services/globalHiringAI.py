import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-driven international hiring and relocation predictions.
##### This model predicts the best countries to hire from based on skills demand, talent availability, and relocation feasibility.

# Sample dataset: [Skills Demand, Talent Availability, Relocation Feasibility] → Best Country
data = np.array([
    [8, 7, 9, 1],  # Best (1 = Yes, 0 = No)
    [6, 5, 7, 1],
    [4, 3, 5, 0],
    [9, 8, 10, 1],
    [3, 2, 4, 0],
])

X = data[:, :-1]  # Skills Demand, Talent Availability, Relocation Feasibility
y = data[:, -1]   # Best Country (1 = Yes, 0 = No)

# Train AI model
model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="auto")
model.fit(X, y)

# Save trained model
joblib.dump(model, "global_hiring.pkl")

def predict_best_hiring_country(skills_demand, talent_availability, relocation_feasibility):
    """Predicts if a country is suitable for hiring based on AI analysis."""
    prediction = model.predict([[skills_demand, talent_availability, relocation_feasibility]])
    return "Best Country for Hiring" if prediction[0] == 1 else "Not Recommended"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_best_hiring_country(7, 6, 8))  # Example input
