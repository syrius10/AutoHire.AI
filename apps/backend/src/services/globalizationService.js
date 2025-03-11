import axios from "axios";

// ✅ Mock function: Get list of supported languages
export const getSupportedLanguages = async () => {
  return [
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "de", name: "German" },
    { code: "zh", name: "Chinese" },
  ];
};

// ✅ Translate text using AI translation API (Google Translate API)
export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      null,
      {
        params: {
          q: text,
          target: targetLanguage,
          key: process.env.GOOGLE_TRANSLATE_API_KEY,
        },
      },
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("❌ Translation failed: ", error);
    throw new Error("Translation service unavailable.");
  }
};

// ✅ Get salary benchmark based on country and role
export const getSalaryBenchmark = async (role, country) => {
  const salaryData = {
    "Software Engineer": { US: 120000, UK: 80000, FR: 70000, IN: 25000 },
    "Data Scientist": { US: 130000, UK: 90000, FR: 75000, IN: 27000 },
  };

  return salaryData[role]?.[country] || "Salary data not available";
};
