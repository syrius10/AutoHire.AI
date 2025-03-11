import { useEffect, useState } from "react";
import { fetchSkillTransitionPaths } from "../services/skillTransitionService";

export default function SkillTransitionDashboard() {
  const [transitions, setTransitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransitions = async () => {
      try {
        const data = await fetchSkillTransitionPaths(
          "12345",
          ["JavaScript", "React"],
          "Tech Lead",
        );
        setTransitions(data);
      } catch (error) {
        console.error("Error fetching skill transition paths:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTransitions();
  }, []);

  return (
    <div className="dashboard">
      <h2>Skill Transition Insights</h2>
      {loading && <p>Loading transition paths...</p>}
      {!loading && transitions.length > 0 && (
        <ul>
          {transitions.map((path) => (
            <li key={path.id}>{path.name}</li>
          ))}
        </ul>
      )}
      {!loading && transitions.length === 0 && <p>No transition paths available.</p>}
    </div>
  );
}
