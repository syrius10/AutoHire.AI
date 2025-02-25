import axios from "axios";

// Fetches AI-powered freelancer-job matches

export const matchFreelancers = async (freelancerData) => {
    try {
        const response = await axios.post("http://localhost:5047/match", freelancerData);
        return response.data;
    } catch (error) {
        console.error("Error in matching freelancers:", error);
        return { error: "Failed to match freelancers." };
    }
};
