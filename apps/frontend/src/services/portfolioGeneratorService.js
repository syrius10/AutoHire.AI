import axios from "axios";

// Retrieves AI-generated portfolios

export const fetchPortfolio = async (name, expertise, projects) => {
  const response = await axios.post("/api/portfolio-generator", {
    name,
    expertise,
    projects,
  });
  return response.data;
};
