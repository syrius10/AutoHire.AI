import React, { useState, useEffect } from "react";
import { fetchFreelanceMatches } from "../services/freelanceTalentMatchingService";

// Displays AI-driven freelancer-job matches

const FreelanceTalentMatchingDashboard = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const loadMatches = async () => {
            const data = await fetchFreelanceMatches();
            setMatches(data);
        };
        loadMatches();
    }, []);

    return (
        <div>
            <h1>Freelance Talent Matching</h1>
            <ul>
                {matches.map((match, index) => (
                    <li key={index}>{match.name} - {match.matchScore}% Match</li>
                ))}
            </ul>
        </div>
    );
};

export default FreelanceTalentMatchingDashboard;
