// Fetches AI-powered quantum hiring & performance optimization data.

export async function fetchQuantumHiringPerformance() {
  const response = await fetch("/api/quantum-hiring-performance/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      experience: 5,
      aiSkills: 85,
      softSkills: 90,
      educationLevel: 4,
    }),
  });

  return response.json();
}
