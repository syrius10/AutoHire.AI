import axios from "axios";

const API_URL = "http://localhost:5001/api/interviews";
const AI_INTERVIEW_URL = "http://localhost:5005";
const AI_SENTIMENT_URL = "http://localhost:5017"; // Assuming Sprint 26 sentiment analysis port
const AI_VIDEO_ANALYSIS_URL = "http://localhost:5006"; // Assuming video analysis service

export const scheduleInterview = async (data) => {
  return axios.post(`${API_URL}/schedule`, data);
};

export const fetchInterviews = async () => {
  return axios.get(API_URL);
};

export const analyzeInterview = async (file) => {
  const formData = new FormData();
  formData.append("audio", file);
  const response = await axios.post(`${API_URL}/analyze`, formData);
  return response.data;
};

export const fetchInterviewInsights = async (interviewId) => {
  const response = await axios.get(`${API_URL}/insights/${interviewId}`);
  return response.data;
};

/**
 * Sends interview transcript for AI Q&A analysis.
 * @param {string} transcript - Candidate's interview transcript.
 * @returns {Promise<Object>} - AI analysis with Q&A insights.
 */
export const analyzeInterviewQnA = async (transcript) => {
  try {
    const response = await axios.post(`${AI_INTERVIEW_URL}/analyze-interview`, {
      transcript,
    });

    return response.data; 
  } catch (error) {
    console.error("Error analyzing interview QnA: ", error);
    throw new Error("AI QnA analysis failed");
  }
};

/**
 * Sends audio file for sentiment analysis.
 * @param {File} audioFile - The recorded interview audio.
 * @returns {Promise<Object>} - AI sentiment analysis results.
 */
export const analyzeSentiment = async (audioFile) => {
  try {
    const formData = new FormData();
    formData.append("audio", audioFile);

    const response = await axios.post(
      `${AI_SENTIMENT_URL}/analyze_sentiment`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );

    return response.data; // { transcription: "Great job", sentiment: "Positive" }
  } catch (error) {
    console.error("Error analyzing sentiment:", error);
    throw new Error("AI sentiment analysis failed");
  }
};

/**
 * Sends video file for AI-based video analysis.
 * @param {File} videoFile - The recorded interview video.
 * @returns {Promise<Object>} - AI-generated insights on confidence, tone, and clarity.
 */
export const analyzeVideo = async (videoFile) => {
  try {
    const formData = new FormData();
    formData.append("video", videoFile);

    const response = await axios.post(
      `${AI_VIDEO_ANALYSIS_URL}/analyze-video`,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      },
    );

    return response.data; // { confidence: 0.85, tone: "Neutral", clarity: "Clear" }
  } catch (error) {
    console.error("Error analyzing video:", error);
    throw new Error("AI video analysis failed");
  }
};