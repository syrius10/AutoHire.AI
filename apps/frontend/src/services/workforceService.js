import axios from "axios";

export const getWorkforceForecast = async (inputData) => {
  try {
    const response = await axios.post("/api/workforce/forecast", inputData);
    return response.data;
  } catch (error) {
    console.error("Error fetching workforce forecast:", error);
    return null;
  }
};