import axios from "axios";

const API_URL = "http://localhost:5001/api/integrations";

export const fetchLinkedInProfile = async (profileId) => {
  const response = await axios.get(`${API_URL}/linkedin/${profileId}`);
  return response.data;
};

export const fetchGitHubContributions = async (username) => {
  const response = await axios.get(`${API_URL}/github/${username}`);
  return response.data;
};

export const scheduleGoogleCalendarEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/calendar/google`, eventData);
  return response.data;
};
