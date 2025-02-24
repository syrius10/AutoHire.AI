import random

def predict_workforce_demand(industry, region, skills):
    """
    Simple AI model to predict workforce demand based on industry, region, and required skills.
    """
    base_demand = random.randint(50, 200)  # Mocked demand
    skill_factor = len(skills) * 5  # More skills → higher demand score

    demand_score = base_demand + skill_factor

    return {
        "industry": industry,
        "region": region,
        "demandScore": demand_score,
    }