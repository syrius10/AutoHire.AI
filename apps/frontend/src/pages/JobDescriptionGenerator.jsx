import { useState } from "react";
import {
  generateJodDescription,
  optimizeJobDescription,
} from "../services/jobDescriptionService";

const JobDescriptionGenerator = () => {
  const [jobRole, setJobRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [generatedDescription, setGeneratedDescription] = useState("");
  const [optimizedDescription, setOptimizedDescription] = useState("");

  const handleGenerate = async () => {
    const result = await generateJodDescription(jobRole, companyName);
    setGeneratedDescription(result.job_description);
  };

  const handleOptimize = async () => {
    const result = await optimizeJobDescription(generatedDescription);
    setOptimizedDescription(result.optimized_description);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        AI-Powered Job Description Generator
      </h2>
      <input
        type="text"
        placeholder="Job Role"
        value={jobRole}
        onChange={(e) => setJobRole(e.target.value)}
        className="border p-2 mt-4 w-full"
      />
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="border p-2 mt-4 w-full"
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white"
        onClick={handleGenerate}
      >
        Generate Job Description
      </button>
      {generatedDescription && (
        <>
          <p className="mt-4">{generatedDescription}</p>
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white"
            onClick={handleOptimize}
          >
            Optimize for Searchability
          </button>
        </>
      )}
      {optimizedDescription && <p className="mt-4">{optimizedDescription}</p>}
    </div>
  );
};

export default JobDescriptionGenerator;
