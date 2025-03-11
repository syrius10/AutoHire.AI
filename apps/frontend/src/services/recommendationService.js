import axios from "axios";

const API_URL = "http://localhost:5001/api/recommendations";

export const getJobRecommendations = async (skills) => {
  const response = await axios.get(`${API_URL}/jobs`, { params: { skills } });
  return response.data;
};
