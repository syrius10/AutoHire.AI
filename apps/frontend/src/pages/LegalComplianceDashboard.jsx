import React, { useState } from "react";
import { fetchComplianceReport } from "../services/legalComplianceService";

// Ensures compliance with global employment laws

const LegalComplianceDashboard = () => {
  const [country, setCountry] = useState("");
  const [employmentTerms, setEmploymentTerms] = useState("");
  const [complianceStatus, setComplianceStatus] = useState("");

  const handleCheckCompliance = async () => {
    const data = await fetchComplianceReport(country, employmentTerms);
    setComplianceStatus(data.compliance_status);
  };

  return (
    <div>
      <h2>Legal Compliance Check</h2>
      <input
        type="text"
        placeholder="Enter Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <textarea
        placeholder="Enter employment terms..."
        value={employmentTerms}
        onChange={(e) => setEmploymentTerms(e.target.value)}
      />
      <button onClick={handleCheckCompliance}>Check Compliance</button>
      <p><strong>Status:</strong> {complianceStatus}</p>
    </div>
  );
};

export default LegalComplianceDashboard;
