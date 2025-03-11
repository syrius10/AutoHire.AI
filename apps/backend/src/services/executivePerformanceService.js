import axios from "axios";

// 🔹 Fetches executive performance predictions

export const getExecutivePerformance = async (data) => {
  try {
    const response = await axios.post(
      "http://localhost:5041/executive-performance",
      data,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching executive performance insights:", error);
    return { error: "Failed to fetch executive performance data." };
  }
};
