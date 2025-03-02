import joblib
from transformers import pipeline
from flask import Flask, request, jsonify

##### Fully autonomous AI HR assistant for talent acquisition & HR support. #####

app = Flask(__name__)

# Load AI-based NLP model for HR chatbot
hr_chatbot = pipeline("conversational", model="facebook/blenderbot-400M-distill")

@app.route("/hr-assistant", methods=["POST"])
def hr_assistant():
    data = request.json
    query = data.get("query", "")

    if not query:
        return jsonify({"response": "Please provide an HR-related query."})

    response = hr_chatbot(query)
    return jsonify({"response": response[0]['generated_text']})

if __name__ == "__main__":
    app.run(port=5091, debug=True)
