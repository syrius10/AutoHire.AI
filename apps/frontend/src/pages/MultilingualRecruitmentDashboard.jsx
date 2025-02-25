import React, { useState } from "react";
import { fetchTranslation } from "../services/multilingualRecruitmentService";

// Real-time AI translation for recruitment

const MultilingualRecruitmentDashboard = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = async () => {
    const data = await fetchTranslation(jobDescription, "fr");
    setTranslatedText(data.translated);
  };

  return (
    <div>
      <h2>Multilingual Recruitment</h2>
      <textarea
        placeholder="Enter job description..."
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate to French</button>
      <p><strong>Translated:</strong> {translatedText}</p>
    </div>
  );
};

export default MultilingualRecruitmentDashboard;
