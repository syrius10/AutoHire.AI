import { useState } from "react";
import {
  analyzeResumeSkills,
  getTrainingRecommendations,
} from "../services/skillGapService";

const SkillGapDashboard = () => {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skillGap, setSkillGap] = useState(null);
  const [training, setTraining] = useState(null);

  const handleAnalyze = async () => {
    const result = await analyzeResumeSkills(resume, jobDescription);
    setSkillGap(result);

    if (result.missingSkills.length > 0) {
      const trainingData = await getTrainingRecommendations(
        result.missingSkills,
      );
      setTraining(trainingData);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Skill Gap Analysis</h2>
      <textarea
        placeholder="Paste Resume"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Paste Job Description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        className="border p-2 w-full mt-2"
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white"
        onClick={handleAnalyze}
      >
        Analyze Skill Gap
      </button>

      {skillGap && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            Skill Gap Score: {skillGap.gapScore}%
          </h3>
          <p>
            <strong>Missing Skills:</strong> {skillGap.missingSkills.join(", ")}
          </p>
        </div>
      )}

      {training && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Recommended Courses</h3>
          <ul>
            {training.coursera.map((course) => (
              <li key={course.id}>
                <a href={course.link} target="_blank" className="text-blue-600" rel="noreferrer">
                  {course.name}
                </a>
              </li>
            ))}
            {training.udemy.map((course) => (
              <li key={course.id}>
                <a href={course.url} target="_blank" className="text-blue-600" rel="noreferrer">
                  {course.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SkillGapDashboard;
