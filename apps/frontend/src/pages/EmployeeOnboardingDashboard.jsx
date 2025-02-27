import React, { useState, useEffect } from "react";
import { fetchOnboardingProgress } from "../services/employeeOnboardingService";

// AI-driven onboarding automation & progress

export default function EmployeeOnboardingDashboard() {
  const [onboardingData, setOnboardingData] = useState(null);

  useEffect(() => {
    async function loadOnboarding() {
      try {
        const data = await fetchOnboardingProgress();
        setOnboardingData(data);
      } catch (error) {
        console.error("Error fetching onboarding data:", error);
      }
    }
    loadOnboarding();
  }, []);

  return (
    <div>
      <h2>Employee Onboarding Progress</h2>
      {onboardingData ? (
        <pre>{JSON.stringify(onboardingData, null, 2)}</pre>
      ) : (
        <p>Loading onboarding details...</p>
      )}
    </div>
  );
}
