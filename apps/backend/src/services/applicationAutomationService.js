import axios from "axios";

// Automates AI-driven job applications

/**
 * Calls AI to automate job applications
 */
export const autoApplyForJobs = async (
  candidateName,
  jobTitle,
  companyName,
  resume,
  coverLetter,
) => {
  try {
    const response = await axios.post("http://localhost:5054/apply-job", {
      candidateName,
      jobTitle,
      companyName,
      resume,
      coverLetter,
    });
    return response.data;
  } catch (error) {
    console.error("Error automating job application:", error);
    throw new Error("Job application automation failed.");
  }
};
