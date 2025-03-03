import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI model predicting regulatory risk level. #####
##### Predicts regulatory risk level based on region, industry compliance score, and past violations. #####
##### AI-driven regulatory risk assessment for compliance and governance. #####
##### AI-based regulatory risk forecasting & compliance enforcement.#####

# Sample dataset: [Region, Industry Compliance Score, Past Violations] → Regulatory Risk Level
data = np.array([
    [1, 95, 0, 1],  # Low risk
    [2, 70, 1, 0],  # Medium risk
    [3, 50, 2, 0],  # High risk
    [1, 90, 0, 1],  # Low risk
])

X = data[:, :-1]  # Features: Region, Industry Compliance Score, Past Violations
y = data[:, -1]   # Risk Level (1 = Low Risk, 0 = High Risk)

model = RandomForestClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, "regulatory_risk.pkl")

def assess_risk(region, compliance_score, past_violations):
    """Predicts regulatory risk level."""
    prediction = model.predict([[region, compliance_score, past_violations]])[0]
    return "Low Risk" if prediction == 1 else "High Risk"

if __name__ == "__main__":
    print(assess_risk(1, 90, 0))  # Expected Output: Low Risk
