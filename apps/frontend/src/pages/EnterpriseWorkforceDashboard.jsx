import React, { useState, useEffect } from "react";
import { fetchWorkforcePlan } from "../services/enterpriseWorkforceService";

// AI-driven HR workforce planning & insights

const EnterpriseWorkforceDashboard = () => {
  const [workforcePlan, setWorkforcePlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    departmentSize: "",
    revenueGrowth: "",
    attritionRate: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const fetchPlan = async () => {
    setLoading(true);
    try {
      const data = await fetchWorkforcePlan(inputs.departmentSize, inputs.revenueGrowth, inputs.attritionRate);
      setWorkforcePlan(data);
    } catch (error) {
      console.error("Error fetching workforce plan:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Enterprise Workforce Planning</h2>
      <div>
        <input type="number" name="departmentSize" placeholder="Department Size" onChange={handleChange} />
        <input type="number" name="revenueGrowth" placeholder="Revenue Growth %" onChange={handleChange} />
        <input type="number" name="attritionRate" placeholder="Attrition Rate %" onChange={handleChange} />
        <button onClick={fetchPlan} disabled={loading}>
          {loading ? "Fetching..." : "Get Workforce Plan"}
        </button>
      </div>
      {workforcePlan && <pre>{JSON.stringify(workforcePlan, null, 2)}</pre>}
    </div>
  );
};

export default EnterpriseWorkforceDashboard;
