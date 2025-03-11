import hashlib
import json
from datetime import datetime, timezone

##### Blockchain-powered freelancer payment automation #####

class BlockchainPayment:
    def __init__(self, sender, recipient, amount):
        self.transaction = {
            "sender": sender,
            "recipient": recipient,
            "amount": amount,
            "timestamp": datetime.now(timezone.utc).isoformat(),  # Timezone-aware datetime
            "status": "Pending"
        }
        self.transaction["hash"] = self.generate_hash()

    def generate_hash(self):
        """Generates a hash for transaction security."""
        transaction_string = json.dumps(self.transaction, sort_keys=True).encode()
        return hashlib.sha256(transaction_string).hexdigest()

    def confirm_payment(self):
        """Finalizes the payment transaction."""
        self.transaction["status"] = "Completed"
        self.contract["completion_timestamp"] = datetime.now(timezone.utc).isoformat()  # Timezone-aware datetime
        self.transaction["hash"] = self.generate_hash()
        return self.transaction

# ✅ Test Case
if __name__ == "__main__":
    payment = BlockchainPayment("TechCorp", "Alice", "2000 USDC")
    print(payment.transaction)  # Before confirmation
    payment.confirm_payment()
    print(payment.transaction)  # After confirmation
