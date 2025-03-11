import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier

##### Predicts labor law compliance risk. #####
##### AI model predicting labor law compliance risk based on contract terms. #####
##### AI-powered labor law compliance tracking in AI-driven workplaces. #####

# Sample dataset: [Contract Type, Employee Rights Score, Risk Factors] → Compliance Level
data = np.array([
    [1, 90, 1, 1],  # Compliant
    [2, 60, 2, 0],  # Medium risk
    [3, 40, 3, 0],  # High risk
    [1, 85, 1, 1],  # Compliant
])

X = data[:, :-1]  # Features: Contract Type, Rights Score, Risk Factors
y = data[:, -1]   # Compliance Level (1 = Compliant, 0 = Risk Detected)

model = GradientBoostingClassifier(learning_rate=0.1, random_state=42)
model.fit(X, y)

# Save model
joblib.dump(model, "labor_law_compliance.pkl")

def check_compliance(contract_type, rights_score, risk_factors):
    """Predicts labor law compliance risk."""
    prediction = model.predict([[contract_type, rights_score, risk_factors]])[0]
    return "Compliant" if prediction == 1 else "Risk Detected"

if __name__ == "__main__":
    print(check_compliance(1, 85, 1))  # Expected Output: Compliant
