import { useEffect, useState } from "react";
import { fetchJobRotationRecommendations } from "../services/internalJobRotationService";

export default function InternalJobRotationDashboard() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        const data = await fetchJobRotationRecommendations(
          "12345",
          "Software Engineer",
          ["JavaScript", "React"],
          3,
        );
        setRecommendations(data);
      } catch (error) {
        console.error("Error fetching job rotation recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRecommendations();
  }, []);

  return (
    <div className="dashboard">
      <h2>Internal Job Rotation Insights</h2>
      {loading && <p>Loading recommendations...</p>}
      {!loading && recommendations.length > 0 && (
        <ul>
          {recommendations.map((rec) => (
            <li key={rec.id}>{rec}</li>
          ))}
        </ul>
      )}
      {!loading && recommendations.length === 0 && <p>No recommendations available.</p>}
    </div>
  );
}
