import React, { useEffect, useState } from "react";
import { fetchFreelancerReputation } from "../services/freelancerReputationService";

// Displays AI-powered freelancer credibility scoring & reviews.

const FreelancerReputationDashboard = () => {
  const [reputationData, setReputationData] = useState(null);

  useEffect(() => {
    fetchFreelancerReputation().then((data) => setReputationData(data));
  }, []);

  return (
    <div>
      <h2>Freelancer Reputation Dashboard</h2>
      {reputationData ? (
        <pre>{JSON.stringify(reputationData, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FreelancerReputationDashboard;
