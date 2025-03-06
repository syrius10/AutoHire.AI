import numpy as np

##### AI-powered automated tax planning for freelancers. #####

class FreelancerTaxAI:
    def __init__(self):
        self.tax_brackets = {
            "low": 0.10,
            "medium": 0.20,
            "high": 0.30
        }

    def estimate_taxes(self, annual_income, deductions):
        """Estimates annual tax obligations for freelancers."""
        taxable_income = max(0, annual_income - deductions)

        if taxable_income < 20000:
            tax_rate = self.tax_brackets["low"]
        elif taxable_income < 50000:
            tax_rate = self.tax_brackets["medium"]
        else:
            tax_rate = self.tax_brackets["high"]

        return round(taxable_income * tax_rate, 2)

# ✅ Test Case
if __name__ == "__main__":
    tax_ai = FreelancerTaxAI()
    estimated_tax = tax_ai.estimate_taxes(45000, 5000)
    print(f"Estimated Tax: ${estimated_tax}")
