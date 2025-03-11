import joblib
import numpy as np
from flask import Flask, request, jsonify
from textblob import TextBlob
from sklearn.ensemble import GradientBoostingClassifier

app = Flask(__name__)

# Sample dataset: [Contract Value, Delayed Payments, Unclear Terms, Dispute Count] → Dispute Resolution Score
data = np.array([
    [5000, 0, 0, 1, 1],  # Low dispute risk
    [10000, 1, 1, 2, 0],  # High dispute risk
    [2000, 0, 1, 0, 1],  # Medium risk
    [15000, 2, 2, 3, 0],  # High dispute risk
])

X = data[:, :-1]  # Features: Contract Value, Delayed Payments, Unclear Terms, Past Disputes
y = data[:, -1]   # Target: Dispute Resolution Score (1 = Resolved Easily, 0 = Complex Dispute)

# Train AI model
model = GradientBoostingClassifier(random_state=42, learning_rate=0.1)
model.fit(X, y)

# Save model
joblib.dump(model, "dispute_resolution.pkl")


def analyze_sentiment(conversation):
    """Uses NLP to analyze sentiment in contract dispute conversations."""
    sentiment_scores = [TextBlob(msg).sentiment.polarity for msg in conversation]
    overall_sentiment = sum(sentiment_scores) / len(sentiment_scores) if sentiment_scores else 0
    return "Needs Mediation" if overall_sentiment < 0 else "Likely to Self-Resolve"


def predict_dispute_resolution(contract_value, delayed_payments, unclear_terms, past_disputes):
    """Predicts dispute resolution difficulty using contract risk assessment."""
    prediction = model.predict([[contract_value, delayed_payments, unclear_terms, past_disputes]])[0]
    return "Easily Resolved" if prediction == 1 else "Complex Dispute"


@app.route("/resolve_dispute", methods=["POST"])
def resolve_dispute():
    """AI-driven contract dispute resolution combining NLP + risk analysis."""
    try:
        data = request.json
        conversation = data.get("conversation", [])
        contract_value = data.get("contract_value", 5000)
        delayed_payments = data.get("delayed_payments", 0)
        unclear_terms = data.get("unclear_terms", 0)
        past_disputes = data.get("past_disputes", 0)

        # NLP-based Sentiment Analysis
        sentiment_result = analyze_sentiment(conversation)

        # AI-based Contract Risk Analysis
        dispute_result = predict_dispute_resolution(contract_value, delayed_payments, unclear_terms, past_disputes)

        return jsonify({
            "sentiment_analysis": sentiment_result,
            "dispute_assessment": dispute_result
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5054, debug=True)
