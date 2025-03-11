import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingRegressor

##### AI-driven real-time workforce management at a global scale. #####

# Sample dataset: [Region, Workforce Demand, Talent Supply] -> Optimal Workforce Allocation
data = np.array([
    [1, 500, 700, 600],  # Region 1: Demand 500, Supply 700 → Allocated 600
    [2, 800, 1000, 900],  # Region 2: Demand 800, Supply 1000 → Allocated 900
    [3, 400, 600, 500],  
    [4, 1000, 1200, 1100],  
])

X = data[:, :-1]  # Region, Workforce Demand, Talent Supply
y = data[:, -1]   # Optimal Workforce Allocation

# Train AI model
model = GradientBoostingRegressor(random_state=42, learning_rate=0.1)
model.fit(X, y)

# Save trained model
joblib.dump(model, "global_workforce_orchestrator.pkl")

def allocate_workforce(region, demand, supply):
    """Predicts optimal workforce allocation across global locations."""
    allocation = model.predict([[region, demand, supply]])[0]
    return round(allocation)

# ✅ Test Case
if __name__ == "__main__":
    print(allocate_workforce(2, 850, 1050))  # Expected Output: Optimal workforce allocation
