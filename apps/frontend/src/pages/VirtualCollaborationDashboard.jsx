import { useEffect, useState } from "react";
import { createWorkspace, joinWorkspace, shareResource } from "../services/virtualCollaborationService";

// AI-powered Metaverse-based co-working space for teams.

const VirtualCollaborationDashboard = () => {
  const [teamName, setTeamName] = useState("");
  const [user, setUser] = useState("");
  const [resource, setResource] = useState("");
  const [message, setMessage] = useState("");

  const handleCreateWorkspace = async () => {
    const response = await createWorkspace(teamName);
    setMessage(response.message);
  };

  const handleJoinWorkspace = async () => {
    const response = await joinWorkspace(teamName, user);
    setMessage(response.message);
  };

  const handleShareResource = async () => {
    const response = await shareResource(teamName, resource);
    setMessage(response.message);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🌐 Virtual Collaboration</h2>
      <div className="mt-4">
        <input type="text" placeholder="Team Name" onChange={(e) => setTeamName(e.target.value)} />
        <button onClick={handleCreateWorkspace}>Create Workspace</button>
      </div>
      <div className="mt-4">
        <input type="text" placeholder="Your Name" onChange={(e) => setUser(e.target.value)} />
        <button onClick={handleJoinWorkspace}>Join Workspace</button>
      </div>
      <div className="mt-4">
        <input type="text" placeholder="Resource" onChange={(e) => setResource(e.target.value)} />
        <button onClick={handleShareResource}>Share Resource</button>
      </div>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default VirtualCollaborationDashboard;
