import { useEffect, useState } from "react";
import { fetchSuccessionPlan } from "../services/successionPlanningService";

// Displays AI-driven leadership planning insights.

const SuccessionPlanningDashboard = () => {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    fetchSuccessionPlan().then(setPlan);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🏆 Leadership Succession Plan</h2>
      {plan ? (
        <p className="mt-4">Recommended Successor: {plan.successor}</p>
      ) : (
        <p>Loading succession insights...</p>
      )}
    </div>
  );
};

export default SuccessionPlanningDashboard;
