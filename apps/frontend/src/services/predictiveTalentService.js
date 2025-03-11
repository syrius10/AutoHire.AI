import axios from "axios";

// Fetches AI talent demand predictions.

export const fetchTalentForecast = async () => {
  try {
    const response = await axios.get("/api/talent/forecast");
    return response.data;
  } catch (error) {
    console.error("Error fetching talent forecast:", error);
    return null;
  }
};
