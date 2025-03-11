const API_BASE_URL = "http://localhost:5001/api"; // Adjust based on backend URL

/**
 * Call backend API to generate a recruiter message
 */
export const generateRecruiterMessage = async (
  recruiterName,
  candidateName,
  jobTitle,
) => {
  try {
    const response = await fetch(`${API_BASE_URL}/messaging/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recruiterName, candidateName, jobTitle }),
    });

    if (!response.ok) throw new Error("Failed to generate recruiter message");

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error generating recruiter message:", error);
    return "An error occurred while generating the message.";
  }
};
