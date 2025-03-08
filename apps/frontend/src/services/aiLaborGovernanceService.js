//  Retrieve AI-driven labor governance compliance tracking data

export const fetchLaborGovernanceCompliance = async () => {
    try {
      const response = await fetch("/api/ai-labor-governance/compliance");
      return await response.json();
    } catch (error) {
      console.error("Error fetching AI labor governance compliance data:", error);
      return null;
    }
  };
  