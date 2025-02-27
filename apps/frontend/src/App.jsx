import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Lazy load components for better performance
const Home = lazy(() => import("./pages/Home"));
const JobList = lazy(() => import("./pages/JobList"));
const JobRecommendations = lazy(() => import("./pages/JobRecommendations"));
const AnalyticsDashboard = lazy(() => import("./pages/AnalyticsDashboard"));
const Integrations = lazy(() => import("./pages/Integrations"));
const InterviewAnalysis = lazy(() => import("./pages/InterviewAnalysis"));
const ScheduleInterview = lazy(() => import("./pages/ScheduleInterview"));
const Chat = lazy(() => import("./pages/Chat"));
const PaymentDashboard = lazy(() => import("./pages/PaymentDashboard"));
const Leaderboard = lazy(() => import("./pages/Leaderboard"));
const CareerInsightsDashboard = lazy(() => import("./pages/CareerInsightsDahsboard"));
const AIInterviewDahsboard = lazy(() => import("./pages/AIInterviewDahsboard"));
const EngagementDahsboard = lazy(() => import("./pages/EngagementDahsboard"));
const AutoScreeningDashboard = lazy(() => import("./pages/AutoScreeningDashboard"));
const SkillGapDashboard = lazy(() => import("./pages/SkillGapDashboard"));
const SalaryDahsboard = lazy(() => import("./pages/SalaryDashboard"));
const GlobalizationDashboard = lazy(() => import("./pages/GlobalizationDashboard"));
const VideoInterviewAnalysis = lazy(() => import("./pages/VideoInterviewAnalysis"));
const AIJobDescription = lazy(() => import("./pages/AIJobDescription"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const APIManagement = lazy(() => import("./pages/APIManagement"));
const AutoHireMobile = lazy(() => import("./pages/AutoHireMobile"));
const WorkforceDashboard = lazy(() => import("./pages/WorkforceDashboard"));  // ✅ New Workforce Page
const WorkforceIntelligenceDashboard = lazy(() => import("./pages/WorkforceIntelligenceDashboard")); // ✅ New Workforce Intelligence Page
const WorkforceCostDashboard = lazy(() => import("./pages/WorkforceCostDashboard"));
const EfficiencyTrackingDashboard = lazy(() => import("./pages/EfficiencyTrackingDashboard"));
const TalentDemandDashboard = lazy(() => import("./pages/TalentDemandDashboard"));
const EfficiencyPredictorDashboard = lazy(() => import("./pages/EfficiencyPredictorDashboard"));
const SuccessionPlanningDashboard = lazy(() => import("./pages/SuccessionPlanningDashboard"));
const TurnoverPredictorDashboard = lazy(() => import("./pages/TurnoverPredictorDashboard"));
const FutureSkillTrendsDashboard = lazy(() => import("./pages/FutureSkillTrendsDashboard"));
const AdaptiveWorkforceDashboard = lazy(() => import("./pages/AdaptiveWorkforceDashboard"));
const ReskillingPathwaysDashboard = lazy(() => import("./pages/ReskillingPathwaysDashboard"));
import EnterpriseWorkforceCostDashboard from "./pages/EnterpriseWorkforceCostDashboard";
import TalentMobilityDashboard from "./pages/TalentMobilityDashboard";
import EnterpriseRecruitmentDashboard from "./pages/EnterpriseRecruitmentDashboard";
import CorporateTurnoverRiskDashboard from "./pages/CorporateTurnoverRiskDashboard";
import BurnoutRiskDashboard from "./pages/BurnoutRiskDashboard";
import WellBeingDashboard from "./pages/WellBeingDashboard";
import ProactiveRetentionDashboard from "./pages/ProactiveRetentionDashboard";
import ExecutiveTalentDashboard from "./pages/ExecutiveTalentDashboard";
import LeadershipSuccessionDashboard from "./pages/LeadershipSuccessionDashboard";
import ExecutivePerformanceDashboard from "./pages/ExecutivePerformanceDashboard";
import HighPotentialLeadersDashboard from "./pages/HighPotentialLeadersDashboard";
import WorkforceIntegrationDashboard from "./pages/WorkforceIntegrationDashboard";
import RestructuringImpactDashboard from "./pages/RestructuringImpactDashboard";
import PostAcquisitionRetentionDashboard from "./pages/PostAcquisitionRetentionDashboard";
import EnterpriseSkillsGapDashboard from "./pages/EnterpriseSkillsGapDashboard";
import GlobalTalentDashboard from "./pages/GlobalTalentDashboard";
import MultilingualRecruitmentDashboard from "./pages/MultilingualRecruitmentDashboard";
import LegalComplianceDashboard from "./pages/LegalComplianceDashboard";
import AutomatedVisaScreeningDashboard from "./pages/AutomatedVisaScreeningDashboard";
import FreelanceTalentMatchingDashboard from "./pages/FreelanceTalentMatchingDashboard";
import GigWorkDemandDashboard from "./pages/GigWorkDemandDashboard";
import FreelancerSuccessPredictionDashboard from "./pages/FreelancerSuccessPredictionDashboard";
import ContractRiskAssessmentDashboard from "./pages/ContractRiskAssessmentDashboard";
import SmartContractDashboard from "./pages/SmartContractDashboard";
import FraudDetectionDashboard from "./pages/FraudDetectionDashboard";
import EscrowPaymentDashboard from "./pages/EscrowPaymentDashboard";
import DisputeResolutionDashboard from "./pages/DisputeResolutionDashboard";
import DynamicPricingDashboard from "./pages/DynamicPricingDashboard";
import FreelanceMarketTrendsDashboard from "./pages/FreelanceMarketTrendsDashboard";
import CompetitionAnalysisDashboard from "./pages/CompetitionAnalysisDashboard";
import EarningsForecastDashboard from "./pages/EarningsForecastDashboard";
import FreelancerReputationDashboard from "./pages/FreelancerReputationDashboard";
import ReviewValidationDashboard from "./pages/ReviewValidationDashboard";
import FraudulentProfileDetectionDashboard from "./pages/FraudulentProfileDetectionDashboard";
import ClientTrustScoreDashboard from "./pages/ClientTrustScoreDashboard";
import FreelanceNetworkDashboard from "./pages/FreelanceNetworkDashboard";
import ProjectRecommendationDashboard from "./pages/ProjectRecommendationDashboard";
import SmartEscrowDashboard from "./pages/SmartEscrowDashboard";
import TrustScoreDashboard from "./pages/TrustScoreDashboard";
{/* Sprint 46 AI-Powered Career Coaching */}
import CareerPathDashboard from "./pages/CareerPathDashboard";
import PersonalizedLearningDashboard from "./pages/PersonalizedLearningDashboard";
import SmartReskillingDashboard from "./pages/SmartReskillingDashboard";
import SkillGapEnhancementDashboard from "./pages/SkillGapEnhancementDashboard";
{/* Sprint 47 AI-Driven Job Market Intelligence */}
import JobMarketTrendsDashboard from "./pages/JobMarketTrendsDashboard";
import SalaryBenchmarkingDashboard from "./pages/SalaryBenchmarkingDashboard";
import IndustryDemandPredictionDashboard from "./pages/IndustryDemandPredictionDashboard";
{/* Sprint 48 AI-Powered Autonomous Hiring Agents */}
import AutonomousRecruiterDashboard from "./pages/AutonomousRecruiterDashboard";
import EmployerCandidateDashboard from "./pages/EmployerCandidateDashboard";
import InterviewSchedulerDashboard from "./pages/InterviewSchedulerDashboard";
{/* Sprint 49 Generative AI for Resume & Portfolio Optimization */}
import ResumeEnhancementDashboard from "./pages/ResumeEnhancementDashboard";
import PortfolioGeneratorDashboard from "./pages/PortfolioGeneratorDashboard";
import CoverLetterDashboard from "./pages/CoverLetterDashboard";
import ApplicationAutomationDashboard from "./pages/ApplicationAutomationDashboard";
{/* Sprint 50 AI-Powered Gig Economy Automation */}
import FreelancerCareerDashboard from "./pages/FreelancerCareerDashboard";
import GigMatchingDashboard from "./pages/GigMatchingDashboard";
import FreelancerFinanceDashboard from "./pages/FreelancerFinanceDashboard";
{/* Sprint 51 AI-Powered Enterprise Workforce Planning */}
import EnterpriseWorkforceDashboard from "./pages/EnterpriseWorkforceDashboard";
import WorkforceForecastingDashboard from "./pages/WorkforceForecastingDashboard";
import TalentRedistributionDashboard from "./pages/TalentRedistributionDashboard";
{/* Sprint 52 AI-Driven Internal Talent Mobility */}
import InternalJobRotationDashboard from "./pages/InternalJobRotationDashboard";
import SuccessionPlanningDashboard from "./pages/SuccessionPlanningDashboard";
import SkillTransitionDashboard from "./pages/SkillTransitionDashboard";
{/* Sprint 53 AI-Powered Employee Lifecycle Automation */}
import EmployeeOnboardingDashboard from "./pages/EmployeeOnboardingDashboard";
import HRChatbotDashboard from "./pages/HRChatbotDashboard";
import PerformanceReviewDashboard from "./pages/PerformanceReviewDashboard";
import EmployeeEngagementDashboard from "./pages/EmployeeEngagementDashboard";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Core Features */}
          <Route path="/" element={<Home />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-recommendations" element={<JobRecommendations />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/interview-analysis" element={<InterviewAnalysis />} />
          <Route path="/schedule-interview" element={<ScheduleInterview />} />
          <Route path="/chat" element={<Chat />} />

          {/* Payment System */}
          <Route path="/payments" element={<PaymentDashboard />} />

          {/* Gamification & AI Insights */}
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/career-insights" element={<CareerInsightsDashboard />} />
          <Route path="/ai-interview" element={<AIInterviewDashboard />} />
          <Route path="/engagement-dashboard" element={<EngagementDashboard />} />

          {/* AI & Candidate Profile Enrichment */}
          <Route path="/auto-screening" element={<AutoScreeningDashboard />} />
          <Route path="/skill-gap" element={<SkillGapDashboard />} />
          <Route path="/salary-insights" element={<SalaryDashboard />} />
          <Route path="/globalization" element={<GlobalizationDashboard />} />

          {/* Advanced AI Features */}
          <Route path="/video-interview-analysis" element={<VideoInterviewAnalysis />} />
          <Route path="/ai-job-description" element={<AIJobDescription />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/api-management" element={<APIManagement />} />
          <Route path="/workforce" element={<WorkforceDashboard />} /> {/* ✅ New Workforce Route */}
          <Route path="/workforce-intelligence" element={<WorkforceIntelligenceDashboard />} />  {/* ✅ New Workforce Intelligence Route */}
          <Route path="/workforce-cost" element={<WorkforceCostDashboard />} />
          <Route path="/efficiency-tracking" element={<EfficiencyTrackingDashboard />} />
          <Route path="/talent-demand" element={<TalentDemandDashboard />} />
          <Route path="/efficiency-predictor" element={<EfficiencyPredictorDashboard />} />
          <Route path="/turnover-predictor" element={<TurnoverPredictorDashboard />} />
          <Route path="/future-skills" element={<FutureSkillTrendsDashboard />} />
          <Route path="/workforce-adaptability" element={<AdaptiveWorkforceDashboard />} />
          <Route path="/reskilling-pathways" element={<ReskillingPathwaysDashboard />} />
          <Route path="/enterprize-workforce-cost" element={<EnterpriseWorkforceCostDashboard />} />
          <Route path="/talent-mobility" element={<TalentMobilityDashboard />} />
          <Route path="/enterprise-recruitment" element={<EnterpriseRecruitmentDashboard />} />
          <Route path="/corporate-turnover-risk" element={<CorporateTurnoverRiskDashboard />} />
          <Route path="/burnout-risk" element={<BurnoutRiskDashboard />} />
          <Route path="/wellbeing" element={<WellBeingDashboard />} />
          <Route path="/retention-risk" element={<ProactiveRetentionDashboard />} />
          <Route path="/executive-talent" element={<ExecutiveTalentDashboard />} />
          <Route path="/leadership-succession" element={<LeadershipSuccessionDashboard />} />
          <Route path="/executive-performance" element={<ExecutivePerformanceDashboard />} />
          <Route path="/high-potential-leaders" element={<HighPotentialLeadersDashboard />} />

          {/* 🔹 New M&A Planning Dashboards */}
          <Route path="/workforce-integration" element={<WorkforceIntegrationDashboard />} />
          <Route path="/restructuring-impact" element={<RestructuringImpactDashboard />} />
          <Route path="/post-acquisition-retention" element={<PostAcquisitionRetentionDashboard />} />
          <Route path="/enterprise-skills-gap" element={<EnterpriseSkillsGapDashboard />} />

          {/* 🌍 Global Hiring & Compliance */}
          <Route path="/global-talent" element={<GlobalTalentDashboard />} />
          <Route path="/multilingual-recruitment" element={<MultilingualRecruitmentDashboard />} />
          <Route path="/legal-compliance" element={<LegalComplianceDashboard />} />
          <Route path="/visa-screening" element={<AutomatedVisaScreeningDashboard />} />

          {/* 📍 Freelance & Gig Hiring Dashboards */}
          <Route path="/freelance-matching" element={<FreelanceTalentMatchingDashboard />} />
          <Route path="/gig-demand" element={<GigWorkDemandDashboard />} />
          <Route path="/freelancer-success" element={<FreelancerSuccessPredictionDashboard />} />
          <Route path="/contract-risk" element={<ContractRiskAssessmentDashboard />} />

          {/* Freelance Payment & Security Dashboards */}
          <Route path="/smart-contracts" element={<SmartContractDashboard />} />
          <Route path="/fraud-detection" element={<FraudDetectionDashboard />} />
          <Route path="/escrow-payments" element={<EscrowPaymentDashboard />} />
          <Route path="/dispute-resolution" element={<DisputeResolutionDashboard />} />

          {/* 🔹 Freelance Pricing & Market Intelligence */}
          <Route path="/dynamic-pricing" element={<DynamicPricingDashboard />} />
          <Route path="/freelance-market-trends" element={<FreelanceMarketTrendsDashboard />} />
          <Route path="/competition-analysis" element={<CompetitionAnalysisDashboard />} />
          <Route path="/earnings-forecast" element={<EarningsForecastDashboard />} />

          {/* ✅ Sprint 44 - Freelance Reputation & Trust Dashboards */}
          <Route path="/freelancer-reputation" element={<FreelancerReputationDashboard />} />
          <Route path="/review-validation" element={<ReviewValidationDashboard />} />
          <Route path="/fraudulent-profile-detection" element={<FraudulentProfileDetectionDashboard />} />
          <Route path="/client-trust-score" element={<ClientTrustScoreDashboard />} />

          {/* 🏆 Sprint 45 - AI-Powered Freelance Network */}
          <Route path="/freelance-network" element={<FreelanceNetworkDashboard />} />
          <Route path="/project-recommendation" element={<ProjectRecommendationDashboard />} />
          <Route path="/smart-escrow" element={<SmartEscrowDashboard />} />
          <Route path="/trust-score" element={<TrustScoreDashboard />} />

          {/* Sprint 46 ✅ AI-Powered Career Coaching */}
          <Route path="/career-path" element={<CareerPathDashboard />} />
          <Route path="/personalized-learning" element={<PersonalizedLearningDashboard />} />
          <Route path="/smart-reskilling" element={<SmartReskillingDashboard />} />
          <Route path="/skill-gap-enhancement" element={<SkillGapEnhancementDashboard />} />

          {/* Sprint 47 AI-Driven Job Market Intelligence */}
          <Route path="/job-market-trends" element={<JobMarketTrendsDashboard />} />
          <Route path="/salary-benchmarking" element={<SalaryBenchmarkingDashboard />} />
          <Route path="/industry-demand-prediction" element={<IndustryDemandPredictionDashboard />} />

          {/* Sprint 48 AI-Powered Autonomous Hiring Agents */}
          <Route path="/ai-hiring/autonomous-recruiter" element={<AutonomousRecruiterDashboard />} />
          <Route path="/ai-hiring/employer-candidate" element={<EmployerCandidateDashboard />} />
          <Route path="/ai-hiring/interview-scheduler" element={<InterviewSchedulerDashboard />} />

          {/* Sprint 49 Generative AI for Resume & Portfolio Optimization */}
          <Route path="/resume-enhancement" element={<ResumeEnhancementDashboard />} />
          <Route path="/portfolio-generator" element={<PortfolioGeneratorDashboard />} />
          <Route path="/cover-letter" element={<CoverLetterDashboard />} />
          <Route path="/application-automation" element={<ApplicationAutomationDashboard />} />

          {/* Sprint 50 AI-Powered Gig Economy Automation */}
          <Route path="/freelancer-career" element={<FreelancerCareerDashboard />} />
          <Route path="/gig-matching" element={<GigMatchingDashboard />} />
          <Route path="/freelancer-finance" element={<FreelancerFinanceDashboard />} />

          {/* Sprint 51 AI-Powered Enterprise Workforce Planning */}
          <Route path="/enterprise-workforce" element={<EnterpriseWorkforceDashboard />} />
          <Route path="/workforce-forecasting" element={<WorkforceForecastingDashboard />} />
          <Route path="/talent-redistribution" element={<TalentRedistributionDashboard />} />

          {/* Sprint 52 AI-Driven Internal Talent Mobility */}
          <Route path="/internal-job-rotation" element={<InternalJobRotationDashboard />} />
          <Route path="/succession-planning" element={<SuccessionPlanningDashboard />} />
          <Route path="/skill-transition" element={<SkillTransitionDashboard />} />

          {/* Sprint 53 AI-Powered Employee Lifecycle Automation */}
          <Route path="/employee-onboarding" element={<EmployeeOnboardingDashboard />} />
          <Route path="/hr-chatbot" element={<HRChatbotDashboard />} />
          <Route path="/performance-review" element={<PerformanceReviewDashboard />} />
          <Route path="/employee-engagement" element={<EmployeeEngagementDashboard />} />

          {/* Mobile App Feature */}
          <Route path="/mobile" element={<AutoHireMobile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

