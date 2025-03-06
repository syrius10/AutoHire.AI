import random

##### AI-driven global workforce decentralization & remote work automation. #####

class DecentralizedWorkforceAI:
    def __init__(self):
        self.remote_work_adoption = ["High", "Medium", "Low"]
        self.ai_automation_levels = ["Fully Automated", "Partially Automated", "Manual"]
    
    def analyze_workforce(self, company_size, industry):
        """Analyzes workforce decentralization potential."""
        adoption = random.choice(self.remote_work_adoption)
        automation = random.choice(self.ai_automation_levels)

        return {
            "company_size": company_size,
            "industry": industry,
            "remote_work_adoption": adoption,
            "ai_automation_level": automation
        }

# ✅ Test Case
if __name__ == "__main__":
    workforce_ai = DecentralizedWorkforceAI()
    result = workforce_ai.analyze_workforce(company_size=500, industry="Tech")
    print(result)
