import axios from "axios";
import { google } from "googleapis";

/**
 * Unified both functionalities:
If emails & time slot are provided → schedules via Google Calendar.
If candidate name & job role are provided → schedules via AI scheduling API.
Uses a single function: Accepts both sets of parameters and decides which scheduling method to use.
Returns descriptive messages: Indicates whether Google Calendar or AI scheduling was used.
 */

const calendar = google.calendar({ version: "v3", auth: process.env.GOOGLE_CALENDAR_API_KEY });

/**
 * AI-powered and Google Calendar-based interview scheduling.
 */
export const scheduleInterview = async ({ candidateEmail, recruiterEmail, timeSlot, candidateName, jobRole }) => {
  try {
    if (candidateEmail && recruiterEmail && timeSlot) {
      // Google Calendar-based scheduling
      const event = {
        summary: "Job Interview",
        description: "Your scheduled job interview",
        start: { dateTime: timeSlot, timeZone: "UTC" },
        end: { dateTime: new Date(new Date(timeSlot).getTime() + 60 * 60 * 1000).toISOString(), timeZone: "UTC" },
        attendees: [{ email: candidateEmail }, { email: recruiterEmail }],
      };

      const result = await calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      return { message: "Interview scheduled successfully via Google Calendar", event: result.data };
    } 
    
    if (candidateName && jobRole) {
      // AI-based interview scheduling
      const response = await axios.post("http://localhost:5031/schedule", {
        candidate_name: candidateName,
        job_role: jobRole,
      });

      return { message: "Interview scheduled successfully via AI scheduling", data: response.data };
    }

    throw new Error("Missing required parameters for scheduling.");
  } catch (error) {
    console.error("Error scheduling interview:", error);
    return { error: "Interview scheduling failed." };
  }
};
