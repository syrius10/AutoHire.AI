import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestRegressor

##### AI-powered HR workforce planning & optimization #####

app = Flask(__name__)

# Sample training data: [Department Size, Revenue Growth, Attrition Rate] → Optimal Workforce Allocation
data = np.array([
    [50, 5.2, 8, 52],
    [100, 7.5, 5, 97],
    [200, 4.1, 10, 180],
    [150, 6.3, 7, 143],
    [300, 8.0, 6, 290],
])

X = data[:, :-1]  # Department Size, Revenue Growth, Attrition Rate
y = data[:, -1]   # Optimal Workforce Allocation

model = RandomForestRegressor()
model.fit(X, y)

# Save trained model
joblib.dump(model, "enterprise_workforce_planning.pkl")

@app.route("/predict_workforce", methods=["POST"])
def predict_workforce():
    try:
        data = request.json
        features = np.array([[data["department_size"], data["revenue_growth"], data["attrition_rate"]]])
        prediction = model.predict(features)[0]
        return jsonify({"optimalWorkforce": round(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5067, debug=True)
