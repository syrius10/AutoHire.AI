import React, { useState, useEffect } from "react";
import { fetchGigDemand } from "../services/gigWorkDemandService";

// Displays AI-driven freelance/gig market demand insights

const GigWorkDemandDashboard = () => {
    const [demand, setDemand] = useState([]);

    useEffect(() => {
        const loadDemand = async () => {
            const data = await fetchGigDemand();
            setDemand(data);
        };
        loadDemand();
    }, []);

    return (
        <div>
            <h1>Gig Work Demand Analysis</h1>
            <ul>
                {demand.map((industry, index) => (
                    <li key={index}>{industry.sector} - {industry.demandLevel}</li>
                ))}
            </ul>
        </div>
    );
};

export default GigWorkDemandDashboard;
