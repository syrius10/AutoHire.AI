import axios from "axios";

export const fetchEmployerCandidateInteractions = async () => {
  try {
    const response = await axios.get("/api/employer-candidate/interactions");
    return response.data;
  } catch (error) {
    console.error("Error fetching employer-candidate interactions:", error);
    return [];
  }
};
