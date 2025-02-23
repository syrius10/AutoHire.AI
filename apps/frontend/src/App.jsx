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

          {/* Mobile App Feature */}
          <Route path="/mobile" element={<AutoHireMobile />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

