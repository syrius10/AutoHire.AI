from sentence_transformers import SentenceTransformer, util
from flask import Flask, request, jsonify

app = Flask(__name__)
model = SentenceTransformer("all-MiniLM-L6-v2") # Lightweight, efficient NLP model

@app.route("/analyze_skills", methods=["POST"])
def analyze_skills():
    data = request.json
    resume_text = data.get("resume", "")
    job_description = data.get("job_description", "")

    # Compute embeddings
    resume_embedding = model.encode(resume_text, convert_to_tensor=True)
    job_embedding = model.encode(job_description, convert_to_tensor=True)

    similarity_score = util.pytorch_cos_sim(resume_embedding, job_embedding).item()

    return jsonify({"similarity_score": round(similarity_score * 100, 2)})  # Percentage score

if __name__ == "__main__":
    app.run(port=5013, debug=True)