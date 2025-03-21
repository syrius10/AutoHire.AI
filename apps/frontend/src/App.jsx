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
const CareerInsightsDashboard = lazy(
  () => import("./pages/CareerInsightsDahsboard"),
);
const AIInterviewDahsboard = lazy(() => import("./pages/AIInterviewDahsboard"));
const EngagementDahsboard = lazy(() => import("./pages/EngagementDahsboard"));
const AutoScreeningDashboard = lazy(
  () => import("./pages/AutoScreeningDashboard"),
);
const SkillGapDashboard = lazy(() => import("./pages/SkillGapDashboard"));
const SalaryDahsboard = lazy(() => import("./pages/SalaryDashboard"));
const GlobalizationDashboard = lazy(
  () => import("./pages/GlobalizationDashboard"),
);
const VideoInterviewAnalysis = lazy(
  () => import("./pages/VideoInterviewAnalysis"),
);
const AIJobDescription = lazy(() => import("./pages/AIJobDescription"));
const Marketplace = lazy(() => import("./pages/Marketplace"));
const APIManagement = lazy(() => import("./pages/APIManagement"));
const AutoHireMobile = lazy(() => import("./pages/AutoHireMobile"));
const WorkforceDashboard = lazy(() => import("./pages/WorkforceDashboard")); // ✅ New Workforce Page
const WorkforceIntelligenceDashboard = lazy(
  () => import("./pages/WorkforceIntelligenceDashboard"),
); // ✅ New Workforce Intelligence Page
const WorkforceCostDashboard = lazy(
  () => import("./pages/WorkforceCostDashboard"),
);
const EfficiencyTrackingDashboard = lazy(
  () => import("./pages/EfficiencyTrackingDashboard"),
);
const TalentDemandDashboard = lazy(
  () => import("./pages/TalentDemandDashboard"),
);
const EfficiencyPredictorDashboard = lazy(
  () => import("./pages/EfficiencyPredictorDashboard"),
);
const SuccessionPlanningDashboardV2 = lazy(
  () => import("./pages/SuccessionPlanningDashboard"),
);
const TurnoverPredictorDashboard = lazy(
  () => import("./pages/TurnoverPredictorDashboard"),
);
const FutureSkillTrendsDashboard = lazy(
  () => import("./pages/FutureSkillTrendsDashboard"),
);
const AdaptiveWorkforceDashboard = lazy(
  () => import("./pages/AdaptiveWorkforceDashboard"),
);
const ReskillingPathwaysDashboard = lazy(
  () => import("./pages/ReskillingPathwaysDashboard"),
);
import EnterpriseWorkforceCostDashboard from "./pages/EnterpriseWorkforceCostDashboard";
import TalentMobilityDashboard from "./pages/TalentMobilityDashboard";
import EnterpriseRecruitmentDashboard from "./pages/EnterpriseRecruitmentDashboard";
import CorporateTurnoverRiskDashboard from "./pages/CorporateTurnoverRiskDashboard";
import BurnoutRiskDashboard from "./pages/BurnoutRiskDashboard";
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
{
  /* Sprint 46 AI-Powered Career Coaching */
}
import CareerPathDashboard from "./pages/CareerPathDashboard";
import PersonalizedLearningDashboard from "./pages/PersonalizedLearningDashboard";
import SmartReskillingDashboard from "./pages/SmartReskillingDashboard";
import SkillGapEnhancementDashboard from "./pages/SkillGapEnhancementDashboard";
{
  /* Sprint 47 AI-Driven Job Market Intelligence */
}
import JobMarketTrendsDashboard from "./pages/JobMarketTrendsDashboard";
import SalaryBenchmarkingDashboard from "./pages/SalaryBenchmarkingDashboard";
import IndustryDemandPredictionDashboard from "./pages/IndustryDemandPredictionDashboard";
{
  /* Sprint 48 AI-Powered Autonomous Hiring Agents */
}
import AutonomousRecruiterDashboard from "./pages/AutonomousRecruiterDashboard";
import EmployerCandidateDashboard from "./pages/EmployerCandidateDashboard";
import InterviewSchedulerDashboard from "./pages/InterviewSchedulerDashboard";
{
  /* Sprint 49 Generative AI for Resume & Portfolio Optimization */
}
import ResumeEnhancementDashboard from "./pages/ResumeEnhancementDashboard";
import PortfolioGeneratorDashboard from "./pages/PortfolioGeneratorDashboard";
import CoverLetterDashboard from "./pages/CoverLetterDashboard";
import ApplicationAutomationDashboard from "./pages/ApplicationAutomationDashboard";
{
  /* Sprint 50 AI-Powered Gig Economy Automation */
}
import FreelancerCareerDashboard from "./pages/FreelancerCareerDashboard";
import GigMatchingDashboard from "./pages/GigMatchingDashboard";
{
  /* Sprint 51 AI-Powered Enterprise Workforce Planning */
}
import EnterpriseWorkforceDashboard from "./pages/EnterpriseWorkforceDashboard";
import WorkforceForecastingDashboard from "./pages/WorkforceForecastingDashboard";
import TalentRedistributionDashboard from "./pages/TalentRedistributionDashboard";
{
  /* Sprint 52 AI-Driven Internal Talent Mobility */
}
import InternalJobRotationDashboard from "./pages/InternalJobRotationDashboard";
import SuccessionPlanningDashboard from "./pages/SuccessionPlanningDashboard";
import SkillTransitionDashboard from "./pages/SkillTransitionDashboard";
{
  /* Sprint 53 AI-Powered Employee Lifecycle Automation */
}
import EmployeeOnboardingDashboard from "./pages/EmployeeOnboardingDashboard";
import HRChatbotDashboard from "./pages/HRChatbotDashboard";
import PerformanceReviewDashboard from "./pages/PerformanceReviewDashboard";
import EmployeeEngagementDashboard from "./pages/EmployeeEngagementDashboard";
{
  /* Sprint 54 AI-Powered Workforce Well-Being & Retention */
}
import WellBeingDashboard from "./pages/WellBeingDashboard";
import MentalHealthAssistantDashboard from "./pages/MentalHealthAssistantDashboard";
import TeamPerformanceDashboard from "./pages/TeamPerformanceDashboard";
{
  /* Sprint 55 AI-Powered Fully Automated HR System */
}
import HRAutomationDashboard from "./pages/HRAutomationDashboard";
import RegulatoryComplianceDashboard from "./pages/RegulatoryComplianceDashboard";
import EthicsGovernanceDashboard from "./pages/EthicsGovernanceDashboard";
{
  /* Sprint 56 AI-Powered Global Hiring & Relocation */
}
import GlobalHiringDashboard from "./pages/GlobalHiringDashboard";
import WorkVisaAutomationDashboard from "./pages/WorkVisaAutomationDashboard";
import MultiCountrySalaryDashboard from "./pages/MultiCountrySalaryDashboard";
{
  /* Sprint 57 AI-Driven Workforce Sustainability & DEI */
}
import DEIAnalyticsDashboard from "./pages/DEIAnalyticsDashboard";
import SustainableWorkforceDashboard from "./pages/SustainableWorkforceDashboard";
import EthicalHiringDashboard from "./pages/EthicalHiringDashboard";
{
  /* Sprint 58 Gig Economy 2.0 */
}
import GigMarketplaceDashboard from "./pages/GigMarketplaceDashboard";
import BlockchainContractsDashboard from "./pages/BlockchainContractsDashboard";
import GigPaymentsDashboard from "./pages/GigPaymentsDashboard";
import FreelancerFinanceDashboard from "./pages/FreelancerFinanceDashboard";
{
  /* Sprint 59 AI-Powered Leadership Development Dashboards */
}
import LeadershipTrainingDashboard from "./pages/LeadershipTrainingDashboard";
import AIMentorshipCoachDashboard from "./pages/AIMentorshipCoachDashboard";
import StrategicLeadershipDashboard from "./pages/StrategicLeadershipDashboard";
{
  /* Sprint 60 The Future of AI Workforce Automation */
}
import PredictiveWorkforceDashboard from "./pages/PredictiveWorkforceDashboard";
import AutonomousHRAssistantDashboard from "./pages/AutonomousHRAssistantDashboard";
import AIJobSeekerDashboard from "./pages/AIJobSeekerDashboard";
import GlobalWorkforceOrchestratorDashboard from "./pages/GlobalWorkforceOrchestratorDashboard";
{
  /* Sprint 61 AI-Powered Autonomous Work Teams */
}
import AutonomousTeamDashboard from "./pages/AutonomousTeamDashboard";
import TaskDelegationDashboard from "./pages/TaskDelegationDashboard";
import CollaborationTrackingDashboard from "./pages/CollaborationTrackingDashboard";
{
  /* Sprint 62 AI-Powered Dynamic Job Roles */
}
import DynamicRoleDashboard from "./pages/DynamicRoleDashboard";
import RoleTransitionDashboard from "./pages/RoleTransitionDashboard";
import AdaptiveReskillingDashboard from "./pages/AdaptiveReskillingDashboard";
{
  /* Sprint 63 AI-Powered Collaboration & Meeting Automation */
}
import CollaborationAssistantDashboard from "./pages/CollaborationAssistantDashboard";
import MeetingAutomationDashboard from "./pages/MeetingAutomationDashboard";
import RealTimeFeedbackDashboard from "./pages/RealTimeFeedbackDashboard";
{
  /* Sprint 64 AI-Powered Workplace Automation Dashboards */
}
import HRProcessAutomationDashboard from "./pages/HRProcessAutomationDashboard";
import PerformancePredictionDashboard from "./pages/PerformancePredictionDashboard";
import WorkflowAutomationDashboard from "./pages/WorkflowAutomationDashboard";
{
  /* Sprint 65 AI-Powered Employee Digital Twin Technology Dashboards */
}
import EmployeeDigitalTwinDashboard from "./pages/EmployeeDigitalTwinDashboard";
import WorkloadBalancingDashboard from "./pages/WorkloadBalancingDashboard";
import LeadershipDecisionDashboard from "./pages/LeadershipDecisionDashboard";
{
  /* Sprint 66 AI-Powered Emotion & Sentiment-Driven Workplaces */
}
import EmotionAwareHRPolicyDashboard from "./pages/EmotionAwareHRPolicyDashboard";
import TeamMoodOptimizationDashboard from "./pages/TeamMoodOptimizationDashboard";
import RealTimeWellnessDashboard from "./pages/RealTimeWellnessDashboard";
{
  /* Sprint 67 AI-Powered Ethical & Bias-Free AI Workforces */
}
import BiasEliminationDashboard from "./pages/BiasEliminationDashboard";
import AIComplianceMonitorDashboard from "./pages/AIComplianceMonitorDashboard";
{
  /* Sprint 68 AI-Powered Work Contracts & Smart Legal Automation */
}
import SmartWorkContractsDashboard from "./pages/SmartWorkContractsDashboard";
import ContractPerformanceDashboard from "./pages/ContractPerformanceDashboard";
{
  /* Sprint 69 AI-Powered Global AI Workforce Governance */
}
import AIWorkforcePolicyDashboard from "./pages/AIWorkforcePolicyDashboard";
import LaborLawComplianceDashboard from "./pages/LaborLawComplianceDashboard";
import RegulatoryRiskDashboard from "./pages/RegulatoryRiskDashboard";
{
  /* Sprint 70 AI-Powered Job Market Predictive Intelligence */
}
import EconomicWorkforceDashboard from "./pages/EconomicWorkforceDashboard";
import GlobalHiringTrendsDashboard from "./pages/GlobalHiringTrendsDashboard";
import EconomicForecastDashboard from "./pages/EconomicForecastDashboard";
{
  /* Sprint 71 AI-Powered Virtual Workforce */
}
import MetaverseWorkspacesDashboard from "./pages/MetaverseWorkspacesDashboard";
import VRJobInterviewsDashboard from "./pages/VRJobInterviewsDashboard";
import HolographicMeetingsDashboard from "./pages/HolographicMeetingsDashboard";
import AIWorkAssistantDashboard from "./pages/AIWorkAssistantDashboard";
{
  /* Sprint 72 AI-Powered Decentralized Autonomous Organizations (DAOs) */
}
import DecentralizedCompanyDashboard from "./pages/DecentralizedCompanyDashboard";
import TokenizedWorkDashboard from "./pages/TokenizedWorkDashboard";
import SmartVotingDashboard from "./pages/SmartVotingDashboard";
{
  /* Sprint 73 AI-Powered Work in the Web3 Ecosystem */
}
import Web3WorkforceDashboard from "./pages/Web3WorkforceDashboard";
import NFTJobCredentialsDashboard from "./pages/NFTJobCredentialsDashboard";
import BlockchainCredibilityDashboard from "./pages/BlockchainCredibilityDashboard";
{
  /* Sprint 74 AI-Powered Digital Nomad Ecosystem */
}
import NomadJobMatchingDashboard from "./pages/NomadJobMatchingDashboard";
import LocationBasedHiringDashboard from "./pages/LocationBasedHiringDashboard";
import NomadWorkVisaDashboard from "./pages/NomadWorkVisaDashboard";
{
  /* Sprint 75 AI-Powered Autonomous Gig Marketplaces */
}
import GigNegotiationDashboard from "./pages/GigNegotiationDashboard";
import TrustScoringDashboard from "./pages/TrustScoringDashboard";
{
  /* Sprint 76 AI-Powered Virtual Co-Working Spaces */
}
import VirtualCollaborationDashboard from "./pages/VirtualCollaborationDashboard";
import RemoteTeamManagementDashboard from "./pages/RemoteTeamManagementDashboard";
import AIWorkCoachDashboard from "./pages/AIWorkCoachDashboard";
{
  /* Sprint 77 AI-Powered Work-Life Balance Optimization */
}
import WorkScheduleOptimizerDashboard from "./pages/WorkScheduleOptimizerDashboard.jsx";
import ProductivityEnergyTrackerDashboard from "./pages/ProductivityEnergyTrackerDashboard.jsx";
import BurnoutPreventionDashboard from "./pages/BurnoutPreventionDashboard.jsx";
{
  /* Sprint 78 AI-Powered Work Productivity Tokens */
}
import ProductivityTokensDashboard from "./pages/ProductivityTokensDashboard";
import MilestonePayoutsDashboard from "./pages/MilestonePayoutsDashboard";
import DecentralizedFinanceDashboard from "./pages/DecentralizedFinanceDashboard";
{
  /* Sprint 79 AI-Powered Gig Worker Financial Planning */
}
import GigSmartPaymentsDashboard from "./pages/GigSmartPaymentsDashboard";
import FreelancerTaxDashboard from "./pages/FreelancerTaxDashboard";
import GigFinancialForecastDashboard from "./pages/GigFinancialForecastDashboard";
{
  /* Sprint 80 AI-Powered Global Workforce Decentralization */
}
import DecentralizedWorkforceDashboard from "./pages/DecentralizedWorkforceDashboard";
import CrossBorderContractsDashboard from "./pages/CrossBorderContractsDashboard";
import GlobalVisaAutomationDashboard from "./pages/GlobalVisaAutomationDashboard";
import WorkforcePolicyDashboard from "./pages/WorkforcePolicyDashboard";
{
  /* Sprint 81 AI-Powered Self-Learning Work Models */
}
import SelfImprovingWorkforceDashboard from "./pages/SelfImprovingWorkforceDashboard";
import SelfUpgradingSkillsDashboard from "./pages/SelfUpgradingSkillsDashboard";
import SelfAdaptingCareerDashboard from "./pages/SelfAdaptingCareerDashboard";
{
  /* Sprint 82 AI-Powered Work Efficiency Agents */
}
import RealTimeProductivityDashboard from "./pages/RealTimeProductivityDashboard";
import AdaptiveWorkflowDashboard from "./pages/AdaptiveWorkflowDashboard";
{
  /* Sprint 83 AI-Powered Quantum Workforce Planning */
}
import QuantumWorkforceSimDashboard from "./pages/QuantumWorkforceSimDashboard";
import QuantumWorkforceForecastDashboard from "./pages/QuantumWorkforceForecastDashboard";
import QuantumHiringPerformanceDashboard from "./pages/QuantumHiringPerformanceDashboard";
{
  /* Sprint 84 AI-Powered Conscious AI Work Models */
}
import ConsciousWorkDashboard from "./pages/ConsciousWorkDashboard";
import SelfAwareAutomationDashboard from "./pages/SelfAwareAutomationDashboard";
import EthicalAIWorkforceDashboard from "./pages/EthicalAIWorkforceDashboard";
{
  /* Sprint 85 AI-Powered Zero-Manual Work Operations */
}
import ZeroManualWorkDashboard from "./pages/ZeroManualWorkDashboard";
import SelfManagedAIWorkforceDashboard from "./pages/SelfManagedAIWorkforceDashboard";
import AIOnlyManagementDashboard from "./pages/AIOnlyManagementDashboard";
{
  /* Sprint 86 AI-Powered Fully Autonomous Global AI Workforce */
}
import AutonomousGlobalWorkforceDashboard from "./pages/AutonomousGlobalWorkforceDashboard";
import AIGovernanceDashboard from "./pages/AIGovernanceDashboard";
import AILaborRightsDashboard from "./pages/AILaborRightsDashboard";
{
  /* Sprint 87 AI-Powered Next-Gen Fully AI-Managed HR Systems */
}
import AIHRManagementDashboard from "./pages/AIHRManagementDashboard";
import AIEmployeeEngagementDashboard from "./pages/AIEmployeeEngagementDashboard";
import AITalentRetentionDashboard from "./pages/AITalentRetentionDashboard";
{
  /* Sprint 88 AI-Based Automated Hiring & AI-Managed Global Employment Markets */
}
import AIAutomatedHiringDashboard from "./pages/AIAutomatedHiringDashboard";
import AIJobMarketAnalysisDashboard from "./pages/AIJobMarketAnalysisDashboard";
import AIEmployerMatchDashboard from "./pages/AIEmployerMatchDashboard";
{
  /* Sprint 89 AI-Powered AI Governance */
}
import AIWorkEthicsDashboard from "./pages/AIWorkEthicsDashboard";
import AILaborGovernanceDashboard from "./pages/AILaborGovernanceDashboard";
import AIAutonomousPolicyDashboard from "./pages/AIAutonomousPolicyDashboard";
{
  /* Sprint 90 The Ultimate AI Work Evolution */
}
import AISelfEvolvingWorkforceDashboard from "./pages/AISelfEvolvingWorkforceDashboard";
import AIGlobalEconomyDashboard from "./pages/AIGlobalEconomyDashboard";
import QuantumHiringDashboard from "./pages/QuantumHiringDashboard";

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
          <Route
            path="/career-insights"
            element={<CareerInsightsDashboard />}
          />
          <Route path="/ai-interview" element={<AIInterviewDashboard />} />
          <Route
            path="/engagement-dashboard"
            element={<EngagementDashboard />}
          />
          {/* AI & Candidate Profile Enrichment */}
          <Route path="/auto-screening" element={<AutoScreeningDashboard />} />
          <Route path="/skill-gap" element={<SkillGapDashboard />} />
          <Route path="/salary-insights" element={<SalaryDashboard />} />
          <Route path="/globalization" element={<GlobalizationDashboard />} />
          {/* Advanced AI Features */}
          <Route
            path="/video-interview-analysis"
            element={<VideoInterviewAnalysis />}
          />
          <Route path="/ai-job-description" element={<AIJobDescription />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/api-management" element={<APIManagement />} />
          <Route path="/workforce" element={<WorkforceDashboard />} />{" "}
          {/* ✅ New Workforce Route */}
          <Route
            path="/workforce-intelligence"
            element={<WorkforceIntelligenceDashboard />}
          />{" "}
          {/* ✅ New Workforce Intelligence Route */}
          <Route path="/workforce-cost" element={<WorkforceCostDashboard />} />
          <Route
            path="/efficiency-tracking"
            element={<EfficiencyTrackingDashboard />}
          />
          <Route path="/talent-demand" element={<TalentDemandDashboard />} />
          <Route
            path="/efficiency-predictor"
            element={<EfficiencyPredictorDashboard />}
          />
          <Route
            path="/turnover-predictor"
            element={<TurnoverPredictorDashboard />}
          />
          <Route
            path="/future-skills"
            element={<FutureSkillTrendsDashboard />}
          />
          <Route
            path="/workforce-adaptability"
            element={<AdaptiveWorkforceDashboard />}
          />
          <Route
            path="/reskilling-pathways"
            element={<ReskillingPathwaysDashboard />}
          />
          <Route
            path="/enterprize-workforce-cost"
            element={<EnterpriseWorkforceCostDashboard />}
          />
          <Route
            path="/talent-mobility"
            element={<TalentMobilityDashboard />}
          />
          <Route
            path="/enterprise-recruitment"
            element={<EnterpriseRecruitmentDashboard />}
          />
          <Route
            path="/corporate-turnover-risk"
            element={<CorporateTurnoverRiskDashboard />}
          />
          <Route path="/burnout-risk" element={<BurnoutRiskDashboard />} />
          <Route path="/wellbeing" element={<WellBeingDashboard />} />
          <Route
            path="/retention-risk"
            element={<ProactiveRetentionDashboard />}
          />
          <Route
            path="/executive-talent"
            element={<ExecutiveTalentDashboard />}
          />
          <Route
            path="/leadership-succession"
            element={<LeadershipSuccessionDashboard />}
          />
          <Route
            path="/executive-performance"
            element={<ExecutivePerformanceDashboard />}
          />
          <Route
            path="/high-potential-leaders"
            element={<HighPotentialLeadersDashboard />}
          />
          {/* 🔹 New M&A Planning Dashboards */}
          <Route
            path="/workforce-integration"
            element={<WorkforceIntegrationDashboard />}
          />
          <Route
            path="/restructuring-impact"
            element={<RestructuringImpactDashboard />}
          />
          <Route
            path="/post-acquisition-retention"
            element={<PostAcquisitionRetentionDashboard />}
          />
          <Route
            path="/enterprise-skills-gap"
            element={<EnterpriseSkillsGapDashboard />}
          />
          {/* 🌍 Global Hiring & Compliance */}
          <Route path="/global-talent" element={<GlobalTalentDashboard />} />
          <Route
            path="/multilingual-recruitment"
            element={<MultilingualRecruitmentDashboard />}
          />
          <Route
            path="/legal-compliance"
            element={<LegalComplianceDashboard />}
          />
          <Route
            path="/visa-screening"
            element={<AutomatedVisaScreeningDashboard />}
          />
          {/* 📍 Freelance & Gig Hiring Dashboards */}
          <Route
            path="/freelance-matching"
            element={<FreelanceTalentMatchingDashboard />}
          />
          <Route path="/gig-demand" element={<GigWorkDemandDashboard />} />
          <Route
            path="/freelancer-success"
            element={<FreelancerSuccessPredictionDashboard />}
          />
          <Route
            path="/contract-risk"
            element={<ContractRiskAssessmentDashboard />}
          />
          {/* Freelance Payment & Security Dashboards */}
          <Route path="/smart-contracts" element={<SmartContractDashboard />} />
          <Route
            path="/fraud-detection"
            element={<FraudDetectionDashboard />}
          />
          <Route path="/escrow-payments" element={<EscrowPaymentDashboard />} />
          <Route
            path="/dispute-resolution"
            element={<DisputeResolutionDashboard />}
          />
          {/* 🔹 Freelance Pricing & Market Intelligence */}
          <Route
            path="/dynamic-pricing"
            element={<DynamicPricingDashboard />}
          />
          <Route
            path="/freelance-market-trends"
            element={<FreelanceMarketTrendsDashboard />}
          />
          <Route
            path="/competition-analysis"
            element={<CompetitionAnalysisDashboard />}
          />
          <Route
            path="/earnings-forecast"
            element={<EarningsForecastDashboard />}
          />
          {/* ✅ Sprint 44 - Freelance Reputation & Trust Dashboards */}
          <Route
            path="/freelancer-reputation"
            element={<FreelancerReputationDashboard />}
          />
          <Route
            path="/review-validation"
            element={<ReviewValidationDashboard />}
          />
          <Route
            path="/fraudulent-profile-detection"
            element={<FraudulentProfileDetectionDashboard />}
          />
          <Route
            path="/client-trust-score"
            element={<ClientTrustScoreDashboard />}
          />
          {/* 🏆 Sprint 45 - AI-Powered Freelance Network */}
          <Route
            path="/freelance-network"
            element={<FreelanceNetworkDashboard />}
          />
          <Route
            path="/project-recommendation"
            element={<ProjectRecommendationDashboard />}
          />
          <Route path="/smart-escrow" element={<SmartEscrowDashboard />} />
          <Route path="/trust-score" element={<TrustScoreDashboard />} />
          {/* Sprint 46 ✅ AI-Powered Career Coaching */}
          <Route path="/career-path" element={<CareerPathDashboard />} />
          <Route
            path="/personalized-learning"
            element={<PersonalizedLearningDashboard />}
          />
          <Route
            path="/smart-reskilling"
            element={<SmartReskillingDashboard />}
          />
          <Route
            path="/skill-gap-enhancement"
            element={<SkillGapEnhancementDashboard />}
          />
          {/* Sprint 47 AI-Driven Job Market Intelligence */}
          <Route
            path="/job-market-trends"
            element={<JobMarketTrendsDashboard />}
          />
          <Route
            path="/salary-benchmarking"
            element={<SalaryBenchmarkingDashboard />}
          />
          <Route
            path="/industry-demand-prediction"
            element={<IndustryDemandPredictionDashboard />}
          />
          {/* Sprint 48 AI-Powered Autonomous Hiring Agents */}
          <Route
            path="/ai-hiring/autonomous-recruiter"
            element={<AutonomousRecruiterDashboard />}
          />
          <Route
            path="/ai-hiring/employer-candidate"
            element={<EmployerCandidateDashboard />}
          />
          <Route
            path="/ai-hiring/interview-scheduler"
            element={<InterviewSchedulerDashboard />}
          />
          {/* Sprint 49 Generative AI for Resume & Portfolio Optimization */}
          <Route
            path="/resume-enhancement"
            element={<ResumeEnhancementDashboard />}
          />
          <Route
            path="/portfolio-generator"
            element={<PortfolioGeneratorDashboard />}
          />
          <Route path="/cover-letter" element={<CoverLetterDashboard />} />
          <Route
            path="/application-automation"
            element={<ApplicationAutomationDashboard />}
          />
          {/* Sprint 50 AI-Powered Gig Economy Automation */}
          <Route
            path="/freelancer-career"
            element={<FreelancerCareerDashboard />}
          />
          <Route path="/gig-matching" element={<GigMatchingDashboard />} />
          {/* Sprint 51 AI-Powered Enterprise Workforce Planning */}
          <Route
            path="/enterprise-workforce"
            element={<EnterpriseWorkforceDashboard />}
          />
          <Route
            path="/workforce-forecasting"
            element={<WorkforceForecastingDashboard />}
          />
          <Route
            path="/talent-redistribution"
            element={<TalentRedistributionDashboard />}
          />
          {/* Sprint 52 AI-Driven Internal Talent Mobility */}
          <Route
            path="/internal-job-rotation"
            element={<InternalJobRotationDashboard />}
          />
          <Route
            path="/succession-planning"
            element={<SuccessionPlanningDashboardV2 />}
          />
          <Route
            path="/skill-transition"
            element={<SkillTransitionDashboard />}
          />
          {/* Sprint 53 AI-Powered Employee Lifecycle Automation */}
          <Route
            path="/employee-onboarding"
            element={<EmployeeOnboardingDashboard />}
          />
          <Route path="/hr-chatbot" element={<HRChatbotDashboard />} />
          <Route
            path="/performance-review"
            element={<PerformanceReviewDashboard />}
          />
          <Route
            path="/employee-engagement"
            element={<EmployeeEngagementDashboard />}
          />
          {/* Sprint 54 AI-Powered Workforce Well-Being & Retention */}
          <Route path="/well-being" element={<WellBeingDashboard />} />
          <Route
            path="/mental-health"
            element={<MentalHealthAssistantDashboard />}
          />
          <Route
            path="/team-performance"
            element={<TeamPerformanceDashboard />}
          />
          {/* Sprint 55 AI-Powered Fully Automated HR System */}
          <Route path="/hr-automation" element={<HRAutomationDashboard />} />
          <Route
            path="/regulatory-compliance"
            element={<RegulatoryComplianceDashboard />}
          />
          <Route
            path="/ethics-governance"
            element={<EthicsGovernanceDashboard />}
          />
          {/* Sprint 56 AI-Powered Global Hiring & Relocation */}
          <Route path="/global-hiring" element={<GlobalHiringDashboard />} />
          <Route
            path="/work-visa-automation"
            element={<WorkVisaAutomationDashboard />}
          />
          <Route
            path="/multi-country-salary"
            element={<MultiCountrySalaryDashboard />}
          />
          {/* Sprint 57 AI-Driven Workforce Sustainability & DEI */}
          <Route path="/dei-analytics" element={<DEIAnalyticsDashboard />} />
          <Route
            path="/sustainable-workforce"
            element={<SustainableWorkforceDashboard />}
          />
          <Route path="/ethical-hiring" element={<EthicalHiringDashboard />} />
          {/* Sprint 58 Gig Economy 2.0 */}
          <Route
            path="/gig-marketplace"
            element={<GigMarketplaceDashboard />}
          />
          <Route
            path="/blockchain-contracts"
            element={<BlockchainContractsDashboard />}
          />
          <Route path="/gig-payments" element={<GigPaymentsDashboard />} />
          <Route
            path="/freelancer-finance"
            element={<FreelancerFinanceDashboard />}
          />
          {/* Sprint 59 AI-Powered Leadership Development Dashboards */}
          <Route
            path="/leadership-training"
            element={<LeadershipTrainingDashboard />}
          />
          <Route
            path="/mentorship-coach"
            element={<AIMentorshipCoachDashboard />}
          />
          <Route
            path="/strategic-leadership"
            element={<StrategicLeadershipDashboard />}
          />
          {/* Sprint 60 The Future of AI Workforce Automation */}
          <Route
            path="/predictive-workforce"
            element={<PredictiveWorkforceDashboard />}
          />
          <Route
            path="/hr-assistant"
            element={<AutonomousHRAssistantDashboard />}
          />
          <Route path="/ai-job-seeker" element={<AIJobSeekerDashboard />} />
          <Route
            path="/global-workforce"
            element={<GlobalWorkforceOrchestratorDashboard />}
          />
          {/* Sprint 61 AI-Powered Autonomous Work Teams */}
          <Route
            path="/autonomous-teams"
            element={<AutonomousTeamDashboard />}
          />
          <Route
            path="/task-delegation"
            element={<TaskDelegationDashboard />}
          />
          <Route
            path="/collaboration-tracking"
            element={<CollaborationTrackingDashboard />}
          />
          {/* Sprint 62 AI-Powered Dynamic Job Roles */}
          <Route path="/dynamic-role" element={<DynamicRoleDashboard />} />
          <Route
            path="/role-transition"
            element={<RoleTransitionDashboard />}
          />
          <Route
            path="/adaptive-reskilling"
            element={<AdaptiveReskillingDashboard />}
          />
          {/* Sprint 63 AI-Powered Collaboration & Meeting Automation */}
          <Route
            path="/collaboration-assistant"
            element={<CollaborationAssistantDashboard />}
          />
          <Route
            path="/meeting-automation"
            element={<MeetingAutomationDashboard />}
          />
          <Route
            path="/real-time-feedback"
            element={<RealTimeFeedbackDashboard />}
          />
          {/* Sprint 64 AI-Powered Workplace Automation Dashboards */}
          <Route
            path="/hr-automation"
            element={<HRProcessAutomationDashboard />}
          />
          <Route
            path="/performance-prediction"
            element={<PerformancePredictionDashboard />}
          />
          <Route
            path="/workflow-automation"
            element={<WorkflowAutomationDashboard />}
          />
          {/* Sprint 65 AI-Powered Employee Digital Twin Technology Dashboards */}
          <Route
            path="/employee-digital-twin"
            element={<EmployeeDigitalTwinDashboard />}
          />
          <Route
            path="/workload-balancing"
            element={<WorkloadBalancingDashboard />}
          />
          <Route
            path="/leadership-decision"
            element={<LeadershipDecisionDashboard />}
          />
          {/* Sprint 66 AI-Powered Emotion & Sentiment-Driven Workplaces */}
          <Route
            path="/emotion-aware-hr"
            element={<EmotionAwareHRPolicyDashboard />}
          />
          <Route
            path="/team-mood"
            element={<TeamMoodOptimizationDashboard />}
          />
          <Route
            path="/wellness-tracking"
            element={<RealTimeWellnessDashboard />}
          />
          {/* Sprint 67 AI-Powered Ethical & Bias-Free AI Workforces */}
          <Route
            path="/bias-elimination"
            element={<BiasEliminationDashboard />}
          />
          <Route
            path="/ai-compliance-monitor"
            element={<AIComplianceMonitorDashboard />}
          />
          {/* Sprint 68 AI-Powered Work Contracts & Smart Legal Automation */}
          <Route
            path="/smart-contracts"
            element={<SmartWorkContractsDashboard />}
          />
          <Route
            path="/contract-performance"
            element={<ContractPerformanceDashboard />}
          />
          {/* Sprint 69 AI-Powered Global AI Workforce Governance */}
          <Route
            path="/workforce-policy"
            element={<AIWorkforcePolicyDashboard />}
          />
          <Route
            path="/labor-law-compliance"
            element={<LaborLawComplianceDashboard />}
          />
          <Route
            path="/regulatory-risk"
            element={<RegulatoryRiskDashboard />}
          />
          {/* Sprint 70 AI-Powered Job Market Predictive Intelligence */}
          <Route
            path="/economic-workforce"
            element={<EconomicWorkforceDashboard />}
          />
          <Route
            path="/global-hiring-trends"
            element={<GlobalHiringTrendsDashboard />}
          />
          <Route
            path="/economic-forecast"
            element={<EconomicForecastDashboard />}
          />
          {/* Sprint 71 AI-Powered Virtual Workforce */}
          <Route
            path="/metaverse-workspaces"
            element={<MetaverseWorkspacesDashboard />}
          />
          <Route
            path="/vr-job-interviews"
            element={<VRJobInterviewsDashboard />}
          />
          <Route
            path="/holographic-meetings"
            element={<HolographicMeetingsDashboard />}
          />
          <Route
            path="/ai-work-assistant"
            element={<AIWorkAssistantDashboard />}
          />
          {/* Sprint 72 AI-Powered Decentralized Autonomous Organizations (DAOs) */}
          <Route
            path="/dao/decentralized-company"
            element={<DecentralizedCompanyDashboard />}
          />
          <Route
            path="/dao/tokenized-work"
            element={<TokenizedWorkDashboard />}
          />
          <Route path="/dao/smart-voting" element={<SmartVotingDashboard />} />
          {/* Sprint 73 AI-Powered Work in the Web3 Ecosystem */}
          <Route path="/web3-workforce" element={<Web3WorkforceDashboard />} />
          <Route
            path="/nft-job-credentials"
            element={<NFTJobCredentialsDashboard />}
          />
          <Route
            path="/blockchain-credibility"
            element={<BlockchainCredibilityDashboard />}
          />
          {/* Sprint 74 AI-Powered Digital Nomad Ecosystem */}
          <Route
            path="/nomad-job-matching"
            element={<NomadJobMatchingDashboard />}
          />
          <Route
            path="/location-based-hiring"
            element={<LocationBasedHiringDashboard />}
          />
          <Route path="/nomad-work-visa" element={<NomadWorkVisaDashboard />} />
          {/* Sprint 75 AI-Powered Autonomous Gig Marketplaces */}
          <Route
            path="/gig-negotiation"
            element={<GigNegotiationDashboard />}
          />
          <Route path="/trust-scoring" element={<TrustScoringDashboard />} />
          {/* Sprint 76 AI-Powered Virtual Co-Working Spaces */}
          <Route
            path="/virtual-collaboration"
            element={<VirtualCollaborationDashboard />}
          />
          <Route
            path="/remote-team-management"
            element={<RemoteTeamManagementDashboard />}
          />
          <Route path="/ai-work-coach" element={<AIWorkCoachDashboard />} />
          {/* Sprint 77 AI-Powered Work-Life Balance Optimization */}
          <Route
            path="/work-schedule-optimizer"
            element={<WorkScheduleOptimizerDashboard />}
          />
          <Route
            path="/productivity-energy-tracker"
            element={<ProductivityEnergyTrackerDashboard />}
          />
          <Route
            path="/burnout-prevention"
            element={<BurnoutPreventionDashboard />}
          />
          {/* Sprint 78 AI-Powered Work Productivity Tokens */}
          <Route
            path="/productivity-tokens"
            element={<ProductivityTokensDashboard />}
          />
          <Route
            path="/milestone-payouts"
            element={<MilestonePayoutsDashboard />}
          />
          <Route
            path="/decentralized-finance"
            element={<DecentralizedFinanceDashboard />}
          />
          {/* Sprint 79 AI-Powered Gig Worker Financial Planning */}
          <Route
            path="/gig-smart-payments"
            element={<GigSmartPaymentsDashboard />}
          />
          <Route path="/freelancer-tax" element={<FreelancerTaxDashboard />} />
          <Route
            path="/gig-financial-forecast"
            element={<GigFinancialForecastDashboard />}
          />
          {/* Sprint 80 AI-Powered Global Workforce Decentralization */}
          <Route
            path="/decentralized-workforce"
            element={<DecentralizedWorkforceDashboard />}
          />
          <Route
            path="/cross-border-contracts"
            element={<CrossBorderContractsDashboard />}
          />
          <Route
            path="/global-visa-automation"
            element={<GlobalVisaAutomationDashboard />}
          />
          <Route
            path="/workforce-policy"
            element={<WorkforcePolicyDashboard />}
          />
          {/* Sprint 81 AI-Powered Self-Learning Work Models */}
          <Route
            path="/self-improving-workforce"
            element={<SelfImprovingWorkforceDashboard />}
          />
          <Route
            path="/self-upgrading-skills"
            element={<SelfUpgradingSkillsDashboard />}
          />
          <Route
            path="/self-adapting-career"
            element={<SelfAdaptingCareerDashboard />}
          />
          {/* Sprint 82 AI-Powered Work Efficiency Agents */}
          <Route
            path="/real-time-productivity"
            element={<RealTimeProductivityDashboard />}
          />
          <Route
            path="/adaptive-workflow"
            element={<AdaptiveWorkflowDashboard />}
          />
          {/* Sprint 83 AI-Powered Quantum Workforce Planning */}
          <Route
            path="/quantum-workforce-sim"
            element={<QuantumWorkforceSimDashboard />}
          />
          <Route
            path="/quantum-workforce-forecast"
            element={<QuantumWorkforceForecastDashboard />}
          />
          <Route
            path="/quantum-hiring-performance"
            element={<QuantumHiringPerformanceDashboard />}
          />
          {/* Sprint 84 AI-Powered Conscious AI Work Models */}
          <Route path="/conscious-ai" element={<ConsciousWorkDashboard />} />
          <Route
            path="/self-aware-automation"
            element={<SelfAwareAutomationDashboard />}
          />
          <Route
            path="/ethical-ai-workforce"
            element={<EthicalAIWorkforceDashboard />}
          />
          {/* Sprint 85 AI-Powered Zero-Manual Work Operations */}
          <Route
            path="/zero-manual-work"
            element={<ZeroManualWorkDashboard />}
          />
          <Route
            path="/self-managed-ai"
            element={<SelfManagedAIWorkforceDashboard />}
          />
          <Route
            path="/ai-only-management"
            element={<AIOnlyManagementDashboard />}
          />
          {/* Sprint 86 AI-Powered Fully Autonomous Global AI Workforce */}
          <Route
            path="/autonomous-global-workforce"
            element={<AutonomousGlobalWorkforceDashboard />}
          />
          <Route path="/ai-governance" element={<AIGovernanceDashboard />} />
          <Route path="/ai-labor-rights" element={<AILaborRightsDashboard />} />
          {/* Sprint 87 AI-Powered Next-Gen Fully AI-Managed HR Systems */}
          <Route
            path="/ai-hr-management"
            element={<AIHRManagementDashboard />}
          />
          <Route
            path="/ai-employee-engagement"
            element={<AIEmployeeEngagementDashboard />}
          />
          <Route
            path="/ai-talent-retention"
            element={<AITalentRetentionDashboard />}
          />
          {/* Sprint 88 AI-Based Automated Hiring & AI-Managed Global Employment Markets */}
          <Route
            path="/ai-automated-hiring"
            element={<AIAutomatedHiringDashboard />}
          />
          <Route
            path="/ai-job-market-analysis"
            element={<AIJobMarketAnalysisDashboard />}
          />
          <Route
            path="/ai-employer-match"
            element={<AIEmployerMatchDashboard />}
          />
          {/* Sprint 89 AI-Powered AI Governance */}
          <Route path="/ai-work-ethics" element={<AIWorkEthicsDashboard />} />
          <Route
            path="/ai-labor-governance"
            element={<AILaborGovernanceDashboard />}
          />
          <Route
            path="/ai-autonomous-policy"
            element={<AIAutonomousPolicyDashboard />}
          />
          {/* Sprint 90 The Ultimate AI Work Evolution */}
          <Route
            path="/ai-self-evolving-workforce"
            element={<AISelfEvolvingWorkforceDashboard />}
          />
          <Route
            path="/ai-global-economy"
            element={<AIGlobalEconomyDashboard />}
          />
          <Route path="/quantum-hiring" element={<QuantumHiringDashboard />} />
          {/* Mobile App Feature */}
          <Route path="/mobile" element={<AutoHireMobile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
