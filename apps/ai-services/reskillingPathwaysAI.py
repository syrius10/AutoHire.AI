from flask import Flask, request, jsonify

app = Flask(__name__)

training_programs = {
    "AI Engineer": ["Deep Learning", "ML Ops", "NLP Fundamentals"],
    "Cybersecurity Analyst": ["Ethical Hacking", "Network Security", "Threat Intelligence"],
    "Software Engineer": ["Advanced Java", "Microservices", "Cloud Development"]
}

@app.route("/recommend_training", methods=["POST"])
def recommend_training():
    data = request.json
    job_role = data.get("job_role", "Software Engineer")

    recommended_courses = training_programs.get(job_role, ["General Skills Development"])

    return jsonify({"job_role": job_role, "recommended_courses": recommended_courses})

if __name__ == "__main__":
    app.run(port=5030, debug=True)