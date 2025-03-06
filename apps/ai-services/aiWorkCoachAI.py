import random

##### AI-based real-time AI-generated work coaching & training. #####

class AIWorkCoach:
    def __init__(self):
        self.tips = [
            "Break tasks into smaller goals for better focus.",
            "Use the Pomodoro technique for productivity.",
            "Take short breaks to improve creativity.",
            "Prioritize tasks using the Eisenhower matrix.",
            "Communicate effectively with your team for collaboration."
        ]

    def provide_tip(self, skill="general"):
        """Provides real-time work coaching tips."""
        if skill == "general":
            return random.choice(self.tips)
        elif skill == "leadership":
            return "Encourage feedback and inspire your team for better results."
        elif skill == "coding":
            return "Write clean, modular code and follow best practices."
        else:
            return "Stay motivated and keep learning!"

    def assess_performance(self, productivity_score):
        """Assesses employee performance and provides AI-driven feedback."""
        if productivity_score > 80:
            return "Excellent work! Keep up the momentum."
        elif 50 <= productivity_score <= 80:
            return "You're doing well! Consider improving time management."
        else:
            return "Try to focus and eliminate distractions to enhance performance."

# ✅ Test Case
if __name__ == "__main__":
    coach = AIWorkCoach()
    print(coach.provide_tip("coding"))
    print(coach.assess_performance(75))
