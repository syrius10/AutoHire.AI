import random

##### AI model suggesting metaverse workspaces based on team size & work nature. #####
##### AI-driven metaverse workspace suggestions. #####
##### Virtual Office, 3D Collaboration Hub, Remote Co-Working Space #####
##### AI-powered virtual work environments for remote & hybrid teams. #####

class MetaverseWorkspaceAI:
    def __init__(self):
        self.workspaces = ["Virtual Office", "3D Collaboration Hub", "Remote Co-Working Space"]

    def suggest_workspace(self, team_size, work_nature):
        """Suggests an AI-driven metaverse workspace based on team size & work nature."""
        if team_size > 10:
            return "3D Collaboration Hub"
        elif work_nature == "creative":
            return "Virtual Office"
        else:
            return random.choice(self.workspaces)

# Test Case
if __name__ == "__main__":
    ai = MetaverseWorkspaceAI()
    print(ai.suggest_workspace(5, "technical"))  # Example: "Remote Co-Working Space"
