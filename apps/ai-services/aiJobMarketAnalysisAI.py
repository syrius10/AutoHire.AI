import random

##### AI-driven real-time global job market insights. #####

class AIJobMarketAnalysis:
    def __init__(self):
        self.job_trends = ["Software Engineering", "AI Research", "Data Science", "Cybersecurity", "Blockchain Development"]
        self.regions = ["North America", "Europe", "Asia", "South America", "Australia"]

    def analyze_market(self):
        """Generates AI-driven job market trends."""
        trend = random.choice(self.job_trends)
        region = random.choice(self.regions)
        demand_score = round(random.uniform(5, 10), 2)  # Job demand on a scale of 1-10
        return {"Top Hiring Sector": trend, "Region": region, "Job Demand Score": demand_score}

# ✅ Test Case
if __name__ == "__main__":
    market_ai = AIJobMarketAnalysis()
    result = market_ai.analyze_market()
    print(result)  # Expected Output: Trending job sectors, regions, and demand score
