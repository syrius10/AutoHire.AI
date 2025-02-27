import { useState } from "react";
import { fetchEnhancedResume } from "../services/resumeEnhancementService";

// Displays AI-powered resume optimization

export default function ResumeEnhancementDashboard() {
  const [resumeText, setResumeText] = useState("");
  const [enhancedResume, setEnhancedResume] = useState("");

  const handleEnhanceResume = async () => {
    const result = await fetchEnhancedResume(resumeText);
    setEnhancedResume(result.enhancedResume);
  };

  return (
    <div>
      <h2>AI-Powered Resume Enhancement</h2>
      <textarea
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        placeholder="Paste your resume here..."
      />
      <button onClick={handleEnhanceResume}>Enhance Resume</button>
      {enhancedResume && (
        <div>
          <h3>Enhanced Resume</h3>
          <p>{enhancedResume}</p>
        </div>
      )}
    </div>
  );
}
