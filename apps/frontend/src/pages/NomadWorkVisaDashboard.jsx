import { useEffect, useState } from "react";
import { fetchNomadWorkVisaStatus } from "../services/nomadWorkVisaService";

// Displays AI-powered global work visa tracking & mobility automation.

const NomadWorkVisaDashboard = () => {
  const [visaStatus, setVisaStatus] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchNomadWorkVisaStatus();
      setVisaStatus(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🛂 Digital Nomad Work Visa Status</h2>
      {visaStatus ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">{JSON.stringify(visaStatus, null, 2)}</pre>
      ) : (
        <p>Loading work visa information...</p>
      )}
    </div>
  );
};

export default NomadWorkVisaDashboard;
