import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Sample dataset: [Year, Hiring Budget, Employee Count]
data = np.array([
    [2023, 500000, 50],
    [2024, 600000, 60],
    [2025, 750000, 75],
    [2026, 900000, 90],
])

df = pd.DataFrame(data, columns=["year", "hiring_budget", "employee_count"])

X = df[["year", "hiring_budget"]]
y = df["employee_count"]

model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "workforce_cost_model.pkl")