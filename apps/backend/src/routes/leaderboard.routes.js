import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { name: "Alice", score: 98 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 78 },
  ]);
});

export default router;
