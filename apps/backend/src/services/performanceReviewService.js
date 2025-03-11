import axios from "axios";

// AI-powered performance reviews

/**
 * Calls AI for employee performance review analysis.
 */
export const generatePerformanceReview = async (employeeId, reviewData) => {
  try {
    const response = await axios.post(
      "http://localhost:5038/analyze_performance",
      {
        employee_id: employeeId,
        review_data: reviewData,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error in performance review:", error);
    throw new Error("Performance review analysis failed.");
  }
};
