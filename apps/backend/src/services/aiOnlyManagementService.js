import AIOnlyManagement from "../../ai-services/aiOnlyManagementAI.js";

// Automates AI-driven hiring, workforce management & company operations.

export async function evaluateAIHiring(skillMatchPercentage) {
    const ai = new AIOnlyManagement();
    return ai.evaluate_candidate(skillMatchPercentage);
}
