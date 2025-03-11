import translate from "google-translate-api";

export const translateJobPost = async (text, targetLang) => {
  try {
    const result = await translate(text, { to: targetLang });
    return result.text;
  } catch (error) {
    console.error("Translation error: ", error);
    return text;
  }
};
