import { useState, useEffect } from "react";
import { fetchSalaryGrowth } from "../services/salaryService";
import SalaryTrendsChart from "../components/SalaryTrendsChart";

const SalaryInsights = ({ role, experience }) => {
    const [salaryTrends, setSalaryTrends] = useState([]);

    useEffect(() => {
        fetchSalaryGrowth(role, experience).then(setSalaryTrends);
    }, [role, experience]);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Salary Insights</h2>
            <SalaryTrendsChart salaryTrends={salaryTrends} />
        </div>
    );
};

export default SalaryInsights;