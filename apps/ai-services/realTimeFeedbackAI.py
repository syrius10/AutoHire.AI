import joblib
import numpy as np
from transformers import pipeline
from flask import Flask, request, jsonify

##### AI model that provides real-time feedback & sentiment analysis. #####

app = Flask(__name__)

# Load Sentiment Analysis Model
sentiment_analyzer = pipeline("sentiment-analysis")

@app.route("/feedback-analysis", methods=["POST"])
def analyze_feedback():
    """AI-powered real-time feedback & sentiment analysis."""
    try:
        data = request.json
        feedback_text = data.get("feedback", "")

        sentiment_result = sentiment_analyzer(feedback_text)[0]
        sentiment_score = sentiment_result["score"] if sentiment_result["label"] == "POSITIVE" else -sentiment_result["score"]

        feedback_insight = "Positive" if sentiment_score > 0 else "Negative"

        return jsonify({"feedbackInsight": feedback_insight, "sentimentScore": round(sentiment_score, 2)})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5103, debug=True)
