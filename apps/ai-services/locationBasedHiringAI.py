import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI model predicting hiring demand in a location. #####
##### AI-powered real-time location-based hiring recommendations. #####
##### Uses AI to analyze hiring demand in different locations and match remote workers accordingly. #####

# Sample dataset: [Country Demand Score, Local Talent Availability, Cost of Living Index, Remote Work Infra]
data = np.array([
    [90, 70, 50, 80, 1],  # High Demand
    [60, 80, 60, 70, 1],  # Medium Demand
    [30, 40, 90, 50, 0],  # Low Demand
    [80, 90, 40, 85, 1],  # High Demand
])

X = data[:, :-1]  # Features: Country Demand Score, Local Talent Availability, Cost of Living, Remote Work Infra
y = data[:, -1]   # Target: Hiring Recommendation (1 = High, 0 = Low)

# Train AI model
model = RandomForestClassifier(random_state=42, min_samples_leaf=2, max_features="sqrt")
model.fit(X, y)

# Save trained model
joblib.dump(model, "location_based_hiring.pkl")

def predict_hiring_opportunity(demand_score, talent_availability, cost_living, infra_score):
    """Predicts hiring demand in a location."""
    prediction = model.predict([[demand_score, talent_availability, cost_living, infra_score]])[0]
    return "High Hiring Demand" if prediction == 1 else "Low Hiring Demand"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_hiring_opportunity(75, 80, 45, 90))  # Expected Output: "High Hiring Demand"
