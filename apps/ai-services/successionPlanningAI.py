import joblib
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.neighbors import KNeighborsClassifier

# Sample dataset: [Experience (Years), Leadership Courses, Promotions, Performance Score]
data = np.array([
    [5, 2, 1, 80, 1],  # Ready for Promotion
    [10, 4, 2, 90, 1],  # Ready for Promotion
    [15, 6, 3, 95, 1],  # Ready for Promotion
    [3, 1, 0, 70, 0],   # Not Ready Yet
    [8, 3, 1, 85, 1],   # Ready for Promotion
    [4, 1, 0, 65, 0],   # Not Ready Yet
])

X = data[:, :-1]  # Input features: Experience, Leadership Courses, Promotions, Performance Score
y = data[:, -1]   # Target: Promotion Readiness (1 = Ready, 0 = Not Ready)

# ✅ Train Gradient Boosting Model (Strong Predictor)
gb_model = GradientBoostingClassifier()
gb_model.fit(X, y)

# ✅ Train KNN Model (Backup Predictor)
knn_model = KNeighborsClassifier(n_neighbors=3)
knn_model.fit(X, y)

# ✅ Save Both Models
joblib.dump(gb_model, "succession_planning_gb.pkl")
joblib.dump(knn_model, "succession_planning_knn.pkl")

def predict_promotion_readiness(experience, courses, promotions, performance):
    """Predicts if an employee is ready for leadership promotion using ensemble models."""
    gb_prediction = gb_model.predict([[experience, courses, promotions, performance]])[0]
    knn_prediction = knn_model.predict([[experience, courses, promotions, performance]])[0]

    # ✅ Use Gradient Boosting as primary; KNN as backup if uncertain.
    final_prediction = "Ready for Promotion" if gb_prediction == 1 or knn_prediction == 1 else "Not Ready Yet"
    
    return final_prediction

# ✅ Test Case
if __name__ == "__main__":
    print(predict_promotion_readiness(6, 2, 1, 88))  # Example input
