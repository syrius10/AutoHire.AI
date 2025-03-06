import axios from "axios";

// Calls AI for real-time productivity & energy level tracking.

export const fetchProductivityScore = async (sleepHours, workHours, breaksTaken) => {
  try {
    const response = await axios.post("/api/productivity-energy/track", {
      sleepHours,
      workHours,
      breaksTaken,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching productivity score:", error);
    return { score: "Error fetching productivity data" };
  }
};
