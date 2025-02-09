import { useEffect, useState } from "react";
import { fetchMatchingJobs } from "../services/matchingService";
import JobList from "../components/JobList";
import { fetchJobs } from "../services/jobService";

const CandidateDahsboard () => {
    const [jobs, setJobs] = useState([]);
    const [reccomendedJobs, setReccomendedJobs] = useState([]);

    useEffect(() => {
        fetchJobs().then(setJobs);
        fetchMatchingJobs("Python, JavaScript").then(setReccomendedJobs);
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Candidate Dashboard</h2>
            <JobList jobs={jobs} />

            <h3 className="text-lg font-semibold mt-6">Reccomended Jobs</h3>
            <ul>
                {reccomendedJobs.map(([id, score]) => (
                    <li key={id} className="border p-2 mt-2 rounded">
                        <h4>Job ID: {id} - Match Score: {score.toFixed(2)}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CandidateDahsboard;