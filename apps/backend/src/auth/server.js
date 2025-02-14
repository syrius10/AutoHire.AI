import express from "express";
import cors from "cors";
import { Server } from "socket.io"; // ✅ Import Socket.IO
import http from "http"; // ✅ Import HTTP module
import authRoutes from "../auth/auth.routes.js";
import jobRoutes from "../routes/jobs.routes.js";
import matchRoutes from "../routes/matching.routes.js";
import evaluationRoutes from "../routes/evaluation.routes.js";
import interviewRoutes from "../routes/interview.routes.js";
import analyticsRoutes from "../routes/analytics.routes.js";
import recommendationRoutes from "../routes/recommendation.routes.js";
import integrationsRoutes from "../routes/integrations.routes.js";
import engagementRoutes from "../routes/engagement.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Register API routes BEFORE starting the server
app.use('/api/auth', authRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/match", matchRoutes);

app.use("/api/evaluate", evaluationRoutes);

app.use("/api/interviews", interviewRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use("/api/recommendations", recommendationRoutes);

app.use("/api/integrations", integrationsRoutes);

app.use("/api/engagement", engagementRoutes);

// ✅ Create HTTP server & WebSocket server
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" },
});


// ✅ WebSocket event listeners
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("sendMessage", (message) => {
        io.emit("receiveMessage", message);
    });

    socket.on("disconnect", () => console.log("User disconnected"));
});

// ✅ Start the server (REPLACES `app.listen`)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));