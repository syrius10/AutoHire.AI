import { SmartVotingAI } from "../../ai-services/smartVotingAI.js";

// Manages AI-powered decentralized voting.

const votingAI = new SmartVotingAI();

export const createProposal = async (proposalName, description) => {
  return votingAI.create_proposal(proposalName, description);
};

export const castVote = async (proposalId, vote, tokensStaked) => {
  return votingAI.cast_vote(proposalId, vote, tokensStaked);
};

export const getProposalResults = async (proposalId) => {
  return votingAI.get_proposal_results(proposalId);
};
