import random

##### AI-driven freelancer bots that negotiate work terms & contracts autonomously. #####

class GigNegotiationAI:
    def __init__(self):
        self.negotiation_threshold = 0.85  # Accept deals if confidence is above this threshold

    def negotiate_terms(self, freelancer_rate, employer_budget, job_scope):
        """
        AI-driven contract negotiation based on rate, budget, and job scope.
        """
        negotiation_factor = random.uniform(0.7, 1.0)  # AI's ability to negotiate

        # Calculate final agreed price
        proposed_rate = freelancer_rate * negotiation_factor
        final_price = min(proposed_rate, employer_budget)

        # Determine if agreement is reached
        agreement = True if (final_price / freelancer_rate) >= self.negotiation_threshold else False
        
        return {
            "freelancer_rate": freelancer_rate,
            "employer_budget": employer_budget,
            "negotiated_rate": final_price,
            "agreement_reached": agreement,
            "job_scope": job_scope
        }

# ✅ Test Case
if __name__ == "__main__":
    ai_negotiator = GigNegotiationAI()
    result = ai_negotiator.negotiate_terms(freelancer_rate=100, employer_budget=90, job_scope="Website development")
    print(result)
