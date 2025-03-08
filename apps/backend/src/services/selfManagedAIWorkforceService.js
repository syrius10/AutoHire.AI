import SelfManagedAIWorkforce from "../../ai-services/selfManagedAIWorkforceAI.js";

// Provides AI-powered self-managing workforce intelligence.

export async function manageSelfAIWorkforce(performance, resourceUtilization, efficiency, errorRate) {
    const ai = new SelfManagedAIWorkforce();
    return ai.make_decision(performance, resourceUtilization, efficiency, errorRate);
}
