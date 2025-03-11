import React, { useState } from "react";
import { fetchTalentRedistribution } from "../services/talentRedistributionService";

// AI-based internal mobility & talent balancing

const TalentRedistributionDashboard = () => {
  const [redistributionPlan, setRedistributionPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    currentWorkforce: "",
    departmentProductivity: "",
    employeeOverload: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const optimizeTalent = async () => {
    setLoading(true);
    try {
      const data = await fetchTalentRedistribution(
        inputs.currentWorkforce,
        inputs.departmentProductivity,
        inputs.employeeOverload,
      );
      setRedistributionPlan(data);
    } catch (error) {
      console.error("Error optimizing talent redistribution:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Talent Redistribution</h2>
      <div>
        <input
          type="number"
          name="currentWorkforce"
          placeholder="Current Workforce"
          onChange={handleChange}
        />
        <input
          type="number"
          name="departmentProductivity"
          placeholder="Department Productivity %"
          onChange={handleChange}
        />
        <input
          type="number"
          name="employeeOverload"
          placeholder="Employee Overload %"
          onChange={handleChange}
        />
        <button onClick={optimizeTalent} disabled={loading}>
          {loading ? "Optimizing..." : "Optimize Talent"}
        </button>
      </div>
      {redistributionPlan && (
        <pre>{JSON.stringify(redistributionPlan, null, 2)}</pre>
      )}
    </div>
  );
};

export default TalentRedistributionDashboard;
