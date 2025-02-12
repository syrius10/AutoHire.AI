import { applyForJob } from "../services/jobService";
import LazyLoad from "react-lazy-load";

const JobList = ({ jobs }) => (
    <LazyLoad height={200} offset={100}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <li key={job.id} className="border p-4 rounded shadow-md">
            <h4 className="font-bold">{job.title}</h4>
            <p>{job.description}</p>
            <button className="mt-2 px-4 py-1 bg-green-500 text-white rounded">
              Apply
            </button>
          </li>
        ))}
      </ul>
    </LazyLoad>
  );
  
export default JobList;