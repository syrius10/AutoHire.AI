import React, { useState } from "react";
import { fetchVisaEligibility } from "../services/automatedVisaScreeningService";

// AI-based visa screening & work eligibility checks

const AutomatedVisaScreeningDashboard = () => {
  const [country, setCountry] = useState("");
  const [hasWorkPermit, setHasWorkPermit] = useState(false);
  const [visaStatus, setVisaStatus] = useState("");

  const handleVisaCheck = async () => {
    const data = await fetchVisaEligibility(country, hasWorkPermit);
    setVisaStatus(data.visa_eligibility);
  };

  return (
    <div>
      <h2>Automated Visa Screening</h2>
      <input
        type="text"
        placeholder="Enter Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={hasWorkPermit}
          onChange={() => setHasWorkPermit(!hasWorkPermit)}
        />
        Has Work Permit
      </label>
      <button onClick={handleVisaCheck}>Check Visa Eligibility</button>
      <p><strong>Eligibility:</strong> {visaStatus}</p>
    </div>
  );
};

export default AutomatedVisaScreeningDashboard;
