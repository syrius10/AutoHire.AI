import { useEffect, useState } from "react";
import { fetchGigMatches } from "../services/gigMarketplaceService";

// AI-powered gig work marketplace.

export default function GigMarketplaceDashboard() {
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    async function loadGigs() {
      const data = await fetchGigMatches();
      setGigs(data);
    }
    loadGigs();
  }, []);

  return (
    <div>
      <h1>🔥 AI-Powered Gig Marketplace</h1>
      <ul>
        {gigs.length > 0 ? (
          gigs.map((gig) => (
            <li key={gig.id}>
              {gig.title} - {gig.rate} USD/hour
            </li>
          ))
        ) : (
          <p>Loading available gigs...</p>
        )}
      </ul>
    </div>
  );
}
