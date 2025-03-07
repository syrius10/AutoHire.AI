import random

class AIWorkAssistant:
    def __init__(self):
        self.task_types = ["Scheduling", "Documentation", "Project Tracking", "Task Automation"]
        self.task_suggestions = [
            "Prioritize high-impact tasks first.",
            "Take a short break to maintain productivity.",
            "Review your daily goals and adjust accordingly.",
            "Automate repetitive tasks to save time."
        ]
        self.meeting_reminders = [
            "Your team meeting starts in 30 minutes.",
            "Prepare the agenda for your upcoming call.",
            "Review notes from the last meeting before joining."
        ]

    def assign_task(self, employee_role):
        """Assigns AI-driven work assistant tasks based on employee role."""
        if employee_role == "manager":
            return "Scheduling & Project Tracking"
        elif employee_role == "developer":
            return "Documentation & Task Automation"
        else:
            return random.choice(self.task_types)

    def get_task_suggestion(self):
        """Returns a random work optimization suggestion."""
        return random.choice(self.task_suggestions)

    def get_meeting_reminder(self):
        """Returns a random meeting reminder."""
        return random.choice(self.meeting_reminders)

# ✅ Test Case
if __name__ == "__main__":
    assistant = AIWorkAssistant()
    
    print("Task Assigned (Developer):", assistant.assign_task("developer"))
    print("Task Suggestion:", assistant.get_task_suggestion())
    print("Meeting Reminder:", assistant.get_meeting_reminder())

