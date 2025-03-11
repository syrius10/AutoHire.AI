// Calls AI for job market analytics

export const fetchJobMarketTrends = async () => {
  const response = await fetch("/api/ai-job-market-analysis/trends");
  return response.json();
};
