import React, { useState, useEffect } from "react";
import { fetchGigRecommendations } from "../services/gigMatchingService";

// Displays AI-driven gig opportunity recommendations

export default function GigMatchingDashboard() {
  const [gigData, setGigData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchGigRecommendations();
        setGigData(data);
      } catch (error) {
        console.error("Error fetching gig recommendations:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Gig Opportunity Recommendations</h1>
      {loading ? (
        <p>Loading gigs...</p>
      ) : (
        <pre>{JSON.stringify(gigData, null, 2)}</pre>
      )}
    </div>
  );
}
