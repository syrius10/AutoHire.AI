from textblob import TextBlob
from flask import Flask, request, jsonify

##### AI-powered dispute resolution between freelancers & clients. #####
##### Uses NLP-based sentiment analysis. #####

app = Flask(__name__)

@app.route("/resolve_dispute", methods=["POST"])
def resolve_dispute():
    messages = request.json["conversation"]
    sentiment_scores = [TextBlob(msg).sentiment.polarity for msg in messages]
    resolution = "Needs Mediation" if sum(sentiment_scores) < 0 else "Likely to Self-Resolve"
    return jsonify({"resolution": resolution})

if __name__ == "__main__":
    app.run(port=5054, debug=True)
