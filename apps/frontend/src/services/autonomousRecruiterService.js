import axios from "axios";

export const fetchCandidateScreeningResults = async () => {
  try {
    const response = await axios.get("/api/autonomous-recruiter/screening");
    return response.data;
  } catch (error) {
    console.error("Error fetching candidate screening results:", error);
    return [];
  }
};
