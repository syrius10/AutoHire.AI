import axios from "axios";

// AI-driven meeting automation

/**
 * AI-powered meeting scheduling
 */
export const scheduleMeeting = async (participants, agenda, dateTime) => {
  try {
    const response = await axios.post(
      "http://localhost:5103/schedule-meeting",
      {
        participants,
        agenda,
        dateTime,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error scheduling meeting:", error);
    throw new Error("Meeting scheduling failed.");
  }
};

/**
 * AI-generated meeting follow-up tasks
 */
export const generateFollowUpTasks = async (meetingId) => {
  try {
    const response = await axios.post(
      "http://localhost:5104/generate-follow-up",
      {
        meetingId,
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error generating follow-up tasks:", error);
    throw new Error("Failed to generate follow-up tasks.");
  }
};
