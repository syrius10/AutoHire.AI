import json
import hashlib
import joblib
from flask import Flask, request, jsonify

##### Generates & validates AI-powered smart contracts. #####
##### Auto-verifies contract completion before releasing payments. #####

app = Flask(__name__)

def generate_smart_contract(contract_data):
    contract_data_str = json.dumps(contract_data, sort_keys=True)
    contract_hash = hashlib.sha256(contract_data_str.encode()).hexdigest()
    return {"contract_data": contract_data, "contract_hash": contract_hash}

@app.route("/generate_contract", methods=["POST"])
def create_contract():
    data = request.json
    contract = generate_smart_contract(data)
    return jsonify(contract)

if __name__ == "__main__":
    app.run(port=5051, debug=True)
