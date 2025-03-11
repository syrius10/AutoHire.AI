import axios from "axios";

const API_URL = "http://localhost:5001/api/skill-gap";

// ✅ Analyze Resume Skills Against Job Description
export const analyzeResumeSkills = async (resume, jobDescription) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, {
      resume,
      job_description: jobDescription,
    });
    return response.data;
  } catch (error) {
    console.error("Error analyzing resume skills: ", error);
    return { similarity_score: 0 };
  }
};

// ✅ Get Personalized Training Recommendations
export const getTrainingRecommendations = async (missingSkills) => {
  try {
    const response = await axios.post(`${API_URL}/recommendations`, {
      missingSkills,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching training recommendations: ", error);
    return { coursera: [], udemy: [] };
  }
};
