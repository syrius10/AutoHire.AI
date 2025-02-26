import { useEffect, useState } from "react";
import { fetchIndustryDemandPrediction } from "../services/industryDemandPredictionService";

// Predicts industry demands.

export default function IndustryDemandPredictionDashboard() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const getPredictions = async () => {
      const data = await fetchIndustryDemandPrediction();
      setPredictions(data);
    };
    getPredictions();
  }, []);

  return (
    <div>
      <h1>Industry Demand Predictions</h1>
      <ul>
        {predictions.map((prediction, index) => (
          <li key={index}>
            {prediction.industry}: {prediction.demand_level}
          </li>
        ))}
      </ul>
    </div>
  );
}
