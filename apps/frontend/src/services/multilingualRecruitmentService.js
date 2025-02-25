import axios from "axios";

export const fetchTranslation = async (text, language) => {
  try {
    const response = await axios.post("/api/multilingual-recruitment", {
      text,
      language,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching translation:", error);
    return { translated: "Translation failed" };
  }
};
