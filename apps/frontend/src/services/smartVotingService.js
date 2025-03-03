import axios from "axios";

// Handles AI-powered decentralized voting.

export const fetchProposalResults = async () => {
  const response = await axios.get("/api/smart-voting/results");
  return response.data;
};
