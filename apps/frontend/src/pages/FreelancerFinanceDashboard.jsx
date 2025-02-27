import React, { useState, useEffect } from "react";
import { fetchIncomeForecast } from "../services/freelancerFinanceService";

// AI-based financial planning & income forecasting

export default function FreelancerFinanceDashboard() {
  const [financeData, setFinanceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchIncomeForecast();
        setFinanceData(data);
      } catch (error) {
        console.error("Error fetching financial forecast:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Freelancer Financial Planning</h1>
      {loading ? <p>Loading financial insights...</p> : <pre>{JSON.stringify(financeData, null, 2)}</pre>}
    </div>
  );
}
