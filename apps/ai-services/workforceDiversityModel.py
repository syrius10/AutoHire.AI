from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/diversity_insigts", methods=["POST"])
def diversity_insights():
    data = request.json
    gender_ratio = data.get("gender_ratio", {"male": 50, "female": 50})
    ethnic_diversity = data.get("ethnic_diversity", {})

    insights = {
        "gender_balance": "Balanced" if 40 <= gender_ratio["female"] <= 60 else "Needs improvement",
        "ethnic_diversity": "Diverse" if len(ethnic_diversity) > 3 else "Limited diversity",
    }

    return jsonify(insights)

if __name__ == "__main__":
    app.run(port=5021, debug=True)