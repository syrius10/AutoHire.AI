import axios from "axios";

// Fetches AI-driven onboarding progress

export const fetchOnboardingProgress = async () => {
  try {
    const response = await axios.get("/api/employee-onboarding/progress");
    return response.data;
  } catch (error) {
    console.error("Error fetching onboarding progress:", error);
    throw error;
  }
};
