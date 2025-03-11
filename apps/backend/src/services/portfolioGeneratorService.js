import axios from "axios";

// Fetches AI-generated portfolios & skill demos

/**
 * Calls AI model to generate an AI-powered portfolio
 */
export const generatePortfolio = async (name, expertise, projects) => {
  try {
    const response = await axios.post(
      "http://localhost:5052/generate-portfolio",
      {
        name,
        expertise,
        projects,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error generating portfolio:", error);
    throw new Error("Portfolio generation failed.");
  }
};
