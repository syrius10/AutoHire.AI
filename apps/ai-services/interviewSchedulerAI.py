from flask import Flask, request, jsonify
from datetime import datetime, timedelta
import random

##### AI-based scheduling assistant for automated interview coordination. #####

app = Flask(__name__)

# Mock AI scheduling system
available_slots = [
    {"date": "2025-03-15", "time": "10:00 AM"},
    {"date": "2025-03-15", "time": "2:00 PM"},
    {"date": "2025-03-16", "time": "9:00 AM"},
    {"date": "2025-03-16", "time": "1:00 PM"}
]

@app.route("/schedule", methods=["POST"])
def schedule_interview():
    """AI-powered interview scheduling assistant."""
    data = request.json
    candidate_name = data.get("candidate_name", "")
    job_role = data.get("job_role", "")

    if not candidate_name or not job_role:
        return jsonify({"error": "Candidate name and job role are required"}), 400

    chosen_slot = random.choice(available_slots)
    confirmation_message = f"Interview for {candidate_name} ({job_role}) is scheduled on {chosen_slot['date']} at {chosen_slot['time']}."

    return jsonify({"message": confirmation_message, "slot": chosen_slot})

if __name__ == "__main__":
    app.run(port=5063, debug=True)
