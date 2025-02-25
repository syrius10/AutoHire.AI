from flask import Flask, request, jsonify
from transformers import pipeline

##### AI-driven multilingual job description & interview translations #####

app = Flask(__name__)
translator = pipeline("translation", model="Helsinki-NLP/opus-mt-en-fr")

@app.route("/translate-job", methods=["POST"])
def translate_job():
    data = request.json
    job_description = data.get("text", "")
    target_language = data.get("language", "fr")

    translated_text = translator(job_description, tgt_lang=target_language)[0]["translation_text"]
    
    return jsonify({"original": job_description, "translated": translated_text})

if __name__ == "__main__":
    app.run(port=5044, debug=True)
