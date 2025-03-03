import { useEffect, useState } from "react";
import { fetchProposalResults, createProposal, castVote } from "../services/smartVotingService";

// AI-powered decentralized governance & voting system.

const SmartVotingDashboard = () => {
  const [proposals, setProposals] = useState([]);
  const [newProposal, setNewProposal] = useState({ name: "", description: "" });
  const [voteData, setVoteData] = useState({ proposalId: "", vote: "", tokensStaked: "" });

  useEffect(() => {
    fetchProposalResults().then(setProposals);
  }, []);

  const handleCreateProposal = async () => {
    if (newProposal.name && newProposal.description) {
      const response = await createProposal(newProposal);
      alert(`Proposal Created: ${response.name}`);
    }
  };

  const handleCastVote = async () => {
    if (voteData.proposalId && voteData.vote && voteData.tokensStaked) {
      const response = await castVote(voteData);
      alert(`Vote Cast: ${response.status}`);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">🗳️ AI-Powered Smart Voting</h2>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Create a Proposal</h3>
        <input type="text" placeholder="Proposal Name" onChange={(e) => setNewProposal({ ...newProposal, name: e.target.value })} />
        <input type="text" placeholder="Description" onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })} />
        <button onClick={handleCreateProposal} className="mt-2 p-2 bg-purple-500 text-white">Create Proposal</button>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-bold">Vote on a Proposal</h3>
        <input type="text" placeholder="Proposal ID" onChange={(e) => setVoteData({ ...voteData, proposalId: e.target.value })} />
        <input type="text" placeholder="Vote (Yes/No)" onChange={(e) => setVoteData({ ...voteData, vote: e.target.value })} />
        <input type="number" placeholder="Tokens Staked" onChange={(e) => setVoteData({ ...voteData, tokensStaked: e.target.value })} />
        <button onClick={handleCastVote} className="mt-2 p-2 bg-red-500 text-white">Cast Vote</button>
      </div>

      <h3 className="text-xl font-bold mt-6">Proposal Results</h3>
      <ul>
        {proposals.map((proposal) => (
          <li key={proposal.id}>{proposal.name}: {proposal.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default SmartVotingDashboard;
