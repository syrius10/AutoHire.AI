import json
from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)

# Sample data
jobs = [
    {"id": 1, "title": "Software Engineer", "skills": "Python, JavaScript, AI"},
    {"id": 2, "title": "Data Scientist", "skills": "Python, Machine Learning, NLP"}
]

@app.route("/match", methods=["POST"])
def match_candidates():
    data = request.json
    candidate_skills = data["skills"]

    job_texts = [job["skills"] for job in jobs]
    job_texts.append(candidate_skills)

    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(job_texts)

    similarities = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1])
    matched_jobs = sorted(
        [(jobs[i]["id"], similarities[0][i]) for i in range(len(jobs))],
        key=lambda x: x[1],
        reverse=True
    )

    return jsonify({"matches": matched_jobs})

if __name__ == "__main__":
    app.run(port=5001)