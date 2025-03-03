import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI model predicting global hiring trends. #####
##### Analyzes market indicators to forecast future hiring demand. #####
##### Features: Industry Growth Rate, Remote Work %, AI Adoption Score #####
##### Target: Hiring Demand (1 = High, 0 = Low) #####
##### AI model: Random Forest Classifier #####
##### Save model as "global_hiring_trends.pkl" #####
##### Predict hiring trends based on market indicators. #####
##### Returns: "High Demand" or "Low Demand" #####
##### Test case: predict_hiring_trends(3.5, 60, 75) #####
##### Expected output: "High Demand" or "Low Demand" #####
##### AI-powered global hiring trends & future job role creation. #####

# Sample dataset: [Industry Growth Rate, Remote Work %, AI Adoption Score] -> Future Hiring Demand
data = np.array([
    [4.5, 70, 80, 1],  # High demand
    [2.0, 50, 60, 1],  # Moderate demand
    [0.5, 30, 40, 0],  # Low demand
    [5.0, 85, 90, 1],  # Very high demand
])

X = data[:, :-1]  # Features: Industry Growth Rate, Remote Work %, AI Adoption Score
y = data[:, -1]   # Target: Hiring Demand (1 = High, 0 = Low)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, "global_hiring_trends.pkl")

def predict_hiring_trends(industry_growth, remote_work, ai_adoption):
    """Predicts global hiring trends based on market indicators."""
    prediction = model.predict([[industry_growth, remote_work, ai_adoption]])[0]
    return "High Demand" if prediction == 1 else "Low Demand"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_hiring_trends(3.5, 60, 75))  # Expected Output: High Demand or Low Demand
