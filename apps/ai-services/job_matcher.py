import openai

def calculate_match_score(candidate_skills, job_description):
    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [
            {"role": "system", "content": "Evaluate candidate's skills for this job."},
            {"role": "user", "content": f"Candidate Skills: {candidate_skills}\nJob Description: {job_description}"}
        ]
    )
    return response["choices"][0]["message"]["content"]

if __name__ == "__main__":
    score = calculate_match_score(["Python", "Machine Learning"], "Software Engineer with Python & AI skills.")
    print(score)