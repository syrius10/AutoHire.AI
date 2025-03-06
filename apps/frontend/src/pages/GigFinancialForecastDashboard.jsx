import { useState } from "react";
import { fetchFinancialForecast } from "../services/gigFinancialForecastService";

// AI-powered predictive financial forecasting.

const GigFinancialForecastDashboard = () => {
  const [pastIncome, setPastIncome] = useState("");
  const [forecast, setForecast] = useState(null);

  const handleForecast = async () => {
    const prediction = await fetchFinancialForecast(pastIncome);
    setForecast(prediction);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📈 Financial Forecast</h2>
      <div className="mt-4">
        <label>Past Monthly Income:</label>
        <input type="number" value={pastIncome} onChange={(e) => setPastIncome(e.target.value)} className="border p-2 w-full mb-2" />
        
        <button onClick={handleForecast} className="bg-green-500 text-white px-4 py-2 rounded mt-2">Predict Future Income</button>
      </div>

      {forecast !== null && (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Predicted Future Income:</strong> ${forecast}</p>
        </div>
      )}
    </div>
  );
};

export default GigFinancialForecastDashboard;
