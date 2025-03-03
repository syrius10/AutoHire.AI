import axios from "axios";

// Calls AI for VR interview automation.

export const fetchVRJobInterviews = async () => {
  try {
    const response = await axios.get("/api/vr-job-interviews/data");
    return response.data;
  } catch (error) {
    console.error("Error fetching VR job interviews:", error);
    return null;
  }
};
