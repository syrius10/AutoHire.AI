import openai
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

# Mock dataset (Replace with real salary data)
salary_data = pd.DataFrame({
    "years_experience": [1, 3, 5, 7, 10],
    "salary": [50000, 65000, 80000, 95000, 120000]
})

# Train model
X = salary_data[["years_experience"]]
y = salary_data["salary"]
model = LinearRegression().fit(X, y)

def predict_salary(years_experience, job_role):
    base_salary = model.predict([[years_experience]])[0]

    # AI enhancement
    response = openai.ChatCompletion.create(
        model = "gpt-4",
        messages = [{"role": "system", "content": f"Predict salary for {job_role} with {years_experience} years of incovenience."}]
    )
    ai_adjustment = float(response["choices"][0]["message"]["content"].split()[-1])

    return round(base_salary + ai_adjustment, 2)

if __name__ == "__main__":
    print(predict_salary(5, "Software Engineer"))