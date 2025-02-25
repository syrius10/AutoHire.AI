import axios from "axios";
export const fetchHighPotentialLeaders = async () => {
  const response = await axios.post("/api/high-potential-leaders/identify");
  return response.data;
};
