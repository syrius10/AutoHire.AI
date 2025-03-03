import json
import random

##### This AI model ensures decentralized decision-making through AI-assisted voting where token holders can vote on company policies, projects, and budgets. #####

class SmartVotingAI:
    """AI-powered smart voting system for decentralized governance."""
    
    def __init__(self):
        self.proposals = {}
        self.votes = {}

    def create_proposal(self, proposal_name, description):
        """Creates a new governance proposal for voting."""
        proposal_id = f"VOTE-{random.randint(1000, 9999)}"
        self.proposals[proposal_id] = {
            "name": proposal_name,
            "description": description,
            "votes": {"yes": 0, "no": 0},
        }
        return {"proposal_id": proposal_id, "details": self.proposals[proposal_id]}

    def cast_vote(self, proposal_id, vote, tokens_staked):
        """Casts a vote on a proposal, weighted by staked tokens."""
        if proposal_id not in self.proposals:
            return {"error": "Proposal not found"}

        if vote not in ["yes", "no"]:
            return {"error": "Invalid vote option"}

        self.proposals[proposal_id]["votes"][vote] += tokens_staked
        return {"message": f"Vote recorded: {vote} with {tokens_staked} tokens"}

    def get_proposal_results(self, proposal_id):
        """Returns the voting results for a proposal."""
        if proposal_id not in self.proposals:
            return {"error": "Proposal not found"}

        return {"proposal_id": proposal_id, "votes": self.proposals[proposal_id]["votes"]}

# Example usage
if __name__ == "__main__":
    voting_ai = SmartVotingAI()
    new_proposal = voting_ai.create_proposal("Increase Worker Token Rewards", "Proposal to increase token payouts by 10%")
    print(json.dumps(new_proposal, indent=2))

    voting_ai.cast_vote(new_proposal["proposal_id"], "yes", 500)
    print(voting_ai.get_proposal_results(new_proposal["proposal_id"]))
