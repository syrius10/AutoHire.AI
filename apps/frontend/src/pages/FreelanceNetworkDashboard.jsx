import React, { useEffect, useState } from "react";
import { fetchFreelanceMatches } from "../services/freelanceNetworkService";

export default function FreelanceNetworkDashboard() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        async function loadMatches() {
            try {
                const data = await fetchFreelanceMatches();
                setMatches(data);
            } catch (error) {
                console.error("Error fetching freelancer matches:", error);
            }
        }
        loadMatches();
    }, []);

    return (
        <div>
            <h2>Freelance Network Matching</h2>
            <ul>
                {matches.map((match, index) => (
                    <li key={index}>{match.freelancer} → {match.client}</li>
                ))}
            </ul>
        </div>
    );
}
