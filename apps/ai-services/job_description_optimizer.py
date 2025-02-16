import openai
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/optimize_job_description", methods=["POST"])
def optimize_job_description():
    data = request.json
    job_description = data.get("job_description", "")

    prompt = f"Optimize the following job description for search engine visibility and candidate engagement: {job_description}"

    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [{"role": "user", "content": prompt}]
    )

    return jsonify({"optimized_description": response["choices"][0]["content"]})

if __name__ == "__main__":
    app.run(port=5011, debug=True)