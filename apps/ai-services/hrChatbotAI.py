from flask import Flask, request, jsonify
from transformers import pipeline

##### AI-based real-time HR assistance chatbot #####

app = Flask(__name__)

# Load AI-based HR chatbot model
qa_pipeline = pipeline("question-answering", model="deepset/roberta-base-squad2")

# Sample HR FAQ database
HR_FAQ = {
    "leave_policy": "Employees are entitled to 20 vacation days per year.",
    "benefits": "We offer health insurance, wellness programs, and 401k matching.",
    "work_hours": "Standard work hours are from 9 AM to 5 PM, Monday to Friday."
}

@app.route("/chat", methods=["POST"])
def chat():
    """Handles employee HR-related inquiries using AI chatbot."""
    data = request.json
    question = data.get("question", "")

    if not question:
        return jsonify({"error": "No question provided"}), 400

    # Search FAQ first
    for key, value in HR_FAQ.items():
        if key in question.lower():
            return jsonify({"response": value})

    # If not in FAQ, use AI-powered chatbot
    answer = qa_pipeline(question=question, context=" ".join(HR_FAQ.values()))
    return jsonify({"response": answer["answer"]})

if __name__ == "__main__":
    app.run(port=5072, debug=True)
