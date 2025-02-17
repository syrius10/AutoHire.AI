import speech_recognition as sr
from textblob import TextBlob
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze_sentiment", methods=["POST"])
def analyze_sentiment():
    audio_file = request.files["audio"]
    recognizer = sr.Recognizer()

    with sr.AudioFile(audio_file) as source:
        audio = recognizer.record(source)

    text = recognizer.recognize_google(audio)
    analysis = TextBlob(text)
    sentiment = "Positive" if analysis.sentiment.polarity > 0 else "Negative"

    return jsonify({"transcription": text, "sentiment": sentiment})

if __name__ == "__main__":
    app.run(port=5017, debug=True)