import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateJobDescription = async (jobTitle) => {
  try {
    const response = await openai.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `Generate a professional job description for the role: ${jobTitle}`,
        },
      ],
      max_tokens: 250,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error with OpenAI API: ", error);
    throw new Error("AI job description gerenration failed.");
  }
};
