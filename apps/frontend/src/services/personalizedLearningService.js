import axios from "axios";

// ✅ personalizedLearningService.js → Calls AI for personalized learning.

export const fetchPersonalizedLearning = async () => {
  try {
    const response = await axios.get("/api/personalized-learning");
    return response.data;
  } catch (error) {
    console.error("Error fetching personalized learning:", error);
    return [];
  }
};
