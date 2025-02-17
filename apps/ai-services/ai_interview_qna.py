import openai
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/interview_qna", methods=["POST"])
def interview_qna():
    data = request.json
    question = data.get("question", "")

    prompt = f"Act as a hiring manager and provide a detailed response to this interview question: {question}"

    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [{"role": "user", "content": prompt}]
    )

    return jsonify({"answer": response["choices"][0]["message"]["content"]})

if __name__ == "__main__":
    app.run(port=5016, debug=True)