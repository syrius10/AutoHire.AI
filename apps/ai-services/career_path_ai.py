import openai
import pandas as pd
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/career_prediction", methods=["POST"])
def career_prediction():
    data = request.json
    job_title = data.get("job_title", "")
    experience = data.get("experience", 0)

    prompt = f"Predict the career path for a {job_title} with {experience} years of experience. Provide 3 possible career progressions."

    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [{"role": "user", "content": prompt}]
    )

    return jsonify({"career_paths": response["choices"][0]["message"]["content"]})

if __name__ == "__main__":
    app.run(port=5015, debug=True)