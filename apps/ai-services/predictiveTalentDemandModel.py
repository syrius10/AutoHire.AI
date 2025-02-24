import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import joblib

##### Trains a model to forecast hiring needs based on industry trends. #####

# Sample dataset: [Year, Quarter, Industry Growth Rate, Job Postings]
data = np.array([
    [2023, 1, 3.5, 1000],
    [2023, 2, 4.2, 1500],
    [2023, 3, 5.1, 2000],
    [2024, 1, 6.0, 3000],
])

df = pd.DataFrame(data, columns = ["year", "quarter", "industry_growth", "job_postings"])

X = df[["year", "quarter", "industry_growth"]]
y = df["job_postings"]

model = LinearRegression()
model.fit(X, y)

# Save trained model
joblib.dump(model, "predictive_talent_demand_model.pkl")