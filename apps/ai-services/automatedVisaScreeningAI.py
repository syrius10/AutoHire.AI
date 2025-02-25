from flask import Flask, request, jsonify

##### AI-driven visa & work permit eligibility screening #####

app = Flask(__name__)

@app.route("/visa-screening", methods=["POST"])
def visa_screening():
    data = request.json
    country = data.get("country", "")
    work_permit = data.get("work_permit", False)

    if work_permit:
        eligibility = "Eligible"
    else:
        eligibility = "Requires Sponsorship"

    return jsonify({"country": country, "visa_eligibility": eligibility})

if __name__ == "__main__":
    app.run(port=5046, debug=True)
