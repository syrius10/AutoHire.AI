import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI model recommending workforce policy. #####
##### Predicts whether a workforce policy should be approved or needs review. #####
##### AI-driven policy recommendations for workforce automation governance. #####

# Sample dataset: [Industry Type, Workforce Automation Level, Compliance Score] → Policy Recommendation
data = np.array([
    [1, 80, 95, 1],  # High automation, strong compliance
    [2, 50, 70, 0],  # Medium automation, moderate compliance
    [3, 30, 50, 0],  # Low automation, weak compliance
    [1, 90, 98, 1],  # Advanced automation, strong compliance
])

X = data[:, :-1]  # Features: Industry Type, Automation Level, Compliance Score
y = data[:, -1]   # Policy Recommendation (1 = Approved, 0 = Needs Review)

model = RandomForestClassifier(
    random_state=42,  
    min_samples_leaf=2,  # Ensures at least 2 samples per leaf to prevent overfitting
    max_features="sqrt"  # Uses a subset of features to improve efficiency
)

model.fit(X, y)

# Save model
joblib.dump(model, "ai_workforce_policy.pkl")

def recommend_policy(industry_type, automation_level, compliance_score):
    """Predicts AI workforce policy recommendations."""
    prediction = model.predict([[industry_type, automation_level, compliance_score]])[0]
    return "Approved" if prediction == 1 else "Needs Review"

if __name__ == "__main__":
    print(recommend_policy(1, 85, 90))  # Expected Output: Approved
