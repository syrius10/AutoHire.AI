import axios from "axios";

/**
 * Calls the backend API to auto-screen a candidate based on job requirements
 * @param {string} candidateId - The ID of the candidate
 * @param {string} jobId - The ID of the job
 * @returns {Promise<object>} - Match score and candidate details
 */
export const autoScreenCandidate = async (candidateId, jobId) => {
    try {
        const response = await axios.post("/api/auto-screening/screen", { candidateId, jobId });
        return response.data;
    } catch (error) {
        console.error("Error auto-screening candidate: ", error);
        return { error: "Failed to auto-screen candidate "};
    }
};