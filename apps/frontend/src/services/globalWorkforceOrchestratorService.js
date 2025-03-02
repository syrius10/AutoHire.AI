import axios from "axios";

// Displays AI-powered workforce orchestration insights.

export const fetchWorkforceAllocation = async (region, demand, supply) => {
  const response = await axios.post("/api/global-workforce/orchestration", {
    region,
    demand,
    supply,
  });
  return response.data;
};
