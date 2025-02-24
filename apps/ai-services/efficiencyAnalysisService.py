from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load("efficiency_analysis_model.pkl")

@app.route("/efficiency_analysis", methods=["POST"])
def efficiency_analysis():
    data = request.json
    prediction = model.predict([[data["year"], data["job_postings"]]])[0]
    return jsonify({"predicted_time_to_hire": round(prediction, 2)})

if __name__ == "__main__":
    app.run(port=5024, debug=True)
