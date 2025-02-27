import axios from "axios";

// Generates AI-personalized cover letters

/**
 * Calls AI model to generate a personalized cover letter
 */
export const generateCoverLetter = async (candidateName, jobTitle, companyName, skills) => {
  try {
    const response = await axios.post("http://localhost:5053/generate-cover-letter", {
      candidateName,
      jobTitle,
      companyName,
      skills,
    });
    return response.data;
  } catch (error) {
    console.error("Error generating cover letter:", error);
    throw new Error("Cover letter generation failed.");
  }
};
