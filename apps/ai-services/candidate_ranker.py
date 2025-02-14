import openai

def rank_candidates(candidates, job_description):
    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [
            {"role": "system", "content": "Rank candidates based on job suitability."},
            {"role": "user", "content": f"Candidates: {candidates}\nJob Description: {job_description}"}
        ]
    )
    return response["choices"][0]["message"]["content"]

if __name__ == "__main__":
    ranking = rank_candidates([{"name": "John", "skills": ["Python", "AI"]}], "AI Engineer")
    print(ranking)