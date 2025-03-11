import axios from "axios";

// Automates job applications using AI

export const automateJobApplication = async (
  candidateName,
  jobTitle,
  companyName,
  resume,
  coverLetter,
) => {
  const response = await axios.post("/api/application-automation", {
    candidateName,
    jobTitle,
    companyName,
    resume,
    coverLetter,
  });
  return response.data;
};
