const JobList = () => {
    const jobs = [
        { id: 1, title: "Software Engineer", applicants: 5 },
        { id: 2, title: "Data Scientist", applicants: 8 },
    ];

    return (
        <div className="mt-4">
            <h3 className="text-lg font-semibold">Posted Jobs</h3>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id} className="border p-2 mt-2 rounded">
                        {job.title} - {job.applicants} Applicants
                    </li>
                ))}
            </ul>
        </div>
    );
};