import { useEffect, useState } from "react";
import { fetchSalaryBenchmarking } from "../services/salaryBenchmarkingService";

// Shows salary benchmarking comparisons.

export default function SalaryBenchmarkingDashboard() {
  const [salaryData, setSalaryData] = useState([]);

  useEffect(() => {
    const getSalaryData = async () => {
      const data = await fetchSalaryBenchmarking();
      setSalaryData(data);
    };
    getSalaryData();
  }, []);

  return (
    <div>
      <h1>Salary Benchmarking</h1>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Industry</th>
            <th>Average Salary</th>
          </tr>
        </thead>
        <tbody>
          {salaryData.map((job, index) => (
            <tr key={index}>
              <td>{job.title}</td>
              <td>{job.industry}</td>
              <td>${job.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
