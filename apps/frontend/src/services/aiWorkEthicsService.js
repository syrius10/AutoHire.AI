// Fetch AI-powered work ethics compliance insights

export const fetchWorkEthicsCompliance = async () => {
  try {
    const response = await fetch("/api/ai-work-ethics/compliance");
    return await response.json();
  } catch (error) {
    console.error("Error fetching AI work ethics compliance data:", error);
    return null;
  }
};
