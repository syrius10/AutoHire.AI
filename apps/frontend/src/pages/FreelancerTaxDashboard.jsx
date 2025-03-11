import { useState } from "react";
import { estimateFreelancerTaxes } from "../services/freelancerTaxService";

// AI-driven automated tax planning & deductions.

const FreelancerTaxDashboard = () => {
  const [annualIncome, setAnnualIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [taxEstimate, setTaxEstimate] = useState(null);

  const handleEstimate = async () => {
    const estimatedTax = await estimateFreelancerTaxes(
      annualIncome,
      deductions,
    );
    setTaxEstimate(estimatedTax);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Freelancer Tax Estimation</h2>
      <div className="mt-4">
        <label htmlFor="annualIncome">Annual Income:</label>
        <input
          id="annualIncome"
          type="number"
          value={annualIncome}
          onChange={(e) => setAnnualIncome(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <label htmlFor="deductions">Deductions:</label>
        <input
          id="deductions"
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        <button
          onClick={handleEstimate}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Estimate Tax
        </button>
      </div>

      {taxEstimate !== null && (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Estimated Tax:</strong> ${taxEstimate}
          </p>
        </div>
      )}
    </div>
  );
};

export default FreelancerTaxDashboard;
