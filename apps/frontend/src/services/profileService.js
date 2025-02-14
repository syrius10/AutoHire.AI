import axios from "axios";

const API_URL = "http://localhost:5000/api/profile"; // Adjust if backend runs on a different port

export const enrichProfile = async (resumeFile) => {
  const formData = new FormData();
  formData.append("resume", resumeFile);

  try {
    const response = await axios.post(`${API_URL}/enrich`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  } catch (error) {
    console.error("Error enriching profile:", error);
    throw error;
  }
};