import axios from "axios";

// Fetches AI-powered virtual workspace insights.

export const fetchMetaverseWorkspaces = async () => {
  try {
    const response = await axios.get("/api/metaverse-workspaces/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching metaverse workspaces:", error);
    return null;
  }
};
