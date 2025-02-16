export const assignJobPostType = (userId) => {
    return Math.random() > 0.5 ? "AI-generated": "Manual"; // 50% A/B split
};