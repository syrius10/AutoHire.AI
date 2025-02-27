import React, { useState, useEffect } from "react";
import { fetchPerformanceReview } from "../services/performanceReviewService";

// AI-powered performance tracking

export default function PerformanceReviewDashboard() {
  const [reviewData, setReviewData] = useState(null);

  useEffect(() => {
    async function loadPerformanceData() {
      try {
        const data = await fetchPerformanceReview();
        setReviewData(data);
      } catch (error) {
        console.error("Error fetching performance data:", error);
      }
    }
    loadPerformanceData();
  }, []);

  return (
    <div>
      <h2>Employee Performance Review</h2>
      {reviewData ? (
        <pre>{JSON.stringify(reviewData, null, 2)}</pre>
      ) : (
        <p>Loading performance review...</p>
      )}
    </div>
  );
}
