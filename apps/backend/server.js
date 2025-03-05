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
import turnoverPredictorRoutes from "./src/routes/turnoverPredictor.routes.js";
import futureSkillTrendsRoutes from "./src/routes/futureSkillTrends.routes.js";
import adaptiveWorkforceRoutes from "./src/routes/adaptiveWorkforce.routes.js";
import reskillingPathwaysRoutes from "./src/routes/reskillingPathways.routes.js";
import enterprizeWorkforceCostRoutes from "./src/routes/enterpriseWorkforceCost.routes.js";
import talentMobilityRoutes from "./src/routes/talentMobility.routes.js";
import enterpriseRecruitmentRoutes from "./src/routes/enterpriseRecruitment.routes.js";
import corporateTurnoverRiskRoutes from "./src/routes/corporateTurnoverRisk.routes.js";
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
// // Sprint 49 AI-powered Resume & Application Automation
import resumeEnhancementRoutes from "./routes/resumeEnhancement.routes.js";
import portfolioGeneratorRoutes from "./routes/portfolioGenerator.routes.js";
import coverLetterRoutes from "./routes/coverLetter.routes.js";
import applicationAutomationRoutes from "./routes/applicationAutomation.routes.js";
// // Sprint 50 AI-Powered Gig Economy Automation
import freelancerCareerRoutes from "./routes/freelancerCareer.routes.js";
import gigMatchingRoutes from "./routes/gigMatching.routes.js";
// // Sprint 51 Workforce Planning APIs
import enterpriseWorkforceRoutes from "./routes/enterpriseWorkforce.routes.js";
import workforceForecastingRoutes from "./routes/workforceForecasting.routes.js";
import talentRedistributionRoutes from "./routes/talentRedistribution.routes.js";
// // Sprint 52 AI-Powered Internal Talent Mobility Routes
import internalJobRotationRoutes from "./routes/internalJobRotation.routes.js";
import successionPlanningRoutes from "./src/routes/successionPlanning.routes.js";
import skillTransitionRoutes from "./routes/skillTransition.routes.js";
// // Sprint 53 AI-Powered Employee Lifecycle Automation
import employeeOnboardingRoutes from "./routes/employeeOnboarding.routes.js";
import hrChatbotRoutes from "./routes/hrChatbot.routes.js";
import performanceReviewRoutes from "./routes/performanceReview.routes.js";
import employeeEngagementRoutes from "./src/routes/employeeEngagement.routes.js";
// // Sprint 54 Register AI-powered workforce well-being & retention routes
import wellBeingRoutes from "./routes/wellBeing.routes.js";
import mentalHealthAssistantRoutes from "./routes/mentalHealthAssistant.routes.js";
import teamPerformanceRoutes from "./routes/teamPerformance.routes.js";
// // Sprint 55 AI-Powered HR Automation Routes
import hrAutomationRoutes from "./routes/hrAutomation.routes.js";
import regulatoryComplianceRoutes from "./routes/regulatoryCompliance.routes.js";
import ethicsGovernanceRoutes from "./routes/ethicsGovernance.routes.js";
// // Sprint 56  Register AI-powered Global Hiring & Relocation APIs
import globalHiringRoutes from "./routes/globalHiring.routes.js";
import workVisaAutomationRoutes from "./routes/workVisaAutomation.routes.js";
import multiCountrySalaryRoutes from "./routes/multiCountrySalary.routes.js";
// // Sprint 57 Workforce Sustainability & DEI Routes
import deiAnalyticsRoutes from "./routes/deiAnalytics.routes.js";
import sustainableWorkforceRoutes from "./routes/sustainableWorkforce.routes.js";
import ethicalHiringRoutes from "./routes/ethicalHiring.routes.js";
// // Sprint 58 Gig Economy 2.0
import gigMarketplaceRoutes from "./routes/gigMarketplace.routes.js";
import blockchainContractsRoutes from "./routes/blockchainContracts.routes.js";
import gigPaymentsRoutes from "./routes/gigPayments.routes.js";
import freelancerFinanceRoutes from "./routes/freelancerFinance.routes.js";
// // Sprint 59 Register Leadership Development API Routes
import leadershipTrainingRoutes from "./routes/leadershipTraining.routes.js";
import aiMentorshipCoachRoutes from "./routes/aiMentorshipCoach.routes.js";
import strategicLeadershipRoutes from "./routes/strategicLeadership.routes.js";
// // Sprint 60 AI-Powered Workforce Planning Automation
import predictiveWorkforceRoutes from "./routes/predictiveWorkforce.routes.js";
import autonomousHRAssistantRoutes from "./routes/autonomousHRAssistant.routes.js";
import aiJobSeekerRoutes from "./routes/aiJobSeeker.routes.js";
import globalWorkforceOrchestratorRoutes from "./routes/globalWorkforceOrchestrator.routes.js";
// //  Sprint 61 Register AI-Powered Workforce Team API Routes
import autonomousTeamRoutes from "./routes/autonomousTeam.routes.js";
import taskDelegationRoutes from "./routes/taskDelegation.routes.js";
import collaborationTrackingRoutes from "./routes/collaborationTracking.routes.js";
// // Sprint 62 AI-powered dynamic job role routes
import dynamicRoleRoutes from "./routes/dynamicRole.routes.js";
import roleTransitionRoutes from "./routes/roleTransition.routes.js";
import adaptiveReskillingRoutes from "./routes/adaptiveReskilling.routes.js";
// // Server 63 AI-Powered Workforce Collaboration API Routes
import collaborationAssistantRoutes from "./routes/collaborationAssistant.routes.js";
import meetingAutomationRoutes from "./routes/meetingAutomation.routes.js";
import realTimeFeedbackRoutes from "./routes/realTimeFeedback.routes.js";
// // Sprint 64 AI-Powered Workplace Automation Routes
import hrProcessAutomationRoutes from "./routes/hrProcessAutomation.routes.js";
import performancePredictionRoutes from "./routes/performancePrediction.routes.js";
import workflowAutomationRoutes from "./routes/workflowAutomation.routes.js";
// // Sprint 65 Register AI-powered Employee Digital Twin API Routes
import employeeDigitalTwinRoutes from "./routes/employeeDigitalTwin.routes.js";
import workloadBalancingRoutes from "./routes/workloadBalancing.routes.js";
import leadershipDecisionRoutes from "./routes/leadershipDecision.routes.js";
// // Sprint 66 AI-Powered Emotion & Sentiment-Driven Workplaces
import emotionAwareHRPolicyRoutes from "./routes/emotionAwareHRPolicy.routes.js";
import teamMoodOptimizationRoutes from "./routes/teamMoodOptimization.routes.js";
import realTimeWellnessRoutes from "./routes/realTimeWellness.routes.js";
// // Sprint 67 AI-Powered Ethical & Bias-Free AI Workforces
import biasEliminationRoutes from "./routes/biasElimination.routes.js";
import aiComplianceMonitorRoutes from "./routes/aiComplianceMonitor.routes.js";
// // Sprint 68 AI-powered Smart Legal Automation API routes
import smartWorkContractsRoutes from "./routes/smartWorkContracts.routes.js";
import contractPerformanceRoutes from "./routes/contractPerformance.routes.js";
// // Sprint 69 AI-Powered Global AI Workforce Governance
import aiWorkforcePolicyRoutes from "./routes/aiWorkforcePolicy.routes.js";
import laborLawComplianceRoutes from "./routes/laborLawCompliance.routes.js";
import regulatoryRiskRoutes from "./routes/regulatoryRisk.routes.js";
// // Sprint 70 AI-Powered Job Market Predictive Intelligence
import economicWorkforceRoutes from "./routes/economicWorkforce.routes.js";
import globalHiringTrendsRoutes from "./routes/globalHiringTrends.routes.js";
import economicForecastRoutes from "./routes/economicForecast.routes.js";
// // Sprint 71 AI-Powered Virtual Workspaces
import metaverseWorkspacesRoutes from "./routes/metaverseWorkspaces.routes.js";
import vrJobInterviewsRoutes from "./routes/vrJobInterviews.routes.js";
import holographicMeetingsRoutes from "./routes/holographicMeetings.routes.js";
import aiWorkAssistantRoutes from "./routes/aiWorkAssistant.routes.js";
// // Sprint 72 AI-powered DAOs & Decentralized Workforces
import decentralizedCompanyRoutes from "./routes/decentralizedCompany.routes.js";
import tokenizedWorkRoutes from "./routes/tokenizedWork.routes.js";
import smartVotingRoutes from "./routes/smartVoting.routes.js";
// // Sprint 73 AI-Powered Work in the Web3 Ecosystem
import web3WorkforceRoutes from "./routes/web3Workforce.routes.js";
import nftJobCredentialsRoutes from "./routes/nftJobCredentials.routes.js";
import blockchainCredibilityRoutes from "./routes/blockchainCredibility.routes.js";
// // Sprint 74 AI-Powered Digital Nomad Ecosystem
import nomadJobMatchingRoutes from "./routes/nomadJobMatching.routes.js";
import locationBasedHiringRoutes from "./routes/locationBasedHiring.routes.js";
import nomadWorkVisaRoutes from "./routes/nomadWorkVisa.routes.js";


const app = express();
const PORT = 5001; // Change to match your backend port

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

// // Sprint 49 AI-powered Resume & Application Automation
app.use("/api/resume-enhancement", resumeEnhancementRoutes);

app.use("/api/portfolio-generator", portfolioGeneratorRoutes);

app.use("/api/cover-letter", coverLetterRoutes);

app.use("/api/application-automation", applicationAutomationRoutes);

// // Sprint 50 AI-Powered Gig Economy Automation
app.use("/api/freelancer-career", freelancerCareerRoutes);

app.use("/api/gig-matching", gigMatchingRoutes);


// // Sprint 51 Workforce Planning APIs
app.use("/api/enterprise-workforce", enterpriseWorkforceRoutes);

app.use("/api/workforce-forecasting", workforceForecastingRoutes);

app.use("/api/talent-redistribution", talentRedistributionRoutes);

// // Sprint 52 AI-Powered Internal Talent Mobility Routes
app.use("/api/internal-job-rotation", internalJobRotationRoutes);

app.use("/api/succession-planning", successionPlanningRoutes);

app.use("/api/skill-transition", skillTransitionRoutes);

// // Sprint 53 AI-Powered Employee Lifecycle Automation
app.use("/api/employee-onboarding", employeeOnboardingRoutes);

app.use("/api/hr-chatbot", hrChatbotRoutes);

app.use("/api/performance-review", performanceReviewRoutes);

app.use("/api/employee-engagement", employeeEngagementRoutes);

// // Sprint 54 Register AI-powered workforce well-being & retention routes
app.use("/api/well-being", wellBeingRoutes);

app.use("/api/mental-health", mentalHealthAssistantRoutes);

app.use("/api/team-performance", teamPerformanceRoutes);

// // Sprint 55 AI-Powered HR Automation Routes
app.use("/api/hr-automation", hrAutomationRoutes);

app.use("/api/regulatory-compliance", regulatoryComplianceRoutes);

app.use("/api/ethics-governance", ethicsGovernanceRoutes);

// // Sprint 56  Register AI-powered Global Hiring & Relocation APIs
app.use("/api/global-hiring", globalHiringRoutes);

app.use("/api/work-visa", workVisaAutomationRoutes);

app.use("/api/multi-country-salary", multiCountrySalaryRoutes);

// // Sprint 57 Workforce Sustainability & DEI Routes
app.use("/api/dei-analytics", deiAnalyticsRoutes);

app.use("/api/sustainable-workforce", sustainableWorkforceRoutes);

app.use("/api/ethical-hiring", ethicalHiringRoutes);

// // Sprint 58 Gig Economy 2.0
app.use("/api/gig-marketplace", gigMarketplaceRoutes);

app.use("/api/blockchain-contracts", blockchainContractsRoutes);

app.use("/api/gig-payments", gigPaymentsRoutes);

app.use("/api/freelancer-finance", freelancerFinanceRoutes);

// // Sprint 59 Register Leadership Development API Routes
app.use("/api/leadership-training", leadershipTrainingRoutes);

app.use("/api/mentorship-coach", aiMentorshipCoachRoutes);

app.use("/api/strategic-leadership", strategicLeadershipRoutes);

// // Sprint 60 AI-Powered Workforce Planning Automation
app.use("/api/predictive-workforce", predictiveWorkforceRoutes);

app.use("/api/hr-assistant", autonomousHRAssistantRoutes);

app.use("/api/ai-job-seeker", aiJobSeekerRoutes);

app.use("/api/global-workforce", globalWorkforceOrchestratorRoutes);

// //  Sprint 61 Register AI-Powered Workforce Team API Routesapp.
app.use("/api/autonomous-team", autonomousTeamRoutes);

app.use("/api/task-delegation", taskDelegationRoutes);

app.use("/api/collaboration-tracking", collaborationTrackingRoutes);

// // Sprint 62 AI-powered dynamic job role routes
app.use("/api/dynamic-role", dynamicRoleRoutes);

app.use("/api/role-transition", roleTransitionRoutes);

app.use("/api/adaptive-reskilling", adaptiveReskillingRoutes);

// // Server 63 AI-Powered Workforce Collaboration API Routes
app.use("/api/collaboration-assistant", collaborationAssistantRoutes);

app.use("/api/meeting-automation", meetingAutomationRoutes);

app.use("/api/real-time-feedback", realTimeFeedbackRoutes);

// // Sprint 64 AI-Powered Workplace Automation Routes
app.use("/api/hr-process-automation", hrProcessAutomationRoutes);

app.use("/api/performance-prediction", performancePredictionRoutes);

app.use("/api/workflow-automation", workflowAutomationRoutes);

// // Sprint 65 Register AI-powered Employee Digital Twin API Routes
app.use("/api/employee-digital-twin", employeeDigitalTwinRoutes);

app.use("/api/workload-balancing", workloadBalancingRoutes);

app.use("/api/leadership-decision", leadershipDecisionRoutes);

// // Sprint 66 AI-Powered Emotion & Sentiment-Driven Workplaces
app.use("/api/emotion-aware-hr", emotionAwareHRPolicyRoutes);

app.use("/api/team-mood", teamMoodOptimizationRoutes);

app.use("/api/wellness", realTimeWellnessRoutes);

// // Sprint 67 AI-Powered Ethical & Bias-Free AI Workforces
app.use("/api/bias-elimination", biasEliminationRoutes);

app.use("/api/ai-compliance-monitor", aiComplianceMonitorRoutes);

// // Sprint 68 AI-powered Smart Legal Automation API routes
app.use("/api/smart-contracts", smartWorkContractsRoutes);

app.use("/api/contract-performance", contractPerformanceRoutes);

// // Sprint 69 AI-Powered Global AI Workforce Governance
app.use("/api/workforce-policy", aiWorkforcePolicyRoutes);

app.use("/api/labor-law-compliance", laborLawComplianceRoutes);

app.use("/api/regulatory-risk", regulatoryRiskRoutes);

// // Sprint 70 AI-Powered Job Market Predictive Intelligence
app.use("/api/economic-workforce", economicWorkforceRoutes);

app.use("/api/global-hiring-trends", globalHiringTrendsRoutes);

app.use("/api/economic-forecast", economicForecastRoutes);

// // Sprint 71 AI-Powered Virtual Workspaces
app.use("/api/metaverse-workspaces", metaverseWorkspacesRoutes);

app.use("/api/vr-job-interviews", vrJobInterviewsRoutes);

app.use("/api/holographic-meetings", holographicMeetingsRoutes);

app.use("/api/ai-work-assistant", aiWorkAssistantRoutes);

// // Sprint 72 AI-powered DAOs & Decentralized Workforces
app.use("/api/decentralized-company", decentralizedCompanyRoutes);

app.use("/api/tokenized-work", tokenizedWorkRoutes);

app.use("/api/smart-voting", smartVotingRoutes);

// // Sprint 73 AI-Powered Work in the Web3 Ecosystem
app.use("/api/web3-workforce", web3WorkforceRoutes);

app.use("/api/nft-job-credentials", nftJobCredentialsRoutes);

app.use("/api/blockchain-credibility", blockchainCredibilityRoutes);

// // Sprint 74 AI-Powered Digital Nomad Ecosystem
app.use("/api/nomad-job-matching", nomadJobMatchingRoutes);

app.use("/api/location-based-hiring", locationBasedHiringRoutes);

app.use("/api/nomad-work-visa", nomadWorkVisaRoutes);


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

// Start server
app.listen(PORT, () => {
    console.log(`✅ Backend is running on port ${PORT}`);
});