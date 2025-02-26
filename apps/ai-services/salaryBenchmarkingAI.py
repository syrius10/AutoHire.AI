import pandas as pd
import joblib
from flask import Flask, request, jsonify
from sklearn.linear_model import LinearRegression

##### AI-driven salary benchmarking & compensation insights #####

app = Flask(__name__)

# Sample salary dataset [Job Role, Experience (years), Industry, Location, Salary ($)]
data = pd.DataFrame([
    ["Software Engineer", 3, "Tech", "San Francisco", 120000],
    ["Data Scientist", 5, "Tech", "New York", 140000],
    ["Product Manager", 7, "Finance", "London", 130000],
    ["Marketing Manager", 4, "Retail", "Chicago", 90000],
    ["HR Specialist", 6, "Healthcare", "Los Angeles", 85000]
], columns=["role", "experience", "industry", "location", "salary"])

# Encode categorical variables
data_encoded = pd.get_dummies(data, columns=["role", "industry", "location"])
X = data_encoded.drop(columns=["salary"])
y = data_encoded["salary"]

# Train salary prediction model
model = LinearRegression()
model.fit(X, y)
joblib.dump(model, "salary_benchmarking_model.pkl")

@app.route("/salary-benchmark", methods=["POST"])
def salary_benchmark():
    request_data = request.json
    experience = request_data.get("experience")
    role = request_data.get("role")
    industry = request_data.get("industry")
    location = request_data.get("location")

    input_data = pd.DataFrame([[experience, role, industry, location]], columns=["experience", "role", "industry", "location"])
    input_encoded = pd.get_dummies(input_data)

    model = joblib.load("salary_benchmarking_model.pkl")
    predicted_salary = model.predict(input_encoded)[0]

    return jsonify({"predictedSalary": round(predicted_salary, 2)})

if __name__ == "__main__":
    app.run(port=5060, debug=True)
