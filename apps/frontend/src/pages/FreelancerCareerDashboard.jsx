import React, { useState, useEffect } from "react";
import { fetchCareerRecommendations } from "../services/freelancerCareerService";

// AI-powered career management tools for freelancers

export default function FreelancerCareerDashboard() {
  const [careerData, setCareerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCareerRecommendations();
        setCareerData(data);
      } catch (error) {
        console.error("Error fetching career recommendations:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Freelancer Career Management</h1>
      {loading ? (
        <p>Loading career insights...</p>
      ) : (
        <pre>{JSON.stringify(careerData, null, 2)}</pre>
      )}
    </div>
  );
}
