import { useEffect, useState } from "react";
import { fetchMilestonePayouts } from "../services/milestonePayoutsService";

// AI-driven blockchain-based freelancer milestone payment tracking.

const MilestonePayoutsDashboard = () => {
  const [payout, setPayout] = useState(null);

  useEffect(() => {
    fetchMilestonePayouts().then(setPayout);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💰 Milestone Payouts</h2>
      {payout ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Milestone Amount:</strong> ${payout.amount}</p>
          <p><strong>Completion Percentage:</strong> {payout.completion_percentage}%</p>
          <p><strong>Client Satisfaction Score:</strong> {payout.client_satisfaction_score}/10</p>
        </div>
      ) : (
        <p>Loading milestone payouts...</p>
      )}
    </div>
  );
};

export default MilestonePayoutsDashboard;
