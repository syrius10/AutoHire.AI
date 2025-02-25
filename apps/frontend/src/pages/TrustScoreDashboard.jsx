import React, { useEffect, useState } from "react";
import { fetchTrustScores } from "../services/trustScoreService";

export default function TrustScoreDashboard() {
    const [trustScores, setTrustScores] = useState([]);

    useEffect(() => {
        async function loadTrustScores() {
            try {
                const data = await fetchTrustScores();
                setTrustScores(data);
            } catch (error) {
                console.error("Error fetching trust scores:", error);
            }
        }
        loadTrustScores();
    }, []);

    return (
        <div>
            <h2>Trust Scores</h2>
            <ul>
                {trustScores.map((score, index) => (
                    <li key={index}>{score.user} - Trust Score: {score.score}</li>
                ))}
            </ul>
        </div>
    );
}
