export const fetchSupportedLanguages = async () => {
    try {
        const response = await fetch("/api/globalization/languages");
        return response.json();
    } catch (error) {
        console.error("❌ Error fetching languages: ", error);
        return [];
    }
};

export const translateText = async (text, targetLanguage) => {
    try {
        const response = await fetch("/api/globalization/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text, targetLanguage }),
        });

        const data = await response.json();
        return data.translatedText;
    } catch (error) {
        console.error("❌ Error translating text: ", error);
        return "Translation failed.";
    }
};