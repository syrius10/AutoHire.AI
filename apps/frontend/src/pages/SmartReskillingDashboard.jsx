import { useEffect, useState } from "react";
import { fetchReskillingSuggestions } from "../services/smartReskillingService";

// ✅ SmartReskillingDashboard.jsx → AI-generated reskilling suggestions.

export default function SmartReskillingDashboard() {
  const [reskillingOptions, setReskillingOptions] = useState([]);

  useEffect(() => {
    async function loadReskillingOptions() {
      const data = await fetchReskillingSuggestions();
      setReskillingOptions(data);
    }
    loadReskillingOptions();
  }, []);

  return (
    <div>
      <h1>Smart Reskilling Suggestions</h1>
      <ul>
        {reskillingOptions.map((option) => (
          <li key={option.id}>{option.name}</li>
        ))}
      </ul>
    </div>
  );
}
