import axios from "axios";
export const fetchSuccessionPlan = async () => {
  const response = await axios.post("/api/leadership-succession/plan");
  return response.data;
};
