from flask import Flask, request, jsonify

app = Flask(__name__)

responses = {
    "hiring trends": "Based on recent data, hiring demand is increasing in the tech sector.",
    "diversity_hiring": "Diversity hiring should aim for balanced gender and ethnic representation.",
    "employee_retention": "Employee satisfaction and engagement are key factors for retention.",
}

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    question = data.get("question", "").lower()

    response = responses.get(question, "I'm not sure, but I can analyze workforce trends for you.")

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(post=5023, debug=True)