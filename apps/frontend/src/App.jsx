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

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-list" element={<JobList />} />
          <Route path="/job-recommendations" element={<JobRecommendations />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/interview-analysis" element={<InterviewAnalysis />} />
          <Route path="/schedule-interview" element={<ScheduleInterview />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

