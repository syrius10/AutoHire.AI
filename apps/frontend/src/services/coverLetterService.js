import axios from "axios";

// Calls AI for personalized cover letters

export const fetchCoverLetter = async (candidateName, jobTitle, companyName, skills) => {
  const response = await axios.post("/api/cover-letter", {
    candidateName,
    jobTitle,
    companyName,
    skills,
  });
  return response.data;
};
