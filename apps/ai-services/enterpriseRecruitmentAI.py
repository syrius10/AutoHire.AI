import joblib
from flask import Flask, request, jsonify
from transformers import pipeline

##### ✅ Automates large-scale candidate screening. #####
##### ✅ Uses NLP-based resume classification. #####

app = Flask(__name__)

resume_screener = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")

# ✅ Resume Screening API
@app.route("/screen_candidate", methods=["POST"])
def screen_candidate():
    data = request.json
    result = resume_screener(data["resume_text"], ["Highly Suitable", "Moderately Suitable", "Not Suitable"])
    return jsonify({"classification": result["labels"][0]})

if __name__ == "__main__":
    app.run(port=5033, debug=True)
