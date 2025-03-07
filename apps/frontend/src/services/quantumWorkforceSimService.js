// Retrieves AI-driven quantum workforce simulation insights.

export async function fetchQuantumWorkforceSim() {
    const response = await fetch("/api/quantum-workforce-sim/simulate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ workforceFactors: [0.8, 0.9, 1.2] }),
    });
  
    return response.json();
  }
  