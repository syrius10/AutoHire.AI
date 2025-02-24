from flask import Flask, request, jsonify
from workforceModel import predict_workforce_demand, model  # Import AI model function

app = Flask(__name__)

@app.route("/predict-workforce", methods=["POST"])
def predict_workforce():
    data = request.get_json()
    industry = data.get("industry")
    region = data.get("region")
    skills = data.get("skills")

    prediction = predict_workforce_demand(industry, region, skills)

    return jsonify({"workforceDemand": prediction})

# ✅ Workforce Optimization Strategy Function
def workforce_optimization_strategy(forecast):
    if forecast > 10000:
        return "Expand hiring in key growth areas."
    elif forecast < 3000:
        return "Consider hiring freeze or upskilling existing employees."
    else:
        return "Maintain steady hiring pace."

# ✅ API Endpoint for Workforce Optimization
@app.route("/optimize", methods=["POST"])
def optimize_workforce():
    data = request.json
    forecast = model.predict([[data["year"], data["quarter"], data["industry_growth_rate"], data["job_postings"]]])[0]
    strategy = workforce_optimization_strategy(forecast)
    return jsonify({"forecast": round(forecast, 2), "strategy": strategy})

if __name__ == "__main__":
    app.run(port=5020, debug=True)  # ✅ Using port 5020
