import { pool } from "../db.js";

/**
 * Track candidate engagement metrics
 */
export const trackEngagement = async (candidateId, eventType) => {
  await pool.query(
    "INSERT INTO engagement_tracking (candidate_id, event_type, timestamp) VALUES ($1, $2, NOW())",
    [candidateId, eventType],
  );
};

/**
 * Get engagement statistics
 */
export const getEngagementStats = async () => {
  const { rows } = await pool.query(
    "SELECT event_type, COUNT(*) as count FROM engagement_tracking GROUP BY event_type",
  );
  return rows;
};
