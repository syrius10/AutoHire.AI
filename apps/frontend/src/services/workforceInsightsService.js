import axios from "axios";

/**
 * Fetch workforce insights from backend.
 */
export const fetchWorkforceInsights = async () => {
    const response = await axios.get("/api/workforce/insights");
    return response.data;
};

/**
 * Fetch attrition risk from backend.
 */
export const fetchAttritionRisk = async () => {
    const response = await axios.post("/api/workforce/attrition", data);
    return response.data;
};

/**
 * Fetch diversity insights from backend.
 */
export const fetchDiversityInsights = async () => {
    const response = await axios.post("/api/workforce/diversity", data);
    return response.data;
};

// ✅ Fetch workforce cost forecast
export const getWorkforceCostForecast = async (params) => {
    try {
      const response = await axios.post("/api/workforce-cost/forecast", params);
      return response.data;
    } catch (error) {
      console.error("Error fetching workforce cost forecast:", error);
      return null;
    }
};
  
  // ✅ Fetch hiring efficiency analysis
  export const getEfficiencyAnalysis = async (params) => {
    try {
      const response = await axios.post("/api/efficiency-analysis/analyze", params);
      return response.data;
    } catch (error) {
      console.error("Error fetching efficiency analysis:", error);
      return null;
    }
};