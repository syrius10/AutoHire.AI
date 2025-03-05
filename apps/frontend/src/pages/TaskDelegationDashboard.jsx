import { useState } from "react";
import { assignTask } from "../services/taskDelegationService";

export default function TaskDelegationDashboard() {
  const [taskInput, setTaskInput] = useState({
    skillLevel: "",
    workload: "",
    complexity: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setTaskInput({ ...taskInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await assignTask(
      parseFloat(taskInput.skillLevel),
      parseFloat(taskInput.workload),
      parseFloat(taskInput.complexity)
    );
    setResult(response);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🛠 AI Task Delegation</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="number"
          name="skillLevel"
          placeholder="Skill Level (1-10)"
          value={taskInput.skillLevel}
          onChange={handleChange}
          required
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="workload"
          placeholder="Workload (1-10)"
          value={taskInput.workload}
          onChange={handleChange}
          required
          className="border p-2 mr-2"
        />
        <input
          type="number"
          name="complexity"
          placeholder="Task Complexity (1-10)"
          value={taskInput.complexity}
          onChange={handleChange}
          required
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 ml-2">
          Assign Task
        </button>
      </form>

      {result && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <p>
            <strong>Task Priority:</strong> {result.task_priority}
          </p>
          <p>
            <strong>Assigned To:</strong> {result.assigned_to}
          </p>
        </div>
      )}
    </div>
  );
}
