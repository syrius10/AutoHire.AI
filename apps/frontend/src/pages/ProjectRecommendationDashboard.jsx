import React, { useEffect, useState } from "react";
import { fetchProjectRecommendations } from "../services/projectRecommendationService";

export default function ProjectRecommendationDashboard() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            try {
                const data = await fetchProjectRecommendations();
                setProjects(data);
            } catch (error) {
                console.error("Error fetching project recommendations:", error);
            }
        }
        loadProjects();
    }, []);

    return (
        <div>
            <h2>Recommended Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>{project.title} - {project.category}</li>
                ))}
            </ul>
        </div>
    );
}
