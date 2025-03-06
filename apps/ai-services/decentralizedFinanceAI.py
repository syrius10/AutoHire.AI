import random
from flask import Flask, request, jsonify

##### AI-based decentralized workforce financial tracking & payroll automation. #####

app = Flask(__name__)

# Simulated AI model for financial tracking
def track_financial_health(total_earnings, expenses, tax_rate, blockchain_tx_fees):
    """Calculates net income and financial health score for decentralized workforce."""
    taxable_income = total_earnings - expenses
    tax_deduction = taxable_income * (tax_rate / 100)
    net_income = taxable_income - tax_deduction - blockchain_tx_fees
    financial_score = round((net_income / total_earnings) * 100, 2) if total_earnings else 0
    return {"net_income": round(net_income, 2), "financial_health_score": financial_score}

@app.route("/track-finance", methods=["POST"])
def track_finance():
    """API Endpoint to track financial health & payroll automation."""
    data = request.json
    total_earnings = data.get("total_earnings", 0)
    expenses = data.get("expenses", 0)
    tax_rate = data.get("tax_rate", 0)
    blockchain_tx_fees = data.get("blockchain_tx_fees", 0)

    finance_data = track_financial_health(total_earnings, expenses, tax_rate, blockchain_tx_fees)
    return jsonify(finance_data)

if __name__ == "__main__":
    app.run(port=5133, debug=True)
