import hashlib
import random

##### AI-driven smart contract-based payments for gig workers. #####

class GigSmartPaymentsAI:
    def __init__(self):
        self.escrow_accounts = {}  # Simulated escrow system

    def generate_smart_contract(self, freelancer_id, employer_id, amount):
        """Creates a smart contract for gig payment."""
        contract_id = hashlib.sha256(f"{freelancer_id}{employer_id}{amount}{random.randint(1, 1000)}".encode()).hexdigest()
        self.escrow_accounts[contract_id] = {
            "freelancer_id": freelancer_id,
            "employer_id": employer_id,
            "amount": amount,
            "status": "Pending"
        }
        return contract_id

    def release_payment(self, contract_id):
        """Releases payment to freelancer once work is completed."""
        if contract_id in self.escrow_accounts and self.escrow_accounts[contract_id]["status"] == "Pending":
            self.escrow_accounts[contract_id]["status"] = "Paid"
            return f"Payment of {self.escrow_accounts[contract_id]['amount']} released to freelancer {self.escrow_accounts[contract_id]['freelancer_id']}."
        return "Invalid or already processed contract."

# ✅ Test Case
if __name__ == "__main__":
    payment_ai = GigSmartPaymentsAI()
    contract = payment_ai.generate_smart_contract("freelancer123", "employer456", 500)
    print(f"Smart Contract Created: {contract}")
    print(payment_ai.release_payment(contract))
