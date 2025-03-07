import random

##### AI model recommending the best learning path based on skill level & demand. #####

class SelfUpgradingSkillsAI:
    def __init__(self):
        self.skill_levels = {"Beginner": 1, "Intermediate": 2, "Advanced": 3, "Expert": 4}

    def recommend_learning_path(self, current_skill, industry_demand):
        """
        AI recommends the best learning path based on skill level & demand.
        """
        skill_progression = random.uniform(0.5, 1.5)  # AI learning boost factor
        next_level = min(self.skill_levels["Expert"], self.skill_levels[current_skill] + 1)
        
        return {
            "current_skill_level": current_skill,
            "industry_demand": industry_demand,
            "recommended_next_level": list(self.skill_levels.keys())[next_level - 1],
            "learning_boost_factor": round(skill_progression, 2)
        }

# ✅ Test Case
if __name__ == "__main__":
    skills_ai = SelfUpgradingSkillsAI()
    result = skills_ai.recommend_learning_path(current_skill="Intermediate", industry_demand=80)
    print(result)
