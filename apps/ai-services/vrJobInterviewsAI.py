import random

##### AI model assessing VR job interview candidates. #####
##### AI-driven VR-based job interviews & candidate assessments. #####

class VRJobInterviewAI:
    def __init__(self):
        self.assessment_criteria = ["Communication", "Technical Skills", "Body Language", "Cultural Fit"]

    def assess_candidate(self, responses, gestures):
        """Analyzes VR interview responses & gestures to determine candidate suitability."""
        score = sum(responses) / len(self.assessment_criteria) + (1 if gestures == "confident" else -1)
        return "Strong Candidate" if score > 3 else "Needs Improvement"

# Test Case
if __name__ == "__main__":
    ai = VRJobInterviewAI()
    print(ai.assess_candidate([4, 5, 3, 4], "confident"))  # Example: "Strong Candidate"
