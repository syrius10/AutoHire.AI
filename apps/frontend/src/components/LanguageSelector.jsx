import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
        </select>
    );
};

export default LanguageSelector;