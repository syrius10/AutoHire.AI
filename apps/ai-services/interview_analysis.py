from fastapi import FastAPI, UploadFile, File
import speech_recognition as sr
from transformers import pipeline
from textblob import TextBlob

app = FastAPI()

# Load AI models
sentiment_analyzer = pipeline("sentiment-analysis")

@app.post("/analyze-interview")
async def analyze_interview(audio: UploadFile = File(...)):
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio.file) as source:
        audio_data = recognizer.record(source)
        transcript = recognizer.recognize_google(audio_data)

    sentiment = sentiment_analyzer(transcript)[0]
    analysis = TextBlob(transcript)

    keywords = [word for word, tag in analysis.tags if tag in ["NN", "VB"]]

    return {
        "transcript": transcript,
        "sentiment": sentiment["label"],
        "confidence_score": analysis.sentiment.polarity,
        "keywords": keywords
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5004)