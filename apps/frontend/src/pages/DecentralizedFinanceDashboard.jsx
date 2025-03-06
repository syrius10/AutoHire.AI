import { useEffect, useState } from "react";
import { fetchDecentralizedFinance } from "../services/decentralizedFinanceService";

// AI-powered workforce financial tracking & decentralized payroll analytics.

const DecentralizedFinanceDashboard = () => {
  const [financeData, setFinanceData] = useState(null);

  useEffect(() => {
    fetchDecentralizedFinance().then(setFinanceData);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📊 Decentralized Finance Overview</h2>
      {financeData ? (
        <div className="mt-4 border p-4 rounded">
          <p><strong>Total Earnings:</strong> ${financeData.total_earnings}</p>
          <p><strong>Expenses:</strong> ${financeData.expenses}</p>
          <p><strong>Blockchain Fees:</strong> ${financeData.blockchain_tx_fees}</p>
          <p><strong>Tax Rate:</strong> {financeData.tax_rate}%</p>
        </div>
      ) : (
        <p>Loading financial tracking data...</p>
      )}
    </div>
  );
};

export default DecentralizedFinanceDashboard;
