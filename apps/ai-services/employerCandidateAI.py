from flask import Flask, request, jsonify
from transformers import pipeline

##### AI-powered automated employer-candidate interaction system. #####

app = Flask(__name__)

# Load AI Chatbot Model
chatbot = pipeline("text-generation", model="microsoft/DialoGPT-medium")

@app.route("/chat", methods=["POST"])
def chat_with_ai():
    """Generates AI-driven employer-candidate conversation."""
    data = request.json
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    response = chatbot(f"Candidate: {user_message}")[0]["generated_text"]
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(port=5062, debug=True)
