import axios from "axios";

// Fetches AI-driven workforce automation insights

export async function fetchAutonomousWorkforceData() {
  try {
    const response = await axios.get(
      "/api/autonomous-global-workforce/regulate",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching AI workforce data:", error);
    return { error: "Failed to load workforce data." };
  }
}
