import axios from "axios";

// Calls AI model for personalized well-being recommendations

/**
 * Calls AI model for personalized well-being recommendations.
 */
export const getWellBeingPlan = async (
  workHours,
  workload,
  jobSatisfaction,
  stressLevel,
) => {
  try {
    const response = await axios.post(
      "http://localhost:5075/predict_well_being",
      {
        work_hours: workHours,
        workload,
        job_satisfaction: jobSatisfaction,
        stress_level: stressLevel,
      },
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching well-being plan:", error);
    throw new Error("Well-being plan generation failed.");
  }
};
