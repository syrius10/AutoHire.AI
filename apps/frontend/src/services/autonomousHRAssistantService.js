import axios from "axios";

// Calls AI for HR automation & talent management.

export const askHRAssistant = async (query) => {
  const response = await axios.post("/api/hr-assistant/query", { query });
  return response.data;
};
