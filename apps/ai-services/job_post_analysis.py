import openai
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze_job_post", methods=["POST"])
def analyze_job_post():
    data = request.json
    job_post = data.get("job_post", "")

    prompt = f"Analyze this job post for engagement, clarity, and effectiveness: {job_post}"

    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [{"role": "user", "content": prompt}]
    )

    return jsonify({"analysis": response["choices"][0]["message"]["content"]})

if __name__ == "__main__":
    app.run(port=5012, debug=True)