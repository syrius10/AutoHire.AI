import axios from "axios";

// Displays fraudulent profile risks.

export const fetchFraudulentProfiles = async () => {
  try {
    const response = await axios.get("/api/fraudulent-profile-detection");
    return response.data;
  } catch (error) {
    console.error("Error fetching fraudulent profile data:", error);
    return null;
  }
};
