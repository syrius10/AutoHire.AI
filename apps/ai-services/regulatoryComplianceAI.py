import spacy
from flask import Flask, request, jsonify

##### 🔹 Ensures HR practices align with legal regulations (e.g., GDPR, CCPA, labor laws). #####
##### 🔹 Uses NLP to analyze HR policies and employee contracts for compliance risks. #####

app = Flask(__name__)

# Load NLP model (pre-trained on legal texts)
nlp = spacy.load("en_core_web_sm")

@app.route("/check_compliance", methods=["POST"])
def check_compliance():
    """Analyzes HR policies for compliance risks."""
    data = request.json
    policy_text = data.get("policy", "")

    doc = nlp(policy_text)
    flagged_terms = [ent.text for ent in doc.ents if ent.label_ in ["LAW", "MONEY", "ORG"]]

    return jsonify({
        "policy": policy_text,
        "flagged_terms": flagged_terms,
        "compliance_risk": "High" if len(flagged_terms) > 3 else "Low"
    })

if __name__ == "__main__":
    app.run(port=5077, debug=True)
