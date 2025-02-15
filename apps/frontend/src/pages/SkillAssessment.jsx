import { useState } from "react";
import { sendSkillAssessment } from "../services/assessmentService";

const SkillAssessment = async () => {
    const [score, setScore] = useState(null);

    const handleStartTest = async () => {
        const result = await sendSkillAssessment({ category: "coding", difficulty: "medium" });
        setScore(result.score);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Gamified Skill Assessment</h2>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white" onClick={handleStartTest}>
                Start Coding Challenge
            </button>
            {score !== null && <p className="mt-4 text-lg">Your Score: {score}</p>}
        </div>
    );
};

export default SkillAssessment;
