import { useState, useEffect } from "react";
import { autoScreenCandidate } from "../services/autoScreeningService";

const AutoScreeningDahsboard = ({ candidateId, jobId }) => {
    const [matchScore, setMatchScore] = useState(null);

    useEffect(() => {
        autoScreenCandidate(candidateId, jobId).then((data) => {
            setMatchScore(data.matchScore);
        });
    }, [candidateId, jobId]);

    return (
        <div>
            <h2>AI-Powered Screening</h2>
            {matchScore !== null ? <p>Match Score: {matchScore}%</p> : <p>Loading...</p>}
        </div>
    );
};

export default AutoScreeningDahsboard;