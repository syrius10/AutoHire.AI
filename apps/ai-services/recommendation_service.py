from fastapi import FastAPI, Query
import pandas as pd
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

# Mock dataset (this will be fetched from the database in production)
job_listings = pd.DataFrame([
    {"id": 1, "title": "Software Engineer", "skills": "Python, Java, SQL"},
    {"id": 2, "title": "Data Scientist", "skills": "Python, Machine Learning, NLP"},
    {"id": 3, "title": "Frontend Developer", "skills": "React, Javascript, CSS"}
])

@app.get("/recommend-jobs")
def recommend_jobs(candidate_skills: str = Query(..., description = "Comma separated list of skills")):
    skills_vector = candidate_skills.split(", ")
    job_skills = job_listings["skills"].apply(lambda x: x.split(", "))

    # Convert to binary skill matrix
    job_matrix = pd.DataFrame([{skill: (skill in skills) for skill in skills_vector} for skills in job_skills])

    # Compute similarity
    similarity_scores = cosine_similarity(job_matrix.fillna(0), [np.ones(len(skills_vector))])
    job_listings["score"] = similarity_scores.flatten()

    # Return top recommended jobs
    return job_listings.sort_values(by="score", ascending=False).head(3).to_dict(orient="records")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5003)