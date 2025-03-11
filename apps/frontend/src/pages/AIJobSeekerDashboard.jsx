import { useState } from "react";
import { applyForAIJob } from "../services/aiJobSeekerService";

// Autonomous AI job seeker applying & optimizing job searches.

const AIJobSeekerDashboard = () => {
  const [experience, setExperience] = useState("");
  const [skillMatch, setSkillMatch] = useState("");
  const [prevSuccess, setPrevSuccess] = useState("");
  const [applicationStatus, setApplicationStatus] = useState(null);

  const handleApplication = async () => {
    const result = await applyForAIJob(
      Number(experience),
      Number(skillMatch),
      Number(prevSuccess),
    );
    setApplicationStatus(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🔍 AI Job Seeker</h2>
      <input
        type="number"
        placeholder="Years of Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className="border p-2 mt-4 w-full"
      />
      <input
        type="number"
        placeholder="Skill Match (1-10)"
        value={skillMatch}
        onChange={(e) => setSkillMatch(e.target.value)}
        className="border p-2 mt-2 w-full"
      />
      <input
        type="number"
        placeholder="Previous Success Rate (%)"
        value={prevSuccess}
        onChange={(e) => setPrevSuccess(e.target.value)}
        className="border p-2 mt-2 w-full"
      />
      <button
        onClick={handleApplication}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Apply
      </button>
      {applicationStatus && (
        <pre className="mt-4 bg-gray-100 p-4 rounded">
          {JSON.stringify(applicationStatus, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default AIJobSeekerDashboard;
