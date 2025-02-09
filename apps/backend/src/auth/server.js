import express from "express";
import cors from "cors";
import authRoutes from "../auth/auth.routes.js";
import jobRoutes from "../routes/jobs.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use("/api/jobs", jobRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));