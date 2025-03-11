import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### AI model monitoring compliance with legal regulations. #####
##### AI-based real-time compliance tracking for AI-driven decisions. #####

# Sample dataset: [Hiring Decision (1=Hired, 0=Rejected), Compliance Score, Past Violations] -> Compliance Status
data = np.array([
    [1, 90, 0, 1],  # Compliant
    [0, 40, 1, 0],  # Non-Compliant
    [1, 80, 0, 1],  # Compliant
    [0, 60, 1, 0],  # Non-Compliant
])

X = data[:, :-1]  # Hiring Decision, Compliance Score, Past Violations
y = data[:, -1]   # Compliance Status (1 = Compliant, 0 = Non-Compliant)

# Train AI model
model = GradientBoostingClassifier(random_state=42, learning_rate=0.1)
model.fit(X, y)

# Save trained model
joblib.dump(model, "compliance_monitor_model.pkl")

def check_compliance(hiring_decision, compliance_score, past_violations):
    """Checks if a hiring or workforce decision complies with legal regulations."""
    prediction = model.predict([[hiring_decision, compliance_score, past_violations]])[0]
    return "Compliant Decision" if prediction == 1 else "Non-Compliant Action Detected"

# ✅ Test Case
if __name__ == "__main__":
    print(check_compliance(1, 85, 0))  # Expected: Compliant Decision
