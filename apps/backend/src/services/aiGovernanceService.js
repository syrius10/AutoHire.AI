import axios from "axios";

// AI-powered workforce governance & compliance service

export async function enforceAIGovernance() {
    try {
        const response = await axios.get("http://localhost:5141/enforce-governance");
        return response.data;
    } catch (error) {
        console.error("Error in AI governance enforcement:", error);
        throw error;
    }
}
