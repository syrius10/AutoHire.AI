export const assignCareerPathVersion = (userId) => {
    return Math.random() > 0.5 ? "AI-enhanced": "Basic";    // 50% A/B split
};