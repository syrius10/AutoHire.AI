import { useEffect, useState } from "react";
import { fetchVisaAutomation } from "../services/globalVisaAutomationService";

// AI-powered work visa tracking & automation

export default function GlobalVisaAutomationDashboard() {
  const [visaStatus, setVisaStatus] = useState(null);

  useEffect(() => {
    async function loadData() {
      const result = await fetchVisaAutomation();
      setVisaStatus(result);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Global Work Visa Automation</h1>
      {visaStatus ? <pre>{JSON.stringify(visaStatus, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
