import axios from "axios";

const API_URL = "http://localhost:5001/api/ab-testing";

// ✅ Assign A/B Test Group for Job Postings
export const assignJobPostType = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/assign`, {
      params: { userId },
    });
    return response.data.postType;
  } catch (error) {
    console.error("Error assigning A/B test group: ", error);
    return "Manual"; // Default to manual posting if API fails
  }
};
