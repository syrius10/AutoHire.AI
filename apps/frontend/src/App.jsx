import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import JobRecommendations from "./pages/JobRecommendations";
import AnalyticsDashboard from "./pages/AnalyticsDashboard";
import Integrations from "./pages/Integrations";
import InterviewAnalysis from "./pages/InterviewAnalysis";
import ScheduleInterview from "./pages/ScheduleInterview";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
