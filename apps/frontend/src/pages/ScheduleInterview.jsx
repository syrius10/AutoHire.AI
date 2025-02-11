import { useState } from "react";
import { scheduleInterview } from "../services/interviewService";

const ScheduleInterview = () => {
    const [formData, setFormData] = useState({
        employer_id: "employer-123",
        candidate_id:  "candidate-456",
        job_id: "job-789",
        date_time: "",
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        await scheduleInterview(formData);
        alert("Interview Scheuled!");
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Schedule Interview</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="datetime-local"
                    value={formData.date_time}
                    onChange={(e) => setFormData({ ...formData, date_time: e.target.value })}
                    className="border p-2 w-full"
                />
                <button className="mt-3 px-4 py-2 bg-blue-600 text-white" type="submit">
                    Schedule
                </button>
            </form>
        </div>
    );
};

export default ScheduleInterview;