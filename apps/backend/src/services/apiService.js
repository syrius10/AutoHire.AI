import { pool } from "../db";
import { analyzeResumeSkills } from "./skillGapService";

// ✅ Get AI-driven job matches for a candidate
export const getJobMatches = async (candidateId) => {
    try {
        const { rows } = await pool.query(
            "SELECT * FROM job_listings WHERE required_skills && (SELECT skills FROM candidates WHERE id = $1)",
            [candidateId]
        );
        return rows;
    } catch (error) {
        console.error("Error fetching job matches: ", error);
        throw new Error("Failed to fetch job matches");
    }
};

// ✅ Enrich candidate profile with AI
export const enrichCandidateProfile = async (candidateData) => {
    try {
        // Analyze skills from the candidate's resume
        const skills = analyzeResumeSkills(candidateData.resumeText);

        // Store enriched data in DB
        await pool.query(
            "UPDATE candidates SET skills = $1, experience = $2 WHERE id = $3",
            [skills, candidateData.experience, candidateData.id]  
        );

        return { ...candidateData, skills };
    } catch (error) {
        console.error("Error enriching candidate profile: ", error);
        throw new Error("Failed to enrich candidate profile");
    }
};