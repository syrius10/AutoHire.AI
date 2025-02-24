import express from "express";
import cors from "cors";
import { Server } from "socket.io"; // ✅ Import Socket.IO
import http from "http"; // ✅ Import HTTP module
import userAuthRoutes from "./src/auth/userAuth.routes.js";
import jobRoutes from "./src/routes/jobs.routes.js";
import matchRoutes from "./src/routes/matching.routes.js";
import evaluationRoutes from "./src/routes/evaluation.routes.js";
import interviewRoutes from "./src/routes/interview.routes.js";
import analyticsRoutes from "./src/routes/analytics.routes.js";
import recommendationRoutes from "./src/routes/recommendation.routes.js";
import integrationsRoutes from "./src/routes/integrations.routes.js";
import engagementRoutes from "./src/routes/engagement.routes.js";
import { cacheMiddleware } from "./src/middleware/cache.js";
import apiAuthRoutes from "./src/routes/apiAuthAuth.routes.js"; 
import autoScreeningRoutes from "./src/routes/autoScreening.routes.js";
import interviewSchedulerRoutes from "./src/routes/interviewScheduler.routes.js";
import backgroundCheckRoutes from "./src/routes/backgroundCheck.routes.js";
import apiRoutes from "./src/routes/api.routes.js";
import paymentRoutes from "./src/routes/payment.routes.js";
import globalizationRoutes from "./src/routes/globalization.routes.js";
import videoInterviewAnalysisRoutes from "./src/routes/videoInterviewAnalysis.routes.js";
import AIJobDescriptionRoutes from "./src/routes/aiJobDescription.routes.js";
import autoHireMobileRoutes from "./src/routes/autoHireMobile.routes.js";
import marketplaceRoutes from "./src//routes/marketplace.routes.js";
import workforceRoutes from "./src/routes/workforce.routes.js";  // ✅ Added Workforce Routes
import workforceInsightsRoutes from "./src/routes/workforceInsights.routes.js";
import workforceCostRoutes from "./src/routes/workforceCost.routes.js";
import efficiencyAnalysisRoutes from "./src/routes/efficiencyAnalysis.routes.js";
import predictiveTalentRoutes from "./src/routes/predictiveTalent.routes.js";
import efficiencyPredictorRoutes from "./src/routes/efficiencyPredictor.routes.js";
import successionPlanningRoutes from "./src/routes/successionPlanning.routes.js";
import turnoverPredictorRoutes from "./src/routes/turnoverPredictor.routes.js";
import futureSkillTrendsRoutes from "./src/routes/futureSkillTrends.routes.js";
import adaptiveWorkforceRoutes from "./src/routes/adaptiveWorkforce.routes.js";
import reskillingPathwaysRoutes from "./src/routes/reskillingPathways.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Register API routes BEFORE starting the server
app.use('/auth', userAuthRoutes);

app.use("/api/jobs", jobRoutes);

app.use("/api/match", matchRoutes);

app.use("/api/evaluate", evaluationRoutes);

app.use("/api/interviews", interviewRoutes);

app.use("/api/analytics", analyticsRoutes);

app.use("/api/recommendations", recommendationRoutes);

app.use("/api/integrations", integrationsRoutes);

app.use("/api/engagement", engagementRoutes);

app.use("/api/jobs", cacheMiddleware);

app.use("/api/analytics", cacheMiddleware);

app.use("/api/auth", apiAuthRoutes);

app.use("/api/auto-screening", autoScreeningRoutes);

app.use("/api/interview-scheduler", interviewSchedulerRoutes);

app.use("/api/background-check", backgroundCheckRoutes);

app.use("/api/v1", apiRoutes);

app.use("/api/payments", paymentRoutes);

app.use("/api/globalization", globalizationRoutes);

app.use("/api/video-interview", videoInterviewAnalysisRoutes);

app.use("/api/ai-job-description", AIJobDescriptionRoutes);

app.use("/api/marketplace", marketplaceRoutes);

app.use("/api/mobile", autoHireMobileRoutes);

app.use("/api/workforce", workforceRoutes);  // ✅ New Workforce Planning API

app.use("/api/workforce-insights", workforceInsightsRoutes);

app.use("/api/workforce-cost", workforceCostRoutes);

app.use("/api/efficiency-analysis", efficiencyAnalysisRoutes);

app.use("/api/talent", predictiveTalentRoutes);

app.use("/api/efficiency", efficiencyPredictorRoutes);

app.use("/api/succession", successionPlanningRoutes);

app.use("/api/turnover", turnoverPredictorRoutes);

app.use("/api/future-skills", futureSkillTrendsRoutes);

app.use("/api/adaptive-workforce", adaptiveWorkforceRoutes);

app.use("/api/reskilling-training", reskillingPathwaysRoutes);


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