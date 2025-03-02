import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### AI-based Workload Optimization Model #####

# Sample dataset: [Current Workload, Work Efficiency, Burnout Score] -> Optimized Workload Distribution
data = np.array([
    [50, 80, 40, 45],  
    [70, 60, 50, 60],  
    [30, 90, 20, 30],  
    [90, 50, 70, 75],  
])

X = data[:, :-1]  # Current Workload, Work Efficiency, Burnout Score
y = data[:, -1]   # Recommended Optimized Workload

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "workload_balancing.pkl")

def recommend_workload(current_workload, efficiency, burnout_score):
    """Predicts optimized workload distribution to prevent burnout."""
    prediction = model.predict([[current_workload, efficiency, burnout_score]])[0]
    return round(prediction, 2)

# ✅ Test Case
if __name__ == "__main__":
    print(recommend_workload(60, 70, 45))  # Expected Output: Optimized Workload
