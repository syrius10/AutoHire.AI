import axios from "axios";

// Displays freelancer earnings predictions.

export const fetchEarningsForecast = async (data) => {
  const response = await axios.post("/api/earnings-forecast/forecast", data);
  return response.data;
};
