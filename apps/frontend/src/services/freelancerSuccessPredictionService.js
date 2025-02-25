import axios from "axios";

// Retrieves AI-driven freelancer success predictions

export const fetchFreelancerSuccess = async () => {
    try {
        const response = await axios.get("/api/freelancer-success-prediction");
        return response.data;
    } catch (error) {
        console.error("Error fetching freelancer success predictions:", error);
        return [];
    }
};
