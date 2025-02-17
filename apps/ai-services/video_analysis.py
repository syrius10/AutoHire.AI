import cv2
from deepface import DeepFace
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/analyze_video", methods=["POST"])
def analyze_video():
    video_file = request.files["video"]
    video_path = f".uploads/{video_file.filename}"
    video_file.save(video_path)

    analysis = DeepFace.analyze(img_path=video_path, actions=["emotion"])

    return jsonify({"emotion": analysis[0]["dominant_emotion"]})

if __name__ == "__main__":
    app.run(port=5018, debug=True)