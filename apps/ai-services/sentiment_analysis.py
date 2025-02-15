from textblob import TextBlob
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze_sentiment", methods=["POST"])
def analyze_sentiment():
    data = request.json
    text = data.get("text", "")

    analysis = TextBlob(text)
    sentiment = "Positive" if analysis.sentiment.polarity > 0 else "Negative"

    return jsonify({"text": text, "sentiment": sentiment})

if __name__ == "__main__":
    app.run(port=5007, debug=True)