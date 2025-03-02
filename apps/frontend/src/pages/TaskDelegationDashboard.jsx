import { useEffect, useState } from "react";
import { fetchTaskDelegation } from "../services/taskDelegationService";

// AI-powered task assignment & work optimization

const TaskDelegationDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const data = await fetchTaskDelegation();
      setTasks(data);
    }
    loadTasks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">📋 AI-Powered Task Assignment</h2>
      {tasks.length > 0 ? (
        <ul className="mt-4 border p-4 rounded">
          {tasks.map((task, index) => (
            <li key={index} className="p-2 border-b">{task.taskName} - Priority: {task.priority}</li>
          ))}
        </ul>
      ) : (
        <p>Loading task allocation insights...</p>
      )}
    </div>
  );
};

export default TaskDelegationDashboard;
