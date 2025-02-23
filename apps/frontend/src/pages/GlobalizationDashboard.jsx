import { useEffect, useState } from "react";
import { fetchSupportedLanguages, translateText } from "../services/globalizationService";

const GlobalizationDashboard = () => {
    const [languages, setLanguages] = useState([]);
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [targetLanguage, setTargetLanguage] = useState("fr"); // Default to French

    useEffect(() => {
        fetchSupportedLanguages().then(setLanguages);
    }, []);

    const handleTranslate = async () => {
        const translation = await translateText(text, targetLanguage);
        setTranslatedText(translation);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">🌍 Globalization & Multi-Language Support</h2>
            <p>Select a language and translate job postings or recruiter messages:</p>

            <select
                className="border p-2 mt-2"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
            >
                {languages.map((lang) => {
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                })}
            </select>

            <textarea
                className="border p-2 mt-2 w-full"
                placeholder="Enter text to translate..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded" onClick={handleTranslate}>
                Translate
            </button>

            {translatedText && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                    <h3 className="text-lg font-semibold">Translated Text:</h3>
                    <p>{translatedText}</p>
                </div>
            )}
        </div>
    );
};

export default GlobalizationDashboard;