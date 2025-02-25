import { useEffect, useState } from "react";
import { fetchEmployeeEngagement } from "../services/employeeEngagementService";

const EmployeeEngagementDashboard = () => {
  const [engagementData, setEngagementData] = useState(null);

  useEffect(() => {
    fetchEmployeeEngagement().then(setEngagementData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Employee Engagement</h2>
      {engagementData ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Engagement Score:</strong> {engagementData.engagementScore}</p>
          <p><strong>Sentiment:</strong> {engagementData.sentiment}</p>
        </div>
      ) : (
        <p>Loading engagement data...</p>
      )}
    </div>
  );
};

export default EmployeeEngagementDashboard;
