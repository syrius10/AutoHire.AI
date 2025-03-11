import axios from "axios";

// Fetches AI-powered HR assistance & talent acquisition automation.

export const hrAssistantQuery = async (query) => {
  try {
    const response = await axios.post("http://localhost:5093/hr-assistant", {
      query,
    });
    return response.data.response;
  } catch (error) {
    console.error("Error in HR assistant query:", error);
    throw new Error("HR assistant service failed.");
  }
};
