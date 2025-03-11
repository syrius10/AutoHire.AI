// Calls AI for real-time quantum workforce forecasting.

export async function fetchQuantumWorkforceForecast() {
  const response = await fetch("/api/quantum-workforce-forecast/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      economicGrowth: 1.1,
      aiAdoption: 0.9,
      hiringRate: 1.0,
    }),
  });

  return response.json();
}
