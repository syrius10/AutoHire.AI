import random

##### AI-driven work assistants for virtual workforce productivity. #####

class AIWorkAssistant:
    def __init__(self):
        self.task_types = ["Scheduling", "Documentation", "Project Tracking", "Task Automation"]

    def assign_task(self, employee_role):
        """Assigns AI-driven work assistant tasks based on employee role."""
        if employee_role == "manager":
            return "Scheduling & Project Tracking"
        elif employee_role == "developer":
            return "Documentation & Task Automation"
        else:
            return random.choice(self.task_types)

# Test Case
if __name__ == "__main__":
    ai = AIWorkAssistant()
    print(ai.assign_task("developer"))  # Example: "Documentation & Task Automation"
