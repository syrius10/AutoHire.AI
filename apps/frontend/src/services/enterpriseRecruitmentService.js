import axios from "axios";

// Automates large-scale candidate screening.

export const screenCandidates = async (candidates) => {
  try {
    const response = await axios.post("/api/enterprise-recruitment/screen", { candidates });
    return response.data;
  } catch (error) {
    console.error("Error screening candidates:", error);
    return { error: "Failed to screen candidates." };
  }
};
