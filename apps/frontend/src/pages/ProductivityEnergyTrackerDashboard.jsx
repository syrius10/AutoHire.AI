import { useEffect, useState } from "react";
import { fetchProductivityScore } from "../services/productivityEnergyTrackerService.js";

// AI-powered real-time productivity & energy tracking.

const ProductivityEnergyTrackerDashboard = () => {
  const [productivityScore, setProductivityScore] = useState(null);

  useEffect(() => {
    fetchProductivityScore(7, 8, 3).then(setProductivityScore);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">⚡ Productivity & Energy Tracker</h2>
      {productivityScore ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Productivity Score:</strong> {productivityScore.score}</p>
        </div>
      ) : (
        <p>Loading productivity insights...</p>
      )}
    </div>
  );
};

export default ProductivityEnergyTrackerDashboard;
