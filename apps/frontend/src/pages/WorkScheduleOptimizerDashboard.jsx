import { useEffect, useState } from "react";
import { fetchOptimizedSchedule } from "../services/workScheduleOptimizerService.js";

// AI-driven personalized work schedules for well-being.

const WorkScheduleOptimizerDashboard = () => {
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    fetchOptimizedSchedule(40, 8, 70).then(setSchedule);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📅 Work Schedule Optimization</h2>
      {schedule ? (
        <div className="mt-4 border p-4 rounded">
          <p>
            <strong>Optimized Work Hours:</strong> {schedule.optimizedSchedule}
          </p>
        </div>
      ) : (
        <p>Loading optimized work schedule...</p>
      )}
    </div>
  );
};

export default WorkScheduleOptimizerDashboard;
