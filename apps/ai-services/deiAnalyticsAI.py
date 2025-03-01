import joblib
import numpy as np
from flask import Flask, request, jsonify
from sklearn.ensemble import RandomForestClassifier

##### AI-powered diversity, equity, and inclusion (DEI) analytics #####

app = Flask(__name__)

# Sample dataset: [Gender Ratio, Ethnic Diversity Score, Disability Inclusion, Female Leadership]
data = np.array([
    [50, 3, 1, 20, 1],  # Diverse
    [70, 1, 0, 5, 0],   # Needs Improvement
    [40, 4, 1, 30, 1],  # Strong DEI
    [60, 2, 0, 10, 0],  # Limited Diversity
])

X = data[:, :-1]  # Features: Gender Ratio, Ethnic Diversity, Disability Inclusion, Female Leadership
y = data[:, -1]   # DEI Score: (1 = Strong, 0 = Needs Improvement)

# Train AI model
model = RandomForestClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, "dei_analytics.pkl")

@app.route("/predict_dei", methods=["POST"])
def predict_dei():
    """Predicts diversity, equity, and inclusion (DEI) score."""
    data = request.json
    features = np.array([[data["gender_ratio"], data["ethnic_diversity"], data["disability_inclusion"], data["female_leadership"]]])
    prediction = model.predict(features)[0]
    result = "Strong DEI" if prediction == 1 else "Needs Improvement"
    
    return jsonify({"DEI Score": result})

if __name__ == "__main__":
    app.run(port=5082, debug=True)
