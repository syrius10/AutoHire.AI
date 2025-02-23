import axios from "axios";

/**
 * ✅ Fetch available jobs for the mobile app.
 */
export const fetchJobs = async () => {
  try {
    const response = await axios.get("https://autohire.ai/api/mobile/jobs");
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

/**
 * ✅ Apply for a job via mobile app.
 */
export const applyForJob = async (userId, jobId) => {
  try {
    const response = await axios.post("https://autohire.ai/api/mobile/apply", { userId, jobId });
    return response.data;
  } catch (error) {
    console.error("Error applying for job:", error);
    return { error: "Failed to apply." };
  }
};
