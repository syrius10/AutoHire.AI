import { useState } from "react";
import { fetchPortfolio } from "../services/portfolioGeneratorService";

// AI-driven portfolio creation & branding

export default function PortfolioGeneratorDashboard() {
  const [name, setName] = useState("");
  const [expertise, setExpertise] = useState("");
  const [projects, setProjects] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const handleGeneratePortfolio = async () => {
    const result = await fetchPortfolio(name, expertise, projects.split(","));
    setPortfolio(result.portfolio);
  };

  return (
    <div>
      <h2>AI-Generated Portfolio</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your Name"
      />
      <input
        value={expertise}
        onChange={(e) => setExpertise(e.target.value)}
        placeholder="Your Expertise"
      />
      <textarea
        value={projects}
        onChange={(e) => setProjects(e.target.value)}
        placeholder="List your projects (comma-separated)"
      />
      <button onClick={handleGeneratePortfolio}>Generate Portfolio</button>
      {portfolio && (
        <div>
          <h3>Your AI-Generated Portfolio</h3>
          <p>{portfolio}</p>
        </div>
      )}
    </div>
  );
}
