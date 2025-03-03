import random

##### This AI model calculates token-based compensation for freelancers and employees based on work performance, project completion, and AI-based skill ranking. #####

class TokenizedWorkAI:
    """AI-driven tokenized work incentives & dynamic compensation models."""

    def __init__(self):
        self.token_exchange_rate = 0.01  # 1 token = $0.01
        self.user_balances = {}

    def calculate_compensation(self, work_hours, project_complexity, skill_level):
        """Calculates token-based compensation based on AI analysis."""
        base_rate = work_hours * 50  # Base pay
        complexity_bonus = project_complexity * 100
        skill_bonus = skill_level * 75
        total_tokens = (base_rate + complexity_bonus + skill_bonus) * self.token_exchange_rate
        return round(total_tokens, 2)

    def assign_tokens(self, user_id, work_hours, project_complexity, skill_level):
        """Assigns tokens to a worker based on AI-driven performance assessment."""
        tokens = self.calculate_compensation(work_hours, project_complexity, skill_level)
        self.user_balances[user_id] = self.user_balances.get(user_id, 0) + tokens
        return {"user_id": user_id, "earned_tokens": tokens, "total_balance": self.user_balances[user_id]}

    def get_user_balance(self, user_id):
        """Returns the current token balance of a worker."""
        return {"user_id": user_id, "token_balance": self.user_balances.get(user_id, 0)}

# Example usage
if __name__ == "__main__":
    token_ai = TokenizedWorkAI()
    user_payment = token_ai.assign_tokens("worker123", 40, 3, 5)
    print(user_payment)
