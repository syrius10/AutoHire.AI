import hashlib
import json
from datetime import datetime

##### AI-driven smart contracts & decentralized hiring agreements #####

class SmartContract:
    def __init__(self, freelancer, employer, job_details, payment):
        self.contract = {
            "freelancer": freelancer,
            "employer": employer,
            "job_details": job_details,
            "payment": payment,
            "timestamp": datetime.utcnow().isoformat(),
            "status": "Pending"
        }
        self.contract["hash"] = self.generate_hash()

    def generate_hash(self):
        """Creates a unique blockchain-based hash for the smart contract."""
        contract_string = json.dumps(self.contract, sort_keys=True).encode()
        return hashlib.sha256(contract_string).hexdigest()

    def execute_contract(self):
        """Marks the contract as completed and finalizes payment."""
        self.contract["status"] = "Completed"
        self.contract["completion_timestamp"] = datetime.utcnow().isoformat()
        self.contract["hash"] = self.generate_hash()
        return self.contract

# ✅ Test Case
if __name__ == "__main__":
    contract = SmartContract("Alice", "TechCorp", "Website Development", "2000 USDC")
    print(contract.contract)  # Prints contract details with hash
    contract.execute_contract()
    print(contract.contract)  # Prints updated contract with new hash
