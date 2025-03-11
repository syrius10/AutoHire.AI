import { useEffect, useState } from "react";
import { fetchSkillGapEnhancement } from "../services/skillGapEnhancementService";

// ✅ SkillGapEnhancementDashboard.jsx → AI-driven skill enhancement strategies.

export default function SkillGapEnhancementDashboard() {
  const [enhancements, setEnhancements] = useState([]);

  useEffect(() => {
    async function loadEnhancements() {
      const data = await fetchSkillGapEnhancement();
      setEnhancements(data);
    }
    loadEnhancements();
  }, []);

  return (
    <div>
      <h1>Skill Gap Enhancements</h1>
      <ul>
        {enhancements.map((enhancement) => (
          <li key={enhancement.id}>{enhancement.name}</li>
        ))}
      </ul>
    </div>
  );
}
