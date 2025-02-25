import React, { useEffect, useState } from "react";
import { fetchClientTrustScores } from "../services/clientTrustScoreService";

// AI-generated employer trust ratings.

const ClientTrustScoreDashboard = () => {
    const [trustScores, setTrustScores] = useState(null);

    useEffect(() => {
        fetchClientTrustScores().then(data => setTrustScores(data));
    }, []);

    return (
        <div>
            <h2>Client Trust Score Dashboard</h2>
            {trustScores ? (
                <pre>{JSON.stringify(trustScores, null, 2)}</pre>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default ClientTrustScoreDashboard;
