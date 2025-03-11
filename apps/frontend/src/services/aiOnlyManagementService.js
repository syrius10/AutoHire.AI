// Retrieves AI-driven AI-only hiring & management analytics.

export async function fetchAIOnlyManagementData() {
  try {
    const response = await fetch("/api/ai-only-management/hiring", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ skillMatchPercentage: 88 }),
    });
    return await response.json();
  } catch (error) {
    console.error("Error fetching AI-only management data:", error);
    return null;
  }
}
