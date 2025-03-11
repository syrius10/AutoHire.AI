import { useEffect, useState } from "react";
import {
  getJobCount,
  getApplicationCount,
  getTopSkills,
} from "../services/analyticsService";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AnalyticsDashboard = () => {
  const [jobCount, setJobCount] = useState(0);
  const [applicationCount, setApplicationCount] = useState[0];
  const [topSkills, setTopSkills] = useState([]);

  useEffect(() => {
    getJobCount().then((data) => setJobCount(data.total_jobs));
    getApplicationCount().then((data) =>
      setApplicationCount(data.total_applications),
    );
    getTopSkills().then(setTopSkills);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl fonr-bold">Analytics Dahsboard</h2>
      <div className="mt-4 border p-4 rounded">
        <h3 className="text-lg font-semibold">Total Jobs Posted</h3>
        <p className="text-2xl">{jobCount}</p>
      </div>
      <div className="mt-4 border p-4 rounded">
        <h3 className="text-lg font-semibold">Total Applications Received</h3>
        <p className="text-2xl">{applicationCount}</p>
      </div>
      <div className="mt-6 border p-4 rounded shadow">
        <h3 className="text-lg font-semibold">Most In-Demand Skills</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topSkills}>
            <XAxis dataKey="skill" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
