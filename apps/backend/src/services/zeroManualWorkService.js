import ZeroManualWorkAI from "../../ai-services/zeroManualWorkAI.js";

// Calls AI model for fully automated workforce operations.

export async function automateWorkforceOperations() {
    const ai = new ZeroManualWorkAI();
    return ai.automate_workforce_operations();
}
