import React, { useEffect, useState } from "react";
import { fetchFraudulentProfiles } from "../services/fraudulentProfileDetectionService";

// Detects fake freelancer profiles & scams.

const FraudulentProfileDetectionDashboard = () => {
  const [fraudData, setFraudData] = useState(null);

  useEffect(() => {
    fetchFraudulentProfiles().then((data) => setFraudData(data));
  }, []);

  return (
    <div>
      <h2>Fraudulent Profile Detection Dashboard</h2>
      {fraudData ? (
        <pre>{JSON.stringify(fraudData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FraudulentProfileDetectionDashboard;
