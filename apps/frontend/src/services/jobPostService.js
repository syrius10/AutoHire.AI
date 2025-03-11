import axios from "axios";

const API_URL = "http://localhost:5001/api/job-optimization";

// ✅ Analyze Job Posting Effectiveness
export const analyzeJobPost = async (jobPost) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, {
      job_post: jobPost,
    });
    return response.data;
  } catch (error) {
    console.error("Error analyzing job post: ", error);
    return { analysis: "Failed to analyze job post." };
  }
};

// ✅ Optimize Job Post for SEO & Engagement
export const optimizeForSEO = async (jobPost) => {
  try {
    const response = await axios.post(`${API_URL}/seo`, { job_post: jobPost });
    return response.data;
  } catch (error) {
    console.error("Error optimizing job post for SEO: ", error);
    return { optimizedText: jobPost, keywords: [], metadata: {} };
  }
};
