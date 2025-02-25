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
import EmployeeEngagementDashboard from "./pages/EmployeeEngagementDashboard";
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
          <Route path="/succession-planning" element={<SuccessionPlanningDashboard />} />
          <Route path="/turnover-predictor" element={<TurnoverPredictorDashboard />} />
          <Route path="/future-skills" element={<FutureSkillTrendsDashboard />} />
          <Route path="/workforce-adaptability" element={<AdaptiveWorkforceDashboard />} />
          <Route path="/reskilling-pathways" element={<ReskillingPathwaysDashboard />} />
          <Route path="/enterprize-workforce-cost" element={<EnterpriseWorkforceCostDashboard />} />
          <Route path="/talent-mobility" element={<TalentMobilityDashboard />} />
          <Route path="/enterprise-recruitment" element={<EnterpriseRecruitmentDashboard />} />
          <Route path="/corporate-turnover-risk" element={<CorporateTurnoverRiskDashboard />} />
          <Route path="/employee-engagement" element={<EmployeeEngagementDashboard />} />
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

          {/* Mobile App Feature */}
          <Route path="/mobile" element={<AutoHireMobile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

