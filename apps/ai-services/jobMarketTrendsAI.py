import requests
import pandas as pd
from flask import Flask, request, jsonify

##### AI-powered real-time job market analytics #####

app = Flask(__name__)

# Function to fetch job postings from external sources
def fetch_job_data():
    url = "https://api.external-job-platform.com/jobs"
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    return []

# Analyze trends in job postings
def analyze_job_market():
    job_data = fetch_job_data()
    df = pd.DataFrame(job_data)

    if df.empty:
        return {"message": "No job market data available"}

    top_industries = df['industry'].value_counts().head(5).to_dict()
    top_companies = df['company'].value_counts().head(5).to_dict()
    most_in_demand_skills = df['skills'].explode().value_counts().head(10).to_dict()

    return {
        "topIndustries": top_industries,
        "topCompanies": top_companies,
        "mostInDemandSkills": most_in_demand_skills
    }

@app.route("/job-market-trends", methods=["GET"])
def job_market_trends():
    return jsonify(analyze_job_market())

if __name__ == "__main__":
    app.run(port=5059, debug=True)
