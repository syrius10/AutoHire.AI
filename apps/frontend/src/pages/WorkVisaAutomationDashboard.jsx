import { useEffect, useState } from "react";
import { checkVisaEligibility } from "../services/workVisaAutomationService";

// AI-driven work visa eligibility & compliance automation.

export default function WorkVisaAutomationDashboard() {
  const [visaStatus, setVisaStatus] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await checkVisaEligibility({
        experience: 5,
        jobOffer: true,
        countryStrictness: "Medium",
      });
      setVisaStatus(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🛂 Work Visa Automation</h2>
      {visaStatus ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">{JSON.stringify(visaStatus, null, 2)}</pre>
      ) : (
        <p>Checking visa eligibility...</p>
      )}
    </div>
  );
}
