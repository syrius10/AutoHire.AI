import axios from "axios";

export const fetchEmployeeEngagement = async () => {
  try {
    const response = await axios.post("/api/engagement/analyze", {
      text: "Employee feedback and sentiment data...",
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching employee engagement:", error);
    return { engagementScore: "Unknown", sentiment: "N/A" };
  }
};
