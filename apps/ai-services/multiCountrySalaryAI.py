import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### AI-powered salary benchmarking across different countries.
##### This model predicts expected salaries for a given role in multiple countries based on industry data.

# Sample dataset: [Country Economy Score, Industry Demand, Years Experience] → Salary
data = np.array([
    [8, 7, 5, 90000],  # USA
    [6, 5, 3, 50000],  # India
    [7, 6, 4, 65000],  # Germany
    [9, 8, 7, 120000],  # Switzerland
    [5, 4, 2, 40000],  # Brazil
])

X = data[:, :-1]  # Country Economy Score, Industry Demand, Years Experience
y = data[:, -1]   # Predicted Salary

# Train AI model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "multi_country_salary.pkl")

def predict_salary(economy_score, industry_demand, experience):
    """Predicts expected salary in different countries based on job market data."""
    salary = model.predict([[economy_score, industry_demand, experience]])[0]
    return f"Predicted Salary: ${round(salary, 2)}"

# ✅ Test Case
if __name__ == "__main__":
    print(predict_salary(7, 6, 4))  # Example input
