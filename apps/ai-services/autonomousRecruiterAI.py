import joblib
import numpy as np
from transformers import pipeline

##### AI-driven recruiter that screens, shortlists, and evaluates candidates. #####

# Load AI model for resume screening
resume_screener = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# Sample trained ML model for ranking candidates
try:
    ranking_model = joblib.load("autonomous_recruiter_model.pkl")
except FileNotFoundError:
    ranking_model = None  # Placeholder in case no model exists

def screen_candidate(resume_text, job_role):
    """AI-driven candidate screening & shortlisting"""
    labels = ["Highly Suitable", "Moderately Suitable", "Not Suitable"]
    result = resume_screener(resume_text, labels)
    return result["labels"][0]  # Best match

def rank_candidate(candidate_features):
    """AI-driven candidate ranking based on features"""
    if ranking_model:
        score = ranking_model.predict([candidate_features])[0]
        return score
    return np.random.randint(1, 10)  # Placeholder ranking

if __name__ == "__main__":
    sample_resume = "Experienced software engineer skilled in Python, AI, and cloud computing."
    print(screen_candidate(sample_resume, "Machine Learning Engineer"))
