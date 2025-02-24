import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

##### Analyzes emerging industry trends and forecasts future in-demand skills. #####

# Sample dataset with past hiring trends
data = np.array([
    [2022, "Software Engineer", 5.2],
    [2023, "Data Scientist", 6.8],
    [2024, "AI Engineer", 7.9],
    [2025, "Cybersecurity Analyst", 8.3],
])

df = pd.DataFrame(data, columns = ["year", "job_role", "growth_rate"])

# Convert categorical job roles into numerical values
df["job_role_encoded"] = pd.factorize(df["job_role"])[0]
X = df[["year", "job_role_encoded"]]
y = df["growth_rate"]

# Train the model
model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "future_skill_trends_model.pkl")