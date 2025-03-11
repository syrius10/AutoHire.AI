export const provideTip = async (skill) => {
  const tips = {
    general: "Stay focused and eliminate distractions.",
    leadership: "Encourage feedback and inspire your team.",
    coding: "Write modular, well-documented code.",
  };

  return tips[skill] || "Keep learning and improving!";
};

export const assessPerformance = async (productivityScore) => {
  if (productivityScore > 80) return "Excellent work! Keep going.";
  if (productivityScore >= 50)
    return "You're doing well! Improve time management.";
  return "Focus more and eliminate distractions.";
};
