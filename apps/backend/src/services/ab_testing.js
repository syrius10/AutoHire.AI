export const getApplicationType = (userId) => {
    return Math.random() > 0.5 ? "gamified" : "traditional";    // 50% A/B split
};