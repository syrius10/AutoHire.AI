import pdfplumber
from transformers import pipeline

# Load Hugging Face NER pipeline
ner_pipeline = pipeline("token-classification", model="dslim/bert-base-NER")

def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        return " ".join([page.extract_text() for page in pdf.pages if page.extract_text()])
    
def extract_named_entities(text):
    entities = ner_pipeline(text)
    skills = [entity["word"] for entity in entities if entity["entity"] in ["B-ORG", "I-ORG", "B-MISC", "I-MISC"]]
    return list(set(skills))

def process_resume(pdf_path):
    text = extract_text_from_pdf(pdf_path)
    extracted_skills = extract_named_entities(text)
    return {"extracted_skills": extracted_skills}

if __name__ == "__main__":
    result = process_resume("sample_resume.pdf")
    print(result)