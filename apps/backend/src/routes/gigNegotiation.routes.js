import express from "express";
import { negotiateWorkTerms } from "../services/gigNegotiationService.js";

/*
Handles AI-driven freelancer negotiation for:

Work terms
Compensation agreements
Contract optimization
*/

const router = express.Router();

/**
 * @route POST /api/gig-negotiation/negotiate
 * @desc AI-powered negotiation for freelance work terms & contracts
 */
router.post("/negotiate", async (req, res) => {
  try {
    const { freelancerId, employerId, jobDetails, initialOffer } = req.body;

    if (!freelancerId || !employerId || !jobDetails || !initialOffer) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const negotiationResult = await negotiateWorkTerms(
      freelancerId,
      employerId,
      jobDetails,
      initialOffer,
    );

    res.json(negotiationResult);
  } catch (error) {
    console.error("Error in AI-powered negotiation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
