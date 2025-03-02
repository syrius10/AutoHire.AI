import axios from "axios";

// Fetches AI-powered role optimization insights

/**
 * Fetch AI-powered role optimization insights.
 */
export const fetchOptimizedRole = async (roleData) => {
  try {
    const response = await axios.post("/api/dynamic-role/optimize", roleData);
    return response.data;
  } catch (error) {
    console.error("Error fetching optimized role:", error);
    throw new Error("Failed to fetch AI-powered job role optimization.");
  }
};
