import json
from web3 import Web3
from flask import Flask, request, jsonify

##### AI-powered NFT-based job credentials & reputation tracking. #####

# Web3 connection
INFURA_URL = "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
web3 = Web3(Web3.HTTPProvider(INFURA_URL))

app = Flask(__name__)

# NFT Smart contract details (Replace with actual values)
NFT_CONTRACT_ADDRESS = "0xYourNFTContractAddress"
NFT_CONTRACT_ABI = json.loads('[...]')  # Replace with actual ABI

nft_contract = web3.eth.contract(address=NFT_CONTRACT_ADDRESS, abi=NFT_CONTRACT_ABI)

@app.route("/mint-nft", methods=["POST"])
def mint_nft():
    """Mints an NFT for job credentials."""
    data = request.json
    candidate_address = data["candidate_address"]
    credential_data = data["credential_data"]

    if not web3.isAddress(candidate_address):
        return jsonify({"error": "Invalid Ethereum address"}), 400

    # Example transaction (actual minting logic depends on contract)
    txn = nft_contract.functions.mint(candidate_address, credential_data).buildTransaction({
        "from": candidate_address,
        "nonce": web3.eth.getTransactionCount(candidate_address)
    })

    return jsonify({"message": "NFT job credential minting transaction created", "txn": txn})

if __name__ == "__main__":
    app.run(port=5123, debug=True)
