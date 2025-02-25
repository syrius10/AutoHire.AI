import axios from "axios";

// Fetches AI-powered contract risk insights

export const fetchContractRisk = async () => {
    try {
        const response = await axios.get("/api/contract-risk-assessment");
        return response.data;
    } catch (error) {
        console.error("Error fetching contract risk assessments:", error);
        return [];
    }
};
