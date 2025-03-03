import axios from "axios";

// Handles DAO company management.

export const fetchCompanyStatus = async () => {
  const response = await axios.get("/api/decentralized-company/status");
  return response.data;
};

export const proposeProject = async (project) => {
  const response = await axios.post("/api/decentralized-company/propose", project);
  return response.data;
};
