import axios from "axios";

export const fetchRetentionRisk = async (data) => {
  const response = await axios.post("/api/post-acquisition-retention/retention-risk", data);
  return response.data;
};
