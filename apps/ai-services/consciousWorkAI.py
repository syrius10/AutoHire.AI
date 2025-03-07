import random

##### AI model simulating conscious decision-making in the workplace. #####
##### AI-driven workplace AI with human-like cognitive decision-making. #####

class ConsciousWorkAI:
    def __init__(self):
        self.decision_factors = ["Logic", "Empathy", "Ethics", "Experience"]

    def make_decision(self, scenario):
        """Simulates human-like cognitive decision-making in the workplace."""
        decision_weights = {
            "Logic": random.uniform(0.6, 1.0),
            "Empathy": random.uniform(0.3, 1.0),
            "Ethics": random.uniform(0.5, 1.0),
            "Experience": random.uniform(0.4, 1.0)
        }

        best_factor = max(decision_weights, key=decision_weights.get)
        return {
            "scenario": scenario,
            "decision_factor": best_factor,
            "confidence": round(decision_weights[best_factor], 2)
        }

# ✅ Test Case
if __name__ == "__main__":
    ai = ConsciousWorkAI()
    print(ai.make_decision("Employee conflict resolution"))
