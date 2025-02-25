import React, { useEffect, useState } from "react";
import { fetchExecutivePerformance } from "../services/executivePerformanceService";

// Monitors executive performance predictions

const ExecutivePerformanceDashboard = () => {
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchExecutivePerformance();
      setPerformanceData(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h2>Executive Performance Insights</h2>
      <ul>
        {performanceData.map((exec, index) => (
          <li key={index}>
            {exec.name} - Success Score: {exec.performanceScore}/100
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExecutivePerformanceDashboard;
