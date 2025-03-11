import { useEffect, useState } from "react";
import { getJobRecommendations } from "../services/recommendationService";

const JobRecommendations = () => {
  const [skills, setSkills] = useState("Python, JavaScript");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobRecommendations(skills).then(setJobs);
  }, [skills]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Job Recommendations</h2>
      <input
        className="border p-2 w-full"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />
      <ul className="mt-4">
        {jobs.map((job) => (
          <li key={job.id} className="border p-2 rounded shadow-md">
            <h4 className="font-bold">{job.title}</h4>
            <p>Recommended Score: {job.score.toFixed(2)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobRecommendations;
