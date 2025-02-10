from flask import Flask, request, jsonify
import whisper
from textblob import TextBlob
import random

app = Flask(__name__)

# Load Whisper AI model
model = whisper.load_model("small")

@app.route("/evaluate", methods=["POST"])
def evaluate():
    # Simulate AI analysis with random feedback
    feedbacks = ["Great communication skills!", "Needs improvement in clarity.", "Excellent confidence and articulation"]
    return jsonify({"message": random.choice(feedbacks)})

@app.route("/evaluate_speech", methods=["POST"])
def evaluate_speech():
    audio_file = request.files["audio"]
    result = model.transcribe(audio_file)

    analysis = TextBlob(result["text"])
    sentiment = "Positive" if analysis.sentiment.polarity > 0 else "Negative"

    return jsonify({
        "transcription": result["text"],
        "sentiment": sentiment
    })

if __name__ == "__main__":
    app.run(port=5002)