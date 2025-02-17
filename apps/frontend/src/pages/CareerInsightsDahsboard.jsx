import { useState } from "react";
import { getCareerPrediction, getSalaryForecast, getJobDemandForecast } from "../services/careerService";

const CareerInsightsDahsboard = () => {
    const [jobTitle, setJobTitle] = useState("");
    const [experience, setExperience] = useState(0);
    const [careerPaths, setCareerPaths] = useState(null);
    const [salaryForecast, setSalaryForecast] = useState(null);
    const [jobDemand, setJobDemand] = useState(null);

    const handleAnalyze = async () => {
        const careerData = await getCareerPrediction(jobTitle, experience);
        setCareerPaths(careerData);

        const salaryData = await getSalaryForecast(jobTitle, "USA");
        setSalaryForecast(salaryData);

        const jobDemandData = await getJobDemandForecast(jobTitle);
        setJobDemand(jobDemandData);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">AI-Powered Career Insights</h2>
            <input type="text" placeholder="Job Title" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} className="border p-2 w-full" />
            <input type="text" placeholder="Years of Experience" value={experience} onChange={(e) => setExperience(Number(e.target.value))} className="border p-2 w-full mt-2" />
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white" onClick={handleAnalyze}>
                Analyze Career Path    
            </button> 

            {careerPaths && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Career Progression Paths</h3>
                    <p>{careerPaths.career_paths}</p>
                </div>
            )}

            {salaryForecast && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Salary Projections</h3>
                    <p>Estimated Future Salary: {salaryForecast.salaryGrowth}</p>
                </div>
            )}

            {jobDemand && (
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Job Market Demand</h3>
                    <p>{jobDemand.demandProjection}</p>
                </div>
            )}
        </div>
    );
}

export default CareerInsightsDahsboard;