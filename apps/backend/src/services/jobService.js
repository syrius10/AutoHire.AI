import { pool } from "../db";

/**
 * Fetch job requirements based on job ID
 */
export const getJobRequirements = async (jobId) => {
    try {
        const { rows } = await pool.query(
            "SELECT required_skills FROM jobs WHERE id = $1",
            [jobId]
        );

        if (!rows.length) {
            throw new Error("Job not found");
        }

        // Convert the database result into an array of skills
        const getJobRequirements = rows[0].requiredSkills.split(",");

        return getJobRequirements.map((skill) => skill.trim());
    } catch (error) {
        console.error("Error fetching job requirements: ", error);
        return [];
    }
};