import { useState } from "react";
import { fetchCoverLetter } from "../services/coverLetterService";

// Generates AI-personalized cover letters

export default function CoverLetterDashboard() {
  const [candidateName, setCandidateName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [skills, setSkills] = useState("");
  const [coverLetter, setCoverLetter] = useState("");

  const handleGenerateCoverLetter = async () => {
    const result = await fetchCoverLetter(
      candidateName,
      jobTitle,
      companyName,
      skills.split(","),
    );
    setCoverLetter(result.coverLetter);
  };

  return (
    <div>
      <h2>AI-Powered Cover Letter Generator</h2>
      <input
        value={candidateName}
        onChange={(e) => setCandidateName(e.target.value)}
        placeholder="Your Name"
      />
      <input
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        placeholder="Job Title"
      />
      <input
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        placeholder="Company Name"
      />
      <textarea
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Your Skills (comma-separated)"
      />
      <button onClick={handleGenerateCoverLetter}>Generate Cover Letter</button>
      {coverLetter && (
        <div>
          <h3>Generated Cover Letter</h3>
          <p>{coverLetter}</p>
        </div>
      )}
    </div>
  );
}
