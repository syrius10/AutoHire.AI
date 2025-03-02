import joblib
import numpy as np
from sklearn.cluster import KMeans

##### AI-driven self-organizing workforce teams. ##### 

# Sample dataset: [Experience (Years), Skill Level, Teamwork Score]  
data = np.array([
    [5, 8, 7],  # Mid-level, high teamwork
    [10, 9, 8],  # Senior-level, strong collaboration
    [2, 5, 6],  # Junior, average teamwork
    [7, 8, 9],  # Mid-Senior, excellent teamwork
    [3, 6, 5],  # Entry-level, learning teamwork
])

# Train KMeans model for self-organizing teams
model = KMeans(n_clusters=2, random_state=42)
model.fit(data)

# Save trained model
joblib.dump(model, "autonomous_team_ai.pkl")

def assign_team(experience, skill, teamwork):
    """Predicts optimal team for an employee."""
    cluster = model.predict([[experience, skill, teamwork]])[0]
    return f"Assigned to Team {cluster + 1}"

if __name__ == "__main__":
    print(assign_team(6, 8, 7))  # Example: Assigns employee to a team
