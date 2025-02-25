import axios from "axios";

export const fetchWorkforceIntegration = async (data) => {
  const response = await axios.post("/api/workforce-integration/analyze", data);
  return response.data;
};
