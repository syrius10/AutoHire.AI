import axios from "axios";

export const fetchProjectRecommendations = async () => {
    try {
        const response = await axios.get("/api/project-recommendation/recommend");
        return response.data;
    } catch (error) {
        console.error("Error fetching project recommendations:", error);
        return [];
    }
};
