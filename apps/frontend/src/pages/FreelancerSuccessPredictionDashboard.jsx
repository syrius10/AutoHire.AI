import React, { useState, useEffect } from "react";
import { fetchFreelancerSuccess } from "../services/freelancerSuccessPredictionService";

// Displays AI-driven freelancer success predictions

const FreelancerSuccessPredictionDashboard = () => {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const loadPredictions = async () => {
      const data = await fetchFreelancerSuccess();
      setPredictions(data);
    };
    loadPredictions();
  }, []);

  return (
    <div>
      <h1>Freelancer Success Predictions</h1>
      <ul>
        {predictions.map((freelancer) => (
          <li key={freelancer.id}>
            {freelancer.name} - {freelancer.successRate}% Success Rate
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerSuccessPredictionDashboard;
