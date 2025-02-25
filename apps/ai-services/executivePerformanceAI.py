import joblib
import numpy as np
from sklearn.svm import SVR

##### Predicts executive success based on past data. #####

# Sample Data: [Past Performance Score, Strategic Impact Score] → Future Performance Rating
data = np.array([
    [90, 80, 88],  
    [85, 78, 83],  
    [95, 90, 92],  
    [70, 65, 72],  
])

X = data[:, :-1]
y = data[:, -1]

model = SVR()
model.fit(X, y)

# Save trained model
joblib.dump(model, "executive_performance_ai.pkl")
