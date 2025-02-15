from transformers import pipeline
from flask import Flask, request, jsonify

app = Flask(__name__)
keyword_extractor = pipeline("ner", model="dslim/bert-base-NER")

@app.route("/evaluate_keywords", methods=["POST"])
def evaluate_keywords():
    data = request.json
    text = data.get("text", "")

    extracted_keywords = keyword_extractor(text)
    keywords = list(set([item["word"] for item in extracted_keywords]))

    return jsonify({"text": text, "keywords": keywords})

if __name__ == "__main__":
    app.run(port=5008, debug=True)