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
import enterprizeWorkforceCostRoutes from "./src/routes/enterpriseWorkforceCost.routes.js";
import talentMobilityRoutes from "./src/routes/talentMobility.routes.js";
import enterpriseRecruitmentRoutes from "./src/routes/enterpriseRecruitment.routes.js";
import corporateTurnoverRiskRoutes from "./src/routes/corporateTurnoverRisk.routes.js";
import employeeEngagementRoutes from "./src/routes/employeeEngagement.routes.js";
import burnoutRiskRoutes from "./src/routes/burnoutRisk.routes.js";
import wellBeingRecommendationRoutes from "./src/routes/wellBeingRecommendation.routes.js";
import proactiveRetentionRoutes from "./src/routes/proactiveRetention.routes.js";
import executiveTalentRoutes from "./src/routes/executiveTalent.routes.js";
import leadershipSuccessionRoutes from "./src/routes/leadershipSuccession.routes.js";
import executivePerformanceRoutes from "./src/routes/executivePerformance.routes.js";
import highPotentialLeadersRoutes from "./src/routes/highPotentialLeaders.routes.js";
import workforceIntegrationRoutes from "./src/routes/workforceIntegration.routes.js";
import restructuringImpactRoutes from "./src/routes/restructuringImpact.routes.js";
import postAcquisitionRetentionRoutes from "./src/routes/postAcquisitionRetention.routes.js";
import enterpriseSkillsGapRoutes from "./src/routes/enterpriseSkillsGap.routes.js";
import globalTalentRoutes from "./src/routes/globalTalent.routes.js";
import multilingualRecruitmentRoutes from "./src/routes/multilingualRecruitment.routes.js";
import legalComplianceRoutes from "./src/routes/legalCompliance.routes.js";
import automatedVisaScreeningRoutes from "./src/routes/automatedVisaScreening.routes.js";
import freelanceTalentMatchingRoutes from "./src/routes/freelanceTalentMatching.routes.js";
import gigWorkDemandRoutes from "./src/routes/gigWorkDemand.routes.js";
import freelancerSuccessPredictionRoutes from "./src/routes/freelancerSuccessPrediction.routes.js";
import contractRiskAssessmentRoutes from "./src/routes/contractRiskAssessment.routes.js";
import smartContractRoutes from "./src/routes/smartContract.routes.js";
import fraudDetectionRoutes from "./src/routes/fraudDetection.routes.js";
import escrowPaymentRoutes from "./src/routes/escrowPayment.routes.js";
import disputeResolutionRoutes from "./src/routes/disputeResolution.routes.js";
import dynamicPricingRoutes from "./src/routes/dynamicPricing.routes.js";
import freelanceMarketTrendsRoutes from "./src/routes/freelanceMarketTrends.routes.js";
import competitionAnalysisRoutes from "./src/routes/competitionAnalysis.routes.js";
import earningsForecastRoutes from "./src/routes/earningsForecast.routes.js";
import freelancerReputationRoutes from "./src/routes/freelancerReputation.routes.js";
import reviewValidationRoutes from "./src/routes/reviewValidation.routes.js";
import fraudulentProfileDetectionRoutes from "./src/routes/fraudulentProfileDetection.routes.js";
import clientTrustScoreRoutes from "./src/routes/clientTrustScore.routes.js";
import freelanceNetworkRoutes from "./src/routes/freelanceNetwork.routes.js";
import projectRecommendationRoutes from "./src/routes/projectRecommendation.routes.js";
import smartEscrowRoutes from "./src/routes/smartEscrow.routes.js";
import trustScoreRoutes from "./src/routes/trustScore.routes.js";
// // SPRINT 46 AI-Powered Career Coaching & Upskilling
import careerPathRoutes from "./routes/careerPath.routes.js";
import personalizedLearningRoutes from "./routes/personalizedLearning.routes.js";
import smartReskillingRoutes from "./routes/smartReskilling.routes.js";
import skillGapEnhancementRoutes from "./routes/skillGapEnhancement.routes.js";
// // SPRINT 47 AI-Driven Job Market Intelligence
import jobMarketTrendsRoutes from "./routes/jobMarketTrends.routes.js";
import salaryBenchmarkingRoutes from "./routes/salaryBenchmarking.routes.js";
import industryDemandPredictionRoutes from "./routes/industryDemandPrediction.routes.js";
// // Sprint 48 AI-Powered Hiring Agents API Routes
import autonomousRecruiterRoutes from "./routes/autonomousRecruiter.routes.js";
import employerCandidateRoutes from "./routes/employerCandidate.routes.js";
import interviewSchedulerRoutes from "./src/routes/interviewScheduler.routes.js";

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

app.use("/api/enterprize-workforce-cost", enterprizeWorkforceCostRoutes);

app.use("/api/talent-mobility", talentMobilityRoutes);

app.use("/api/enterprise-recruitment", enterpriseRecruitmentRoutes);

app.use("/api/corporate-turnover-risk", corporateTurnoverRiskRoutes);

app.use("/api/employee-engagement", employeeEngagementRoutes);

app.use("/api/burnout", burnoutRiskRoutes);

app.use("/api/wellbeing", wellBeingRecommendationRoutes);

app.use("/api/retention", proactiveRetentionRoutes);

app.use("/api/executive-talent", executiveTalentRoutes);

app.use("/api/leadership-succession", leadershipSuccessionRoutes);

app.use("/api/executive-performance", executivePerformanceRoutes);

app.use("/api/high-potential-leaders", highPotentialLeadersRoutes);

app.use("/api/workforce-integration", workforceIntegrationRoutes);

app.use("/api/restructuring-impact", restructuringImpactRoutes);

app.use("/api/post-acquisition-retention", postAcquisitionRetentionRoutes);

app.use("/api/enterprise-skills-gap", enterpriseSkillsGapRoutes);

app.use("/api/global-talent", globalTalentRoutes);

app.use("/api/multilingual-recruitment", multilingualRecruitmentRoutes);

app.use("/api/legal-compliance", legalComplianceRoutes);

app.use("/api/visa-screening", automatedVisaScreeningRoutes);

app.use("/api/freelance-talent-matching", freelanceTalentMatchingRoutes);

app.use("/api/gig-work-demand", gigWorkDemandRoutes);

app.use("/api/freelancer-success", freelancerSuccessPredictionRoutes);

app.use("/api/contract-risk", contractRiskAssessmentRoutes);

app.use("/api/smart-contract", smartContractRoutes);

app.use("/api/fraud-detection", fraudDetectionRoutes);

app.use("/api/escrow-payment", escrowPaymentRoutes);

app.use("/api/dispute-resolution", disputeResolutionRoutes);

app.use("/api/dynamic-pricing", dynamicPricingRoutes);

app.use("/api/freelance-trends", freelanceMarketTrendsRoutes);

app.use("/api/competition-analysis", competitionAnalysisRoutes);

app.use("/api/earnings-forecast", earningsForecastRoutes);

app.use("/api/freelancer-reputation", freelancerReputationRoutes);

app.use("/api/review-validation", reviewValidationRoutes);

app.use("/api/fraudulent-profile-detection", fraudulentProfileDetectionRoutes);

app.use("/api/client-trust-score", clientTrustScoreRoutes);

app.use("/api/freelance-network", freelanceNetworkRoutes);

app.use("/api/project-recommendation", projectRecommendationRoutes);

app.use("/api/smart-escrow", smartEscrowRoutes);

app.use("/api/trust-score", trustScoreRoutes);

// // SPRINT 46 AI-Powered Career Coaching & Upskilling

app.use("/api/career-path", careerPathRoutes);

app.use("/api/personalized-learning", personalizedLearningRoutes);

app.use("/api/smart-reskilling", smartReskillingRoutes);

app.use("/api/skill-gap-enhancement", skillGapEnhancementRoutes);

// // SPRINT 47 AI-Driven Job Market Intelligence

app.use("/api/job-market-trends", jobMarketTrendsRoutes);

app.use("/api/salary-benchmarking", salaryBenchmarkingRoutes);

app.use("/api/industry-demand-prediction", industryDemandPredictionRoutes);

// // Sprint 48 AI-Powered Hiring Agents API Routes
app.use("/api/autonomous-recruiter", autonomousRecruiterRoutes);

app.use("/api/employer-candidate", employerCandidateRoutes);

app.use("/api/interview-scheduler", interviewSchedulerRoutes);  // Unified interview scheduling

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