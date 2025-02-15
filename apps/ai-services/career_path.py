import openai

def recommend_career_path(skills):
    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [{"role": "system", "content": "Suggest best career paths based on these skills."},
                    {"role": "user", "content": f"Skills: {skills}"}]
    )
    return response["choices"][0]["message"]["content"]

if __name__ == "__main__":
    print(recommend_career_path(["Python", "Machine Learning", "Leadership"]))