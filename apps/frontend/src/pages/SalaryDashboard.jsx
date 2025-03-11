import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  fetchSalaryGrowth,
  fetchBenchmarkSalary,
} from "../services/salaryService";
import SalaryTrendsChart from "../components/SalaryTrendsChart";

const SalaryDashboard = ({ role, experience, location }) => {
  const [salaryTrends, setSalaryTrends] = useState([]);
  const [benchmark, setBenchmark] = useState([]);

  useEffect(() => {
    fetchSalaryGrowth(role, experience).then(setSalaryTrends);
    fetchBenchmarkSalary(role, location).then(setBenchmark);
  }, [role, experience, location]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Salary Dahsboard</h2>
      <SalaryTrendsChart salaryTrends={salaryTrends} />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Market Benchmark</h3>
        <p>Glassdoor: ${benchmark.glassdoor?.median_salary || "N/A"}</p>
        <p>PayScale: ${benchmark.payscale?.median_salary || "N/A"}</p>
      </div>
    </div>
  );
};
SalaryDashboard.propTypes = {
  role: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default SalaryDashboard;
