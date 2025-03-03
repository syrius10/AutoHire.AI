import { useEffect, useState } from "react";
import { fetchCompanyStatus, proposeProject, allocateBudget } from "../services/decentralizedCompanyService";

// AI-powered decentralized company automation & self-management.

const DecentralizedCompanyDashboard = () => {
  const [companyStatus, setCompanyStatus] = useState(null);
  const [project, setProject] = useState({ name: "", budget: "", expectedOutcome: "" });

  useEffect(() => {
    fetchCompanyStatus().then(setCompanyStatus);
  }, []);

  const handleProposeProject = async () => {
    if (project.name && project.budget && project.expectedOutcome) {
      const response = await proposeProject(project);
      alert(`Project Proposed: ${response.name}`);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🏢 AI-Powered Decentralized Company</h2>
      <p>Status: {companyStatus ? companyStatus.status : "Loading..."}</p>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Propose a New Project</h3>
        <input type="text" placeholder="Project Name" onChange={(e) => setProject({ ...project, name: e.target.value })} />
        <input type="number" placeholder="Budget" onChange={(e) => setProject({ ...project, budget: e.target.value })} />
        <input type="text" placeholder="Expected Outcome" onChange={(e) => setProject({ ...project, expectedOutcome: e.target.value })} />
        <button onClick={handleProposeProject} className="mt-2 p-2 bg-blue-500 text-white">Propose</button>
      </div>
    </div>
  );
};

export default DecentralizedCompanyDashboard;
