from flask import Flask, request, jsonify
from transformers import pipeline

##### AI-powered mental health chatbot for workforce support #####

app = Flask(__name__)

# Load AI Chatbot Model
chatbot = pipeline("text-generation", model="microsoft/DialoGPT-medium")

@app.route("/mental_health_chatbot", methods=["POST"])
def mental_health_chat():
    data = request.json
    user_input = data.get("message", "")

    # Generate AI response
    response = chatbot(user_input, max_length=100, num_return_sequences=1)[0]["generated_text"]

    return jsonify({"response": response.strip()})

if __name__ == "__main__":
    app.run(port=5074, debug=True)
