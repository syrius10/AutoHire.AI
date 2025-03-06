export const provideTip = async (skill) => {
    const response = await fetch("/api/ai-work-coach/tip", {
      method: "POST",
      body: JSON.stringify({ skill }),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  };
  
  export const assessPerformance = async (productivityScore) => {
    const response = await fetch("/api/ai-work-coach/assess", {
      method: "POST",
      body: JSON.stringify({ productivityScore }),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  };
  