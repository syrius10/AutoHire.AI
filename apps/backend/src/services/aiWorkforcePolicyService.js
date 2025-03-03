import axios from "axios";

// Calls AI model to recommend workforce policy based on industry type, automation level, and compliance score.

export const getWorkforcePolicy = async (industryType, automationLevel, complianceScore) => {
    try {
        const response = await axios.post("http://localhost:5116/recommend-policy", {
            industry_type: industryType,
            automation_level: automationLevel,
            compliance_score: complianceScore,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching workforce policy recommendation:", error);
        throw new Error("Workforce policy recommendation failed.");
    }
};
