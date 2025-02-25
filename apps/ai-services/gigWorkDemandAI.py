import joblib
import numpy as np
from sklearn.linear_model import LinearRegression

##### Predicts demand for freelance/gig roles #####

# Sample dataset: [Industry Growth Rate, Online Job Postings, Avg Freelancer Pay]
data = np.array([
    [3.5, 500, 30, 1000],
    [4.2, 700, 35, 1500],
    [5.1, 900, 40, 2000],
    [6.0, 1200, 50, 2500],
])

X = data[:, :-1]  # Features: Growth Rate, Job Postings, Pay
y = data[:, -1]   # Demand Forecast

model = LinearRegression()
model.fit(X, y)

joblib.dump(model, "gig_work_demand.pkl")
