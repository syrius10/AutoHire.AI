import axios from "axios";

// 🔹 Identifies high-potential employees for leadership roles

export const getHighPotentialLeaders = async (data) => {
  try {
    const response = await axios.post("http://localhost:5042/high-potential-leaders", data);
    return response.data;
  } catch (error) {
    console.error("Error identifying high-potential leaders:", error);
    return { error: "Failed to fetch high-potential leaders data." };
  }
};
