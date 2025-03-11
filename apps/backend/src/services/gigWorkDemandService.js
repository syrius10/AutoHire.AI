import axios from "axios";

// Calls AI for gig work demand forecasting

export const getGigDemand = async () => {
  try {
    const response = await axios.get("http://localhost:5048/demand");
    return response.data;
  } catch (error) {
    console.error("Error in fetching gig demand:", error);
    return { error: "Failed to retrieve gig demand insights." };
  }
};
