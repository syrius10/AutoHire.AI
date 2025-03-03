import { useEffect, useState } from "react";
import { fetchHolographicMeetings } from "../services/holographicMeetingsService";

// AI-driven holographic meeting automation.

export default function HolographicMeetingsDashboard() {
  const [meetings, setMeetings] = useState(null);

  useEffect(() => {
    async function loadData() {
      const data = await fetchHolographicMeetings();
      setMeetings(data);
    }
    loadData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💡 Holographic Meetings</h2>
      {meetings ? (
        <div className="mt-4 border p-4 rounded">
          <pre>{JSON.stringify(meetings, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading holographic meeting insights...</p>
      )}
    </div>
  );
}
