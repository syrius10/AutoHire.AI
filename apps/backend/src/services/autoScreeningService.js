import { pool } from "../db";
import { analyzeResumeSkills } from "./skillGapService";
import { getJobRequirements } from "./jobService";

/**
 * Automatically screen a candidate based on job fit
 */
export const autoScreenCandidate = async (candidateId, jobId) => {
    try {
        // Fetch candidate resume data
        const { rows: candidate } = await pool.query("SELECT * FROM candidates WHERE id = $1", [candidateId]);
        if (!candidate.length) throw new Error("Candidate not found");

        // Analyze resume skills
        const skills = await analyzeResumeSkills(candidate[0], resume_text);

        // Fetch job requirements
        const jobReqs = await getJobRequirements(jobId);

        // Compute match score (simple percentage match)
        const matchScore = (skills.filter(skill => jobReqs.includes(skill)).length / jobReqs.length) * 100;

        return { candidateId, jobId, matchScore };
    } catch (error) {
        console.error("Error auto-screening candidate: ", error);
        return { error: "Failed to screen candidate" };
    }
};