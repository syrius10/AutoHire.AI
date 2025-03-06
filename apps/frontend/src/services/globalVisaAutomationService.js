import axios from "axios";

// Calls AI for work visa automation & compliance tracking

export const fetchVisaAutomation = async () => {
  try {
    const response = await axios.get("/api/global-visa-automation/process");
    return response.data;
  } catch (error) {
    console.error("Error fetching work visa automation insights:", error);
    return null;
  }
};
