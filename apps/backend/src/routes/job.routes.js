import { checkRole } from "../middleware/authMiddleware.js";

router.post("/create", checkRole(["recruiter", "admin"]), async (req, res) => {
  // Only recruiters and admins can create job posts
});
