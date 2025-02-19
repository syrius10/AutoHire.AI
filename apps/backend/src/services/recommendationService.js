import OpenAI from "openai";
import { pool } from "../db";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Fetch candidate's recent activity and preferences
 */
const getCandidateActivity = async (candidateId) => {
    const { rows } = await pool.query(
        "SELECT searched_keywords, applied_jobs FROM candidate_activity WHERE candidate_id = $1",
        [candidateId]
    );
    return rows[0] || { searched_keywords: "", applied_jobs: [] };
};

/**
 * Generate AI-powered job recommendations
 */
export const generateJobRecommendatios = async (candidateId) => {
    const activity = await getCandidateActivity(candidateId);

    const prompt = `Suggest job roles based on these keywords: ${activity.searched_keywords}. Exclude jobs already applied to: ${activity.applied_jobs}. Provide concise results.`;

    const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-4",
    });

    return response.choices[0].message.content;
};