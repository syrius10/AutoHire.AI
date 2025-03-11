import { useState } from "react";
import { startEvaluation } from "../services/evaluationService";

const Evaluation = () => {
  const [status, setStatus] = useState("Waiting...");
  const [feedback, setFeedback] = useState(null);

  const handleStart = async () => {
    setStatus("Evaluating...");
    const response = await startEvaluation();
    setStatus("Completed");
    setFeedback(response);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Real-time Evaluation</h2>
      <button
        className="px-4 py-2 bg-blue-600 text-white mt-4"
        onClick={handleStart}
      >
        Start Evaluation
      </button>
      <p className="mt-4">{status}</p>
      {feedback && <p className="mt-4">Feedback: {feedback.message}</p>}
    </div>
  );
};

export default Evaluation;
