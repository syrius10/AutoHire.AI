import axios from "axios";

// Retrieves AI-powered workforce policy recommendations

export const fetchWorkforcePolicy = async (industryType, automationLevel, complianceScore) => {
    try {
        const response = await axios.post("/api/workforce-policy/recommend", {
            industryType,
            automationLevel,
            complianceScore,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching workforce policy:", error);
        return { policyRecommendation: "Error retrieving data" };
    }
};
