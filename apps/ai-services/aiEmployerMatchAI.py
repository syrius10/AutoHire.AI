import random

##### AI-based automated employer-employee matching system. #####

class AIEmployerMatch:
    def __init__(self):
        self.match_factors = ["Skills", "Company Culture", "Salary Expectation", "Work Flexibility"]

    def match_candidate(self, candidate_skills, company_requirements, salary_expectation, work_flexibility):
        """Matches candidates with employers using AI-based criteria."""
        match_score = (candidate_skills * 0.4) + (company_requirements * 0.3) + (salary_expectation * 0.2) + (work_flexibility * 0.1) + random.uniform(0, 5)
        return {"Employer Match Score": round(match_score, 2), "Match Status": "Strong Match" if match_score > 8 else "Potential Match"}

# ✅ Test Case
if __name__ == "__main__":
    match_ai = AIEmployerMatch()
    result = match_ai.match_candidate(candidate_skills=9, company_requirements=8, salary_expectation=7, work_flexibility=6)
    print(result)  # Expected Output: Employer Match Score and Match Status
