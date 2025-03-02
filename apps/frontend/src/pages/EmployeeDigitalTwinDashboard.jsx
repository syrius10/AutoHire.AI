import { useEffect, useState } from "react";
import { fetchEmployeeDigitalTwin } from "../services/employeeDigitalTwinService";

// AI-powered Employee Digital Twin Insights

const EmployeeDigitalTwinDashboard = () => {
  const [simulationData, setSimulationData] = useState(null);

  useEffect(() => {
    async function loadSimulation() {
      const data = await fetchEmployeeDigitalTwin("12345"); // Example employee ID
      setSimulationData(data);
    }
    loadSimulation();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">👥 Employee Digital Twin Insights</h2>
      {simulationData ? (
        <pre className="mt-4 p-4 border rounded bg-gray-100">{JSON.stringify(simulationData, null, 2)}</pre>
      ) : (
        <p>Loading simulation data...</p>
      )}
    </div>
  );
};

export default EmployeeDigitalTwinDashboard;
