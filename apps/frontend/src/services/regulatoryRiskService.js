import axios from "axios";

// Assess regulatory risk based on region, compliance score, and past violations

export const assessRegulatoryRisk = async (region, complianceScore, pastViolations) => {
    try {
        const response = await axios.post("http://localhost:5001/api/regulatory-risk/assess", {
            region,
            complianceScore,
            pastViolations,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching regulatory risk assessment:", error);
        throw new Error("Failed to assess regulatory risk.");
    }
};
