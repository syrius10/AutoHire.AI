import { useEffect, useState } from "react";
import { fetchJobs } from "../utils/api";

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job: any) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobsPage;
