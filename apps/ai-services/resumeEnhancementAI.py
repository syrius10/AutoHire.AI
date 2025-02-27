import joblib
import re
from textblob import TextBlob
from transformers import pipeline

##### AI-driven resume enhancement & professional branding #####

# Load AI-powered summarization and keyword extraction models
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")
ner = pipeline("ner", model="dslim/bert-base-NER")

# Function to enhance resume text
def enhance_resume(resume_text):
    # Clean and summarize resume content
    summary = summarizer(resume_text, max_length=150, min_length=50, do_sample=False)[0]["summary_text"]
    
    # Extract key skills using NLP
    entities = ner(resume_text)
    skills = list(set([entity["word"] for entity in entities if entity["entity"].startswith("B-")]))
    
    # Check for grammatical improvements
    analysis = TextBlob(resume_text)
    corrected_text = str(analysis.correct())

    return {
        "enhanced_resume": corrected_text,
        "summary": summary,
        "key_skills": skills
    }

if __name__ == "__main__":
    sample_resume = "Experienced software engineer skilled in Python, AI, and cloud computing. Worked at Google for 5 years."
    result = enhance_resume(sample_resume)
    print(result)
