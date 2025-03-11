import express from "express";
import {
  createProposal,
  castVote,
  getProposalResults,
} from "../services/smartVotingService.js";

// AI-powered decentralized voting & governance.

const router = express.Router();

/**
 * @route POST /api/smart-voting/propose
 * @desc Creates a new decentralized governance proposal.
 */
router.post("/propose", async (req, res) => {
  try {
    const { proposalName, description } = req.body;
    if (!proposalName || !description) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const proposal = await createProposal(proposalName, description);
    res.json(proposal);
  } catch (error) {
    console.error("Error creating proposal:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/smart-voting/vote
 * @desc Casts an AI-governed vote for a proposal.
 */
router.post("/vote", async (req, res) => {
  try {
    const { proposalId, vote, tokensStaked } = req.body;
    if (!proposalId || !vote || !tokensStaked) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const voteResult = await castVote(proposalId, vote, tokensStaked);
    res.json(voteResult);
  } catch (error) {
    console.error("Error casting vote:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route GET /api/smart-voting/results/:proposalId
 * @desc Fetches the voting results of a governance proposal.
 */
router.get("/results/:proposalId", async (req, res) => {
  try {
    const proposalId = req.params.proposalId;
    const results = await getProposalResults(proposalId);
    res.json(results);
  } catch (error) {
    console.error("Error fetching proposal results:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
