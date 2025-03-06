import random
from flask import Flask, request, jsonify

##### AI-driven tokenized work productivity incentives (Web3 integration). #####

app = Flask(__name__)

# Simulated AI model for productivity token assignment
def assign_productivity_tokens(work_hours, task_completion_rate, peer_review_score):
    """Calculates productivity tokens based on performance metrics."""
    base_tokens = (work_hours * 0.5) + (task_completion_rate * 2) + (peer_review_score * 1.5)
    bonus_tokens = random.uniform(0, 5)  # Additional random bonus tokens
    total_tokens = round(base_tokens + bonus_tokens, 2)
    return total_tokens

@app.route("/assign-tokens", methods=["POST"])
def assign_tokens():
    """API Endpoint to assign productivity tokens."""
    data = request.json
    work_hours = data.get("work_hours", 0)
    task_completion_rate = data.get("task_completion_rate", 0)
    peer_review_score = data.get("peer_review_score", 0)

    tokens = assign_productivity_tokens(work_hours, task_completion_rate, peer_review_score)
    return jsonify({"productivity_tokens": tokens})

if __name__ == "__main__":
    app.run(port=5131, debug=True)
