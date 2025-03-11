import axios from "axios";

const API_URL = "http://localhost:5001/api/analytics";

export const getJobCount = async () => {
  const response = await axios.get(`${API_URL}/jobs-count`);
  return response.data;
};

export const getApplicationCount = async () => {
  const response = await axios.get(`${API_URL}/applications-count`);
  return response.data;
};

export const getTopSkills = async () => {
  const response = await axios.get(`${API_URL}/top-skills`);
  return response.data;
};

/**
 * Fetch candidate engagement statistics from the backend.
 */
export const getEngagementStats = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/analytics/engagement`);
    if (!response.ok) throw new Error("Failed to fetch engagement stats");

    return await response.json();
  } catch (error) {
    console.error("Error fetching engagement stats:", error);
    return [];
  }
};
