import random

##### AI-based AI-only hiring, management & operations. #####

class AIOnlyManagement:
    def __init__(self):
        self.hiring_decisions = ["Hire based on skill match", "Reject due to lack of experience", "Proceed with interview"]

    def evaluate_candidate(self, skill_match_percentage):
        """AI determines hiring decision based on skill match."""
        if skill_match_percentage > 85:
            return "Hire based on skill match"
        elif skill_match_percentage > 60:
            return "Proceed with interview"
        else:
            return "Reject due to lack of experience"

# ✅ Test Case
if __name__ == "__main__":
    ai = AIOnlyManagement()
    print("Hiring Decision:", ai.evaluate_candidate(skill_match_percentage=78))
