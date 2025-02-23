import axios from "axios";

/**
 * ✅ Request a new API key
 */
export const requestAPIKey = async (userId, plan = "free") => {
  try {
    const response = await axios.post("/api/api-management/generate", { userId, plan });
    return response.data;
  } catch (error) {
    console.error("Error generating API key:", error);
    return { error: "Failed to generate API key." };
  }
};

/**
 * ✅ Revoke an existing API key
 */
export const revokeAPIKey = async (apiKey) => {
  try {
    const response = await axios.post("/api/api-management/revoke", { apiKey });
    return response.data;
  } catch (error) {
    console.error("Error revoking API key:", error);
    return { error: "Failed to revoke API key." };
  }
};

/**
 * ✅ Fetch API usage statistics
 */
export const getAPIUsageStats = async (userId) => {
  try {
    const response = await axios.get(`/api/api-management/usage/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching API usage:", error);
    return [];
  }
};
