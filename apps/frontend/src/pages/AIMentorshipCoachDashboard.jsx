import { useEffect, useState } from "react";
import { fetchMentorshipInsights } from "../services/aiMentorshipCoachService";

// AI-powered coaching & mentorship tracking.

export default function AIMentorshipCoachDashboard() {
  const [mentorshipData, setMentorshipData] = useState(null);

  useEffect(() => {
    async function loadMentorshipData() {
      const data = await fetchMentorshipInsights(10, 4.5, 85); // Example input
      setMentorshipData(data);
    }
    loadMentorshipData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        🧑‍🏫 AI Mentorship & Coaching Insights
      </h2>
      {mentorshipData ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Growth Index:</strong>{" "}
            {mentorshipData.mentorshipGrowthIndex}
          </p>
        </div>
      ) : (
        <p>Loading mentorship insights...</p>
      )}
    </div>
  );
}
