import axios from "axios";

export const fetchRestructuringImpact = async (data) => {
  const response = await axios.post("/api/restructuring-impact/impact", data);
  return response.data;
};
