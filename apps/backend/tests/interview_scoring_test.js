import { analyzeInterviewScore } from "../src/services/interviewScoringService";

test("AI intervview score aligns with recruiter evaluation", async () => {
  const aiScore = await analyzeInterviewScore("Candidate's response text");
  const recruiterScore = 85; // Simulated recruiter evaluation

  expect(aiScore).toBeGreaterThanOrEqual(recruiterScore - 5);
  expect(aiScore).toBeLessThanOrEqual(recruiterScore + 5);
});
