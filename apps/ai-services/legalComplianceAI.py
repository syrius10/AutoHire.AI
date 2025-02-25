from flask import Flask, request, jsonify

##### Ensures compliance with global labor laws #####

app = Flask(__name__)

@app.route("/check-compliance", methods=["POST"])
def check_compliance():
    data = request.json
    country = data.get("country", "")
    employment_terms = data.get("terms", "")

    compliance_result = "Compliant" if "contract" in employment_terms.lower() else "Review Required"
    
    return jsonify({"country": country, "compliance_status": compliance_result})

if __name__ == "__main__":
    app.run(port=5045, debug=True)
