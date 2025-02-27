import openai
import os

##### AI-generated personalized cover letters #####

# Load API key for OpenAI GPT-based text generation
openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_cover_letter(candidate_name, job_title, company_name, skills):
    prompt = (
        f"Write a compelling cover letter for {candidate_name} applying for a {job_title} role at {company_name}. "
        f"Highlight key skills: {', '.join(skills)}."
    )

    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=300
    )

    return response["choices"][0]["text"].strip()

if __name__ == "__main__":
    candidate_name = "Alice Johnson"
    job_title = "Senior Data Scientist"
    company_name = "Tesla"
    skills = ["Python", "Machine Learning", "Deep Learning", "Data Visualization"]

    cover_letter = generate_cover_letter(candidate_name, job_title, company_name, skills)
    print(cover_letter)
