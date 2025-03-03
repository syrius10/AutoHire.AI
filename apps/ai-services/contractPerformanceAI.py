import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### Trains a model to predict contract success based on project performance. #####
##### Features: Project Deadline (days), Work Quality Score, Payment Timeliness #####
##### Target: Contract Success Score (0-100) #####
##### Model: Linear Regression #####
##### Save model as "contract_performance.pkl" #####
##### Usage: evaluate_contract_performance(deadline, quality_score, payment_timeliness) #####
##### Returns: Predicted contract success score #####
##### Example: evaluate_contract_performance(45, 80, 1) #####
##### Expected Output: Predicted success score #####
##### This AI model predicts contract success based on project performance metrics such as deadline adherence, work quality, and payment timeliness. #####

# Sample dataset: [Project Deadline (days), Work Quality Score, Payment Timeliness] → Contract Success Score
data = np.array([
    [30, 85, 1, 90],  # Successful contract
    [60, 70, 1, 75],  # Moderate performance
    [15, 50, 0, 40],  # Failed contract
    [90, 95, 1, 98],  # High success
])

X = data[:, :-1]  # Features: Deadline, Quality Score, Payment Timeliness
y = data[:, -1]   # Success Score (0-100)

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save model
joblib.dump(model, "contract_performance.pkl")

def evaluate_contract_performance(deadline, quality_score, payment_timeliness):
    """Predicts contract success score."""
    prediction = model.predict([[deadline, quality_score, payment_timeliness]])[0]
    return round(prediction, 2)

if __name__ == "__main__":
    print(evaluate_contract_performance(45, 80, 1))  # Expected Output: Predicted success score
