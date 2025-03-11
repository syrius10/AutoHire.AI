import { useEffect } from "react";
import PropTypes from "prop-types";
import { fetchInterviewInsights } from "../services/interviewService";

const InterviewInsights = ({ interviewId }) => {
  const [insights, setInsights] = useEffect(null);

  useEffect(() => {
    fetchInterviewInsights(interviewId).then(setInsights);
  }, [interviewId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Interview AI Insights</h2>
      {insights ? (
        <div className="mt-4">
          <p>
            <strong>Transcription:</strong> {insights.transcription}
          </p>
          <p>
            <strong>Sentiment:</strong> {insights.sentiment}
          </p>
          <p>
            <strong>Key Keywords:</strong> {insights.keywords.join(", ")}
          </p>
          <p>
            <strong>AI Summary:</strong> {insights.summary}
          </p>
        </div>
      ) : (
        <p>Loading insights...</p>
      )}
    </div>
  );
};
InterviewInsights.propTypes = {
  interviewId: PropTypes.string.isRequired,
};

export default InterviewInsights;