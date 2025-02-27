import React, { useState, useEffect } from "react";
import { fetchWorkforceForecast } from "../services/workforceForecastingService";

// Predicts hiring needs & workforce trends

const WorkforceForecastingDashboard = () => {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    year: "",
    industryGrowth: "",
    hiringBudget: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const getForecast = async () => {
    setLoading(true);
    try {
      const data = await fetchWorkforceForecast(inputs.year, inputs.industryGrowth, inputs.hiringBudget);
      setForecast(data);
    } catch (error) {
      console.error("Error fetching workforce forecast:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Workforce Forecasting</h2>
      <div>
        <input type="number" name="year" placeholder="Year" onChange={handleChange} />
        <input type="number" name="industryGrowth" placeholder="Industry Growth %" onChange={handleChange} />
        <input type="number" name="hiringBudget" placeholder="Hiring Budget ($)" onChange={handleChange} />
        <button onClick={getForecast} disabled={loading}>
          {loading ? "Fetching..." : "Get Forecast"}
        </button>
      </div>
      {forecast && <pre>{JSON.stringify(forecast, null, 2)}</pre>}
    </div>
  );
};

export default WorkforceForecastingDashboard;
