import random

##### AI-powered autonomous job hiring system. #####

class AIAutomatedHiring:
    def __init__(self):
        self.hiring_criteria = ["Skill Match", "Experience Level", "Culture Fit", "AI Evaluation Score"]

    def evaluate_candidate(self, skills, experience, cultural_fit):
        """Evaluates candidates based on AI-driven hiring criteria."""
        ai_score = (skills * 0.5) + (experience * 0.3) + (cultural_fit * 0.2) + random.uniform(0, 10)
        return {"Candidate Evaluation Score": round(ai_score, 2), "Decision": "Hired" if ai_score > 7 else "Needs Review"}

# ✅ Test Case
if __name__ == "__main__":
    hiring_ai = AIAutomatedHiring()
    result = hiring_ai.evaluate_candidate(skills=8, experience=5, cultural_fit=7)
    print(result)  # Expected Output: AI Evaluation Score and Hiring Decision
