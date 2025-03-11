import axios from "axios";

// Predicts freelancer success probability

export const predictFreelancerSuccess = async (freelancerProfile) => {
  try {
    const response = await axios.post(
      "http://localhost:5049/predict",
      freelancerProfile,
    );
    return response.data;
  } catch (error) {
    console.error("Error in predicting freelancer success:", error);
    return { error: "Failed to analyze freelancer success." };
  }
};
