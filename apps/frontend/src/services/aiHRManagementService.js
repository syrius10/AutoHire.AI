// Fetches AI-driven HR automation insights.

export const fetchHRAutomationInsights = async () => {
    try {
      const response = await fetch("/api/ai-hr-management/automate", { method: "POST" });
      return await response.json();
    } catch (error) {
      console.error("Error fetching HR automation insights:", error);
      return { error: "Failed to retrieve HR automation data." };
    }
  };
  