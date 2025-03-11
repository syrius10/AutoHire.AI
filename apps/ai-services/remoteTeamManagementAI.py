import random

##### AI-driven remote team management & live task tracking. #####

class RemoteTeamManagementAI:
    def __init__(self):
        self.teams = {}

    def create_team(self, team_name, manager):
        """Creates a remote team for task tracking."""
        if team_name in self.teams:
            return {"status": "error", "message": "Team already exists"}
        
        self.teams[team_name] = {
            "manager": manager,
            "tasks": [],
            "members": []
        }
        return {"status": "success", "message": f"Team '{team_name}' created by {manager}"}

    def assign_task(self, team_name, task, priority="medium"):
        """Assigns tasks to a remote team."""
        if team_name not in self.teams:
            return {"status": "error", "message": "Team does not exist"}
        
        task_entry = {"task": task, "priority": priority, "status": "pending"}
        self.teams[team_name]["tasks"].append(task_entry)
        return {"status": "success", "message": f"Task '{task}' added to team '{team_name}'"}

    def track_progress(self, team_name):
        """Returns the task progress of a remote team."""
        if team_name not in self.teams:
            return {"status": "error", "message": "Team does not exist"}
        
        return {
            "team": team_name,
            "tasks": self.teams[team_name]["tasks"]
        }

# ✅ Test Case
if __name__ == "__main__":
    TEAM_NAME = "Remote Devs"
    team_ai = RemoteTeamManagementAI()
    print(team_ai.create_team(TEAM_NAME, "Bob"))
    print(team_ai.assign_task(TEAM_NAME, "Complete UI Design", "high"))
    print(team_ai.track_progress(TEAM_NAME))
