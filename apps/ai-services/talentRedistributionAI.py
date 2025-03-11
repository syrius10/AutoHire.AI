import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.neural_network import MLPRegressor

##### AI-driven redistribution of talent across departments #####

app = Flask(__name__)

# Sample training data: [Current Workforce, Department Productivity, Employee Overload] → Suggested Redistribution
data = np.array([
    [50, 85, 10, 5],
    [100, 75, 20, 15],
    [200, 90, 5, -10],
    [150, 80, 15, 8],
    [300, 92, 3, -12],
])

X = data[:, :-1]  # Current Workforce, Department Productivity, Employee Overload
y = data[:, -1]   # Suggested Talent Redistribution (+/- Employees)

model = MLPRegressor(max_iter=500, random_state=42, hidden_layer_sizes=(100, 50)
model.fit(X, y)

# Save trained model
joblib.dump(model, "talent_redistribution.pkl")

@app.route("/redistribute_talent", methods=["POST"])
def redistribute_talent():
    try:
        data = request.json
        features = np.array([[data["current_workforce"], data["department_productivity"], data["employee_overload"]]])
        prediction = model.predict(features)[0]
        return jsonify({"recommendedTalentChange": round(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5069, debug=True)
