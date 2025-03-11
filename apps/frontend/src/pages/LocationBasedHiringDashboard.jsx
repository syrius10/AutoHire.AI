import { useEffect, useState } from "react";
import { fetchLocationBasedJobs } from "../services/locationBasedHiringService";

// Displays AI-driven real-time hiring opportunities based on location.

const LocationBasedHiringDashboard = () => {
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchLocationBasedJobs();
      setJobs(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📍 Location-Based Hiring</h2>
      {jobs ? (
        <pre className="mt-4 border p-4 rounded bg-gray-100">
          {JSON.stringify(jobs, null, 2)}
        </pre>
      ) : (
        <p>Loading hiring opportunities...</p>
      )}
    </div>
  );
};

export default LocationBasedHiringDashboard;
