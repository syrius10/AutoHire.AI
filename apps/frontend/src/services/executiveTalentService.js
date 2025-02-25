import axios from "axios";
export const fetchExecutiveTalent = async () => {
  const response = await axios.post("/api/executive-talent/recommend");
  return response.data;
};
