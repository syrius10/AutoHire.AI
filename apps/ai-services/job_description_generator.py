import openai 
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/generate_job_description", methods=["POST"])
def generate_job_description():
    data = request.json
    job_role = data.get("job_role", "Software Engineer")
    company_name = data.get("company_name", "TechCorp")

    prompt = f"Generate a compelling job description for a {job_role} at {company_name}."

    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [{"role": "user", "content": prompt}]
    )

    return jsonify({"job_description": response["choices"][0]["message"]["content"]})

if __name__ == "__main__":
    app.run(port=5010, debug=True)