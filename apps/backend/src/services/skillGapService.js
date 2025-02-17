export const calculateSkillGap = (requiredSkills, candidateSkills) => {
    const missingSkills = requiredSkills.filter(skill => !candidateSkills.includes(skill));
    const gapScore = (missingSkills.length / requiredSkills.length) * 100;

    return { missingSkills, gapScore: Math.round(gapScore) };
};