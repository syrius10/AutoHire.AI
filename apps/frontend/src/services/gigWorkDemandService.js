import axios from "axios";

// Calls AI for gig market demand analysis

export const fetchGigDemand = async () => {
    try {
        const response = await axios.get("/api/gig-work-demand");
        return response.data;
    } catch (error) {
        console.error("Error fetching gig work demand insights:", error);
        return [];
    }
};
