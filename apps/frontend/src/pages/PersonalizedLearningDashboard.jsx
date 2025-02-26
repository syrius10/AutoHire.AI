import { useEffect, useState } from "react";
import { fetchPersonalizedLearning } from "../services/personalizedLearningService";

// ✅ PersonalizedLearningDashboard.jsx → AI-powered learning recommendations.

export default function PersonalizedLearningDashboard() {
  const [learningPaths, setLearningPaths] = useState([]);

  useEffect(() => {
    async function loadLearningPaths() {
      const data = await fetchPersonalizedLearning();
      setLearningPaths(data);
    }
    loadLearningPaths();
  }, []);

  return (
    <div>
      <h1>Personalized Learning Paths</h1>
      <ul>
        {learningPaths.map((path, index) => (
          <li key={index}>{path}</li>
        ))}
      </ul>
    </div>
  );
}
