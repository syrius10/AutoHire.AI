import { useEffect, useState } from "react";
import { fetchCareerPath } from "../services/careerPathService";

// ✅ CareerPathDashboard.jsx → AI-driven career trajectory insights.

export default function CareerPathDashboard() {
  const [careerPath, setCareerPath] = useState([]);

  useEffect(() => {
    async function loadCareerPath() {
      const data = await fetchCareerPath();
      setCareerPath(data);
    }
    loadCareerPath();
  }, []);

  return (
    <div>
      <h1>Career Path Insights</h1>
      <ul>
        {careerPath.map((step) => (
          <li key={step.id}>{step.name}</li>
        ))}
      </ul>
    </div>
  );
}
