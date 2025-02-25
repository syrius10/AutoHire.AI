import axios from "axios";

export const fetchEscrowStatus = async () => {
    try {
        const response = await axios.get("/api/smart-escrow/process");
        return response.data;
    } catch (error) {
        console.error("Error fetching escrow status:", error);
        return [];
    }
};
