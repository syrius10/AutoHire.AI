import random
from flask import Flask, request, jsonify

##### AI-powered blockchain-based freelancer milestone payouts. #####

app = Flask(__name__)

# Simulated AI model for milestone payouts
def calculate_milestone_payout(contract_value, completion_percentage, client_satisfaction_score):
    """Determines milestone payouts based on contract progress and client satisfaction."""
    base_payout = (contract_value * (completion_percentage / 100)) * (client_satisfaction_score / 10)
    transaction_fee = random.uniform(1, 3)  # Simulated blockchain transaction fee
    final_payout = round(base_payout - transaction_fee, 2)
    return final_payout

@app.route("/milestone-payout", methods=["POST"])
def milestone_payout():
    """API Endpoint to calculate blockchain-based milestone payouts."""
    data = request.json
    contract_value = data.get("contract_value", 0)
    completion_percentage = data.get("completion_percentage", 0)
    client_satisfaction_score = data.get("client_satisfaction_score", 0)

    payout = calculate_milestone_payout(contract_value, completion_percentage, client_satisfaction_score)
    return jsonify({"milestone_payout": payout})

if __name__ == "__main__":
    app.run(port=5132, debug=True)
