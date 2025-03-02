import openai
import json
from flask import Flask, request, jsonify

##### AI-driven meeting automation, agenda generation & follow-up actions #####

app = Flask(__name__)

openai.api_key = "your-openai-api-key"

@app.route("/generate-agenda", methods=["POST"])
def generate_agenda():
    """AI-powered meeting agenda generation."""
    try:
        data = request.json
        topics = data.get("topics", [])

        prompt = f"Generate a professional meeting agenda for these topics: {', '.join(topics)}"
        response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "system", "content": prompt}]
        )
        
        agenda = response["choices"][0]["message"]["content"]
        return jsonify({"agenda": agenda})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5102, debug=True)
