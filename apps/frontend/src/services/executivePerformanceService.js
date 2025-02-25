import axios from "axios";
export const fetchExecutivePerformance = async () => {
  const response = await axios.post("/api/executive-performance/performance");
  return response.data;
};
