import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchJobMatches } from "../services/matchingService";

const JobMatchResults = ({ candidateId }) => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchJobMatches(candidateId).then(setMatches);
  }, [candidateId]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">AI-Powered Job Matches</h2>
      <ul>
        {matches.map((job) => (
          <li key={job.id} className="border p-2 mt-2 rounded">
            <h4>
              {job.title} - Match Score: {job.match_score}%
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};
JobMatchResults.propTypes = {
  candidateId: PropTypes.string.isRequired,
};

export default JobMatchResults;
