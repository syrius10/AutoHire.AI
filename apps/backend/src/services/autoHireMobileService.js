import { pool } from "../db";

/**
 * ✅ Fetch jobs for the mobile app
 */
export const getMobileJobs = async () => {
  try {
    const result = await pool.query(
      "SELECT * FROM jobs WHERE is_active = true",
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching jobs for mobile: ", error);
    throw new Error("Failed to fetch jobs.");
  }
};

/**
 * ✅ Apply for a job via the mobile app
 */
export const applyForJobMobile = async (userId, jobId) => {
  try {
    await pool.query(
      "INSERT INTO job_applications (user_id, job_id) VALUES ($1, $2)",
      [userId, jobId],
    );
    return { message: "Job application submitted successfully." };
  } catch (error) {
    console.error("Error applying for job via mobile: ", error);
    throw new Error("Failed to apply for job.");
  }
};

/**
 * ✅ Fetch user's job applications
 */
export const getUserApplications = async (userId) => {
  try {
    const result = await pool.query(
      "SELECT * FROM job_applications WHERE user_id = $1",
      [userId],
    );
    return result.rows;
  } catch (error) {
    console.error("Error fetching user applications: ", error);
    throw new Error("Failed to fetch applications.");
  }
};
