import { useEffect, useState } from "react";
import { getJobCount, getApplicationCount } from "../services/analyticsService";

const AnalyticsDashboard = () => {
    const [jobCount, setJobCount] = useState(0);
    const [applicationCount, setApplicationCount] = useState[0];

    useEffect(() => {
        getJobCount().then((data) => setJobCount(data.total_jobs));
        getApplicationCount().then((data) => setApplicationCount(data.total_applications));
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
        </div>
    );
};

export default AnalyticsDashboard;