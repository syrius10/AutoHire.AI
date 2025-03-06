import axios from "axios";

// Fetches AI-powered real-time productivity & energy level tracking.

export const trackProductivity = async (sleepHours, workHours, breaksTaken) => {
  try {
    const response = await axios.post("http://localhost:5129/track_productivity", {
      sleep_hours: sleepHours,
      work_hours: workHours,
      breaks_taken: breaksTaken,
    });

    return response.data;
  } catch (error) {
    console.error("Error tracking productivity:", error);
    throw new Error("Failed to track productivity.");
  }
};
