import random

##### AI-powered self-aware workforce automation agents. #####

class SelfAwareAutomationAI:
    def __init__(self):
        self.status_levels = ["Optimal", "Stable", "Underperforming", "Critical"]

    def analyze_performance(self, system_load, error_rate, task_completion):
        """Simulates self-awareness in workforce automation AI."""
        awareness_score = (task_completion * 0.5) - (system_load * 0.3) - (error_rate * 0.2)

        if awareness_score > 0.7:
            status = "Optimal"
        elif 0.4 < awareness_score <= 0.7:
            status = "Stable"
        elif 0.2 < awareness_score <= 0.4:
            status = "Underperforming"
        else:
            status = "Critical"

        return {
            "system_load": system_load,
            "error_rate": error_rate,
            "task_completion": task_completion,
            "awareness_score": round(awareness_score, 2),
            "status": status
        }

# ✅ Test Case
if __name__ == "__main__":
    ai = SelfAwareAutomationAI()
    print(ai.analyze_performance(system_load=0.5, error_rate=0.1, task_completion=0.8))
