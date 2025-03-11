import { useState } from "react";
import { generateJobDescription } from "../services/aiJobDescriptionService";

const AIJobDescription = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateJobDescription(jobTitle);
    setDescription(result);
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">AI-Generated Job Description</h2>
      <input
        type="text"
        placeholder="Enter Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Description"}
      </button>
      {description && (
        <div className="mt-4 border p-4 rounded">
          <h3 className="text-lg font-semibold">Generated Description:</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default AIJobDescription;
