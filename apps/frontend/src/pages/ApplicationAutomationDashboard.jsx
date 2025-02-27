import { useState } from "react";
import { automateJobApplication } from "../services/applicationAutomationService";

// Automates AI-powered job applications

export default function ApplicationAutomationDashboard() {
  const [candidateName, setCandidateName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [result, setResult] = useState("");

  const handleApplyJob = async () => {
    const response = await automateJobApplication(candidateName, jobTitle, companyName, resume, coverLetter);
    setResult(response.message);
  };

  return (
    <div>
      <h2>AI-Powered Job Application Automation</h2>
      <input value={candidateName} onChange={(e) => setCandidateName(e.target.value)} placeholder="Your Name" />
      <input value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Job Title" />
      <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" />
      <textarea value={resume} onChange={(e) => setResume(e.target.value)} placeholder="Your Resume" />
      <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} placeholder="Your Cover Letter" />
      <button onClick={handleApplyJob}>Auto-Apply</button>
      {result && <p>{result}</p>}
    </div>
  );
}
