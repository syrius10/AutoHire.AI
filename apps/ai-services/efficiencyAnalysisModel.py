import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

# Sample dataset: [Year, Job Postings, Time-to-Hire (Days)]
data = np.array([
    [2023, 100, 30],
    [2024, 120, 28],
    [2025, 140, 26],
    [2026, 160, 24],
])

df = pd.DataFrame(data, columns=["year", "job_postings", "time_to_hire"])

X = df[["year", "job_postings"]]
y = df["time_to_hire"]

model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "efficiency_analysis_model.pkl")