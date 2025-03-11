import nodemailer from "nodemailer";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Generate AI-powered engagement email based on candidate behavior
 */
export const generateEngagementEmail = async (
  candidateName,
  jobPreferences,
) => {
  const prompt = `Write a friendly, personalized email inviting ${candidateName} to apply for jobs related to ${jobPreferences}. Keep it concise, professional and engaging.`;

  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-4",
  });

  return response.choices[0].message.content;
};

/**
 * Send personalized AI-generated email to candidate
 */
export const sendEngagementEmail = async (
  candidateEmail,
  candidateName,
  jobPreferences,
) => {
  const emailBody = await generateEngagementEmail(
    candidateName,
    jobPreferences,
  );

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: candidateEmail,
    subject: `Exclusive Job Opportunities for You, ${candidateName}`,
    text: emailBody,
  });

  return { success: true, message: "Email sent successfully!" };
};
