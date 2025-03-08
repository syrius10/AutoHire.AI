// Fetches AI-driven full automation insights.

export async function fetchAutomationInsights() {
    try {
      const response = await fetch("/api/zero-manual-work/automate");
      return await response.json();
    } catch (error) {
      console.error("Error fetching automation insights:", error);
      return null;
    }
  }
  