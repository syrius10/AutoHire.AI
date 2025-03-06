import { useEffect, useState } from "react";
import { createTeam, assignTask, trackProgress } from "../services/remoteTeamManagementService";

// AI-driven real-time remote team tracking & task updates.

const RemoteTeamManagementDashboard = () => {
  const [teamName, setTeamName] = useState("");
  const [manager, setManager] = useState("");
  const [task, setTask] = useState("");
  const [progress, setProgress] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (teamName) {
      trackProgress(teamName).then((data) => setProgress(data.tasks));
    }
  }, [teamName]);

  const handleCreateTeam = async () => {
    const response = await createTeam(teamName, manager);
    setMessage(response.message);
  };

  const handleAssignTask = async () => {
    const response = await assignTask(teamName, task);
    setMessage(response.message);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">👥 Remote Team Management</h2>
      <div className="mt-4">
        <input type="text" placeholder="Team Name" onChange={(e) => setTeamName(e.target.value)} />
        <input type="text" placeholder="Manager Name" onChange={(e) => setManager(e.target.value)} />
        <button onClick={handleCreateTeam}>Create Team</button>
      </div>
      <div className="mt-4">
        <input type="text" placeholder="Task" onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAssignTask}>Assign Task</button>
      </div>
      {message && <p className="mt-4">{message}</p>}
      <div className="mt-4">
        <h3 className="text-xl">📊 Progress</h3>
        <ul>
          {progress.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RemoteTeamManagementDashboard;
