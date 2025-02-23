import axios from "axios";

export const generateJobDescription = async (jobTitle) => {
    try {
        const response = await axios.post("/api/ai-job-description/generate", { jobTitle });
        return response.data.description;
    } catch (error) {
        console.error("Error generating job description: ", error);
        return "Failed to generate job description.";
    }
};