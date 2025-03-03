from flask import Flask, request, jsonify
import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-powered Legal Compliance Monitoring #####
app = Flask(__name__)

# Sample dataset: [Contract Length (months), Industry Compliance Score, Past Legal Disputes]
data = np.array([
    [12, 90, 0, 1],  # Low risk
    [6, 70, 1, 0],   # Medium risk
    [24, 50, 2, 0],  # High risk
    [3, 95, 0, 1],   # Low risk
])

X = data[:, :-1]  # Contract Length, Compliance Score, Past Disputes
y = data[:, -1]   # Compliance Risk (1 = Low, 0 = High)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "legal_compliance.pkl")

def assess_legal_compliance(contract_length, compliance_score, past_disputes):
    """Predicts legal risk for contracts."""
    prediction = model.predict([[contract_length, compliance_score, past_disputes]])[0]
    return "Low Risk" if prediction == 1 else "High Risk"

@app.route("/check-compliance", methods=["POST"])
def check_compliance():
    """API endpoint to check labor law compliance & risk assessment."""
    data = request.json
    country = data.get("country", "")
    employment_terms = data.get("terms", "")

    # Rule-based compliance check
    compliance_result = "Compliant" if "contract" in employment_terms.lower() else "Review Required"

    # AI-driven risk assessment (if additional details provided)
    contract_length = data.get("contract_length", 12)
    compliance_score = data.get("compliance_score", 80)
    past_disputes = data.get("past_disputes", 0)
    risk_assessment = assess_legal_compliance(contract_length, compliance_score, past_disputes)

    return jsonify({
        "country": country,
        "compliance_status": compliance_result,
        "risk_assessment": risk_assessment
    })

if __name__ == "__main__":
    app.run(port=5045, debug=True)
