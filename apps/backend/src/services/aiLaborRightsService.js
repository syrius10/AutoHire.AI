import axios from "axios";

// AI-powered AI labor rights monitoring service

export async function monitorLaborRights() {
  try {
    const response = await axios.get(
      "http://localhost:5142/monitor-labor-rights",
    );
    return response.data;
  } catch (error) {
    console.error("Error in AI labor rights monitoring:", error);
    throw error;
  }
}
