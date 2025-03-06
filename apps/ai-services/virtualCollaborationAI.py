import random

##### AI-powered virtual co-working spaces & collaboration environments. #####

class VirtualCollaborationAI:
    def __init__(self):
        self.rooms = {}

    def create_workspace(self, team_name):
        """Creates a virtual workspace for collaboration."""
        if team_name in self.rooms:
            return {"status": "error", "message": "Workspace already exists"}
        
        self.rooms[team_name] = {
            "participants": [],
            "resources": [],
            "chat_history": []
        }
        return {"status": "success", "message": f"Workspace '{team_name}' created"}

    def join_workspace(self, team_name, user):
        """Allows users to join a virtual workspace."""
        if team_name not in self.rooms:
            return {"status": "error", "message": "Workspace does not exist"}
        
        self.rooms[team_name]["participants"].append(user)
        return {"status": "success", "message": f"{user} joined '{team_name}'"}

    def share_resource(self, team_name, resource):
        """Enables users to share resources in the virtual workspace."""
        if team_name not in self.rooms:
            return {"status": "error", "message": "Workspace does not exist"}
        
        self.rooms[team_name]["resources"].append(resource)
        return {"status": "success", "message": f"Resource shared in '{team_name}'"}

# ✅ Test Case
if __name__ == "__main__":
    vc_ai = VirtualCollaborationAI()
    print(vc_ai.create_workspace("AI Devs"))
    print(vc_ai.join_workspace("AI Devs", "Alice"))
    print(vc_ai.share_resource("AI Devs", "Project Roadmap"))
