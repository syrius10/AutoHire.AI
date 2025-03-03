import { useState } from "react";
import { fetchLegalCompliance } from "../services/legalComplianceService";

export default function LegalComplianceDashboard() {
  const [formData, setFormData] = useState({
    country: "",
    terms: "",
    contractLength: 12,
    complianceScore: 80,
    pastDisputes: 0,
  });

  const [complianceResult, setComplianceResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await fetchLegalCompliance(formData);
    setComplianceResult(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚖️ AI-Powered Legal Compliance Check</h2>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="border p-2 w-full"/>
        <textarea name="terms" placeholder="Contract Terms" value={formData.terms} onChange={handleChange} className="border p-2 w-full"/>
        <input type="number" name="contractLength" placeholder="Contract Length (months)" value={formData.contractLength} onChange={handleChange} className="border p-2 w-full"/>
        <input type="number" name="complianceScore" placeholder="Compliance Score (1-100)" value={formData.complianceScore} onChange={handleChange} className="border p-2 w-full"/>
        <input type="number" name="pastDisputes" placeholder="Past Disputes" value={formData.pastDisputes} onChange={handleChange} className="border p-2 w-full"/>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Check Compliance</button>
      </form>

      {complianceResult && (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Country:</strong> {complianceResult.country}</p>
          <p><strong>Compliance Status:</strong> {complianceResult.compliance_status}</p>
          <p><strong>Risk Assessment:</strong> {complianceResult.risk_assessment}</p>
        </div>
      )}
    </div>
  );
}
