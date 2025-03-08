import random

##### AI-driven fully autonomous workforce with self-regulating AI workers. #####

class AutonomousGlobalWorkforceAI:
    def __init__(self):
        self.workforce_tasks = [
            "AI-led software development",
            "AI-powered customer support",
            "Automated project management",
            "AI-driven data analysis",
        ]
        self.performance_metrics = {
            "efficiency": random.uniform(80, 100),
            "task_completion": random.uniform(85, 100),
            "error_rate": random.uniform(0, 5),
        }

    def assign_task(self):
        """Assigns work tasks autonomously to AI agents."""
        return random.choice(self.workforce_tasks)

    def evaluate_performance(self):
        """Evaluates AI workforce performance based on efficiency, completion rate, and error rate."""
        return self.performance_metrics

# ✅ Test Case
if __name__ == "__main__":
    ai_workforce = AutonomousGlobalWorkforceAI()
    print("Assigned Task:", ai_workforce.assign_task())
    print("Performance Metrics:", ai_workforce.evaluate_performance())
