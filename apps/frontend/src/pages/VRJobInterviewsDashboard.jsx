import { useEffect, useState } from "react";
import { fetchVRJobInterviews } from "../services/vrJobInterviewsService";

// AI-powered VR job interview system.

export default function VRJobInterviewsDashboard() {
  const [interviews, setInterviews] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchVRJobInterviews();
      setInterviews(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🎮 VR Job Interviews</h2>
      {interviews ? (
        <div className="mt-4 border p-4 rounded">
          <pre>{JSON.stringify(interviews, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading VR interview data...</p>
      )}
    </div>
  );
}
