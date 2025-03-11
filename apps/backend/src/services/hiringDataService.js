import db from "../db";

export const getCandidateHistory = async (candidateId) => {
  const result = await db.query(
    "SELECT jobs_applied, jobs_hired FROM candidate_history WHERE candidate_id = $1",
    [candidateId],
  );
  return result.rows[0];
};

export const refineJobMatch = async (candidateId, jobScore) => {
  const history = await getCandidateHistory(candidateId);

  if (!history) return jobScore;

  const adjustmentFactor = history.jobs_hired > 3 ? 1.1 : 0.9; // Boost if candidate has multiple job successes
  return Math.min(jobScore * adjustmentFactor, 100);
};
