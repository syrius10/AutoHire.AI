import OpenAI from "openai";
import { pool } from "../db";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Generate AI-optimized recruiter message
 */
export const generateRecruiterMessage = async (recruiterName, candidateName, jobTitle) => {
    const prompt = `Generate a personalized message from recruiter ${recruiterName} to candidate ${candidateName} about applying for ${jobTitle}. Keep it engaging and direct.`;

    const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-4",
    });

    return response.choices[0].message.content;
};