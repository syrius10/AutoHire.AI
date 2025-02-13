import { useState } from "react";
import { fetchLinkedInProfile, fetchGitHubContributions, scheduleGoogleCalendarEvent } from "../services/integrationService";

const Integrations = () => {
    const [linkedInData, setLinkedInData] = useState(null);
    const [githubData, setGitHubData] = useState([]);
    const [event, setEvent] = useState({ summary: "", description: "", start: "", end: ""});
    
    const handleFetchLinkedIn = () => fetchLinkedInProfile("some-profile-id").then(setLinkedInData);
    const handleFetchGitHub = () => fetchGitHubContributions("some-github-username").then(setGitHubData);
    const handleScheduleEvent = () => scheduleGoogleCalendarEvent(event).then(() => alert("Event Scheduled!"));

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Third Party Integrations</h2>

            <button onClick={handleFetchLinkedIn} className="mt-4 px-4 py-2 bg-blue-600 text-white">
                Fetch LinkedIn Profile
            </button>
            {linkedInData && <pre className="mt-2 p-2 border">{JSON.stringify(linkedInData, null, 2)}</pre>}

            <button onClick={handleFetchGitHub} className="mt-4 px-4 py-2 bg-gray-800 text-white">
                Fetch GitHub Contributions
            </button>
            {githubData.length > 0 && <ul>{githubData.map(repo => <li key={repo.id}>{repo.name}</li>)}</ul>}

            <h3 className="text-lg font-semibold mt-6">Schedule Interview</h3>
            <input className="border p-2" placeholder="Event Summary" onChange={(e) => setEvent({...event, summary: e.target.value})} />
            <input className="border p-2 mt-2" placeholder="Description" onChange={(e) => setEvent({...event, description: e.target.value})} />
            <input type="datetime-local" className="border p-2 mt-2" onChange={(e) => setEvent({...event, start: e.target.value})} />
            <input type="datetime-local" className="border p-2 mt-2" onChange={(e) => setEvent({...event, end: e.target.value})} />
            <button onClick={handleScheduleEvent} className="mt-4 px-4 py-2 bg-green-600 text-white">
                Schedule Interview
            </button> 
        </div>
    );
};

export default Integrations;