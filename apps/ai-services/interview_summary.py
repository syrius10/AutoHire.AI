import openai
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/generate_summary", methods=["POST"])
def generate_summary():
    data = request.json
    transcript = data.get("transcript", "")

    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [{"role": "system", "content": "Summarize this interview response."},
                    {"role": "user", "content": transcript}]
    )

    return jsonify({"summary": response["choices"][0]["message"]["content"]})

if __name__ == "__main__":
    app.run(port=5009, debug=True)