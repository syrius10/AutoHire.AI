import axios from "axios";

// Retrieves competitor pricing insights.

export const fetchCompetitionAnalysis = async (level) => {
  const response = await axios.post("/api/competition-analysis/competitor-rates", { level });
  return response.data;
};
