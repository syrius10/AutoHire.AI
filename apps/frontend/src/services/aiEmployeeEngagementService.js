// Fetches AI-powered employee engagement tracking.

export const fetchEngagementInsights = async () => {
  try {
    const response = await fetch("/api/ai-employee-engagement/suggest", {
      method: "POST",
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching engagement insights:", error);
    return { error: "Failed to retrieve engagement data." };
  }
};
