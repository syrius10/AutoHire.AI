import joblib
import numpy as np
from transformers import pipeline
from flask import Flask, request, jsonify

##### Uses Natural Language Processing (NLP) to analyze sentiment from feedback & communication. #####
##### Determines engagement level based on workload, sentiment, and performance history. #####

app = Flask(__name__)

# Load Sentiment Analysis Model
sentiment_analyzer = pipeline("sentiment-analysis")

@app.route("/predict_engagement", methods=["POST"])
def predict_engagement():
    data = request.json
    text_feedback = data.get("feedback", "")

    sentiment_result = sentiment_analyzer(text_feedback)[0]
    sentiment_score = sentiment_result["score"] if sentiment_result["label"] == "POSITIVE" else -sentiment_result["score"]

    engagement_level = round((sentiment_score + data["workload_score"] + data["performance_score"]) / 3, 2)

    return jsonify({"engagementScore": engagement_level})

if __name__ == "__main__":
    app.run(port=5035, debug=True)

