import whisper
import os
from flask import Flask, request, jsonify

app = Flask(__name__)
model = whisper.load_model("small")

@app.route("/transcribe", methods=["POST"])
def transcribe_audio():
    if "audio" not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    
    audio_file = request.files["audio"]
    audio_path = os.path.join("uploads", audio_file.filename)
    audio_file.save(audio_path)

    result = model.transcribe(audio_path)
    return jsonify({"transcription": result["text"]})

if __name__ == "__main__":
    app.run(port=5006, debug=True)