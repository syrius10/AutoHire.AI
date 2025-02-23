import { google } from "googleapis";

const calendar = google.calendar({ version: "v3", auth: process.env.GOOGLE_CALENDAR_API_KEY });

/**
 * Schedule an interview
 */
export const scheduleInterview = async (candidateEmail, recruiterEmail, timeSlot) => {
    try {
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

        return result.data;
    } catch (error) {
        console.error("Error scheduling interview: ", error);
        return { error: "Failed to schedule interview "};
    }
};