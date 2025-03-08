import joblib
import numpy as np
from sklearn.ensemble import RandomForestClassifier

##### AI-based predictive AI-driven workforce retention models. #####

# Sample dataset: [Workload, Satisfaction Level, Career Growth, Work-Life Balance] -> Retention Probability
data = np.array([
    [40, 8, 9, 7, 1],  # High retention likelihood
    [55, 5, 6, 4, 0],  # Medium retention risk
    [60, 3, 5, 2, 0],  # High risk of leaving
    [35, 9, 10, 8, 1], # Strong retention
])

X = data[:, :-1]  # Workload, Satisfaction, Career Growth, Work-Life Balance
y = data[:, -1]   # Retention (1 = Likely to stay, 0 = High risk of leaving)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save trained model
joblib.dump(model, "ai_talent_retention.pkl")

def predict_retention(workload, satisfaction, career_growth, work_life_balance):
    """Predicts employee retention likelihood."""
    prediction = model.predict([[workload, satisfaction, career_growth, work_life_balance]])[0]
    return "Likely to Stay" if prediction == 1 else "High Risk of Leaving"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_retention(50, 6, 7, 5))  # Expected Output: Likely to Stay / High Risk of Leaving
