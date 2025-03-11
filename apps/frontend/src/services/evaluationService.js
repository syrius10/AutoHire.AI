import axios from "axios";

const API_URL = "http://localhost:5001/api/evaluate";

export const startEvaluation = async () => {
  const response = await axios.post(API_URL);
  return response.data;
};
