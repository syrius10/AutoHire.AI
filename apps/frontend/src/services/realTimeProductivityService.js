export const fetchProductivityInsights = async () => {
  try {
    const response = await fetch("/api/real-time-productivity/insights");
    const data = await response.json();
    return data.insights;
  } catch (error) {
    console.error("Error fetching productivity insights:", error);
    return "Error fetching insights.";
  }
};

export const fetchProductivityTips = async () => {
  try {
    const response = await fetch("/api/real-time-productivity/tips");
    const data = await response.json();
    return data.tips;
  } catch (error) {
    console.error("Error fetching productivity tips:", error);
    return "Error fetching tips.";
  }
};
