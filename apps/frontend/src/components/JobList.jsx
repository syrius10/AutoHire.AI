import { applyForJob } from "../services/jobService";

const JobList = ({ jobs }) => {
  const handleApply = (jobId) => {
    applyForJob(jobId, "candidate-id").then(() => alert("Application submitted!"));
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Available Jobs</h3>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="border p-2 mt-2 rounded">
            <h4 className="font-bold">{job.title}</h4>
            <p>{job.description}</p>
            <button
              className="mt-2 px-4 py-1 bg-green-500 text-white rounded"
              onClick={() => handleApply(job.id)}
            >
              Apply
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;