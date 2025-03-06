import axios from "axios";

// Retrieves AI-driven cross-border job contracts

export const fetchCrossBorderContracts = async () => {
  try {
    const response = await axios.get("/api/cross-border-contracts/generate");
    return response.data;
  } catch (error) {
    console.error("Error fetching cross-border job contracts:", error);
    return null;
  }
};
