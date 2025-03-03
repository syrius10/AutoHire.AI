import { useEffect, useState } from "react";
import { fetchUserBalance, assignTokens } from "../services/tokenizedWorkService";

// AI-driven blockchain-based work incentives & rewards tracking.

const TokenizedWorkDashboard = () => {
  const [balance, setBalance] = useState(null);
  const [userId, setUserId] = useState("");
  const [workData, setWorkData] = useState({ workHours: "", projectComplexity: "", skillLevel: "" });

  useEffect(() => {
    if (userId) {
      fetchUserBalance(userId).then(setBalance);
    }
  }, [userId]);

  const handleAssignTokens = async () => {
    if (userId && workData.workHours && workData.projectComplexity && workData.skillLevel) {
      const response = await assignTokens(userId, workData);
      alert(`Tokens Assigned: ${response.tokens}`);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">💰 AI-Driven Tokenized Work</h2>
      <input type="text" placeholder="User ID" onChange={(e) => setUserId(e.target.value)} />
      <p>Token Balance: {balance ? balance.tokens : "Loading..."}</p>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Assign Tokens</h3>
        <input type="number" placeholder="Work Hours" onChange={(e) => setWorkData({ ...workData, workHours: e.target.value })} />
        <input type="text" placeholder="Project Complexity" onChange={(e) => setWorkData({ ...workData, projectComplexity: e.target.value })} />
        <input type="text" placeholder="Skill Level" onChange={(e) => setWorkData({ ...workData, skillLevel: e.target.value })} />
        <button onClick={handleAssignTokens} className="mt-2 p-2 bg-green-500 text-white">Assign Tokens</button>
      </div>
    </div>
  );
};

export default TokenizedWorkDashboard;
