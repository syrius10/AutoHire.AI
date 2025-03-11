import axios from "axios";

export const fetchSkillsGapAnalysis = async (data) => {
  const response = await axios.post(
    "/api/enterprise-skills-gap/skills-gap",
    data,
  );
  return response.data;
};
