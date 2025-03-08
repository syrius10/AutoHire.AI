// Retrieve AI-powered workforce policy recommendations

export const fetchAutonomousPolicy = async () => {
    try {
      const response = await fetch("/api/ai-autonomous-policy/generate");
      return await response.json();
    } catch (error) {
      console.error("Error fetching AI workforce policy data:", error);
      return null;
    }
  };
  