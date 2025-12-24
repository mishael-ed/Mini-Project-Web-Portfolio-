import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsPage.css";

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      name: "Biometric-Based Attendance and Shift Management System",
      shortDescription:
        "A biometric system for managing staff attendance, shifts, and reporting in a university environment.",
      techStack: ["Java", "MySQL", "Java Swing", "Biometrics"],
    },
    {
      id: "2",
      name: "FrameBufferWriter Enhancements",
      shortDescription:
        "Low-level OS project focused on improving text rendering, cursor handling, and screen scrolling.",
      techStack: ["Rust", "Operating Systems", "Framebuffers"],
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-heading">PROJECTS</h1>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2 className="project-title">{project.name}</h2>
          <p className="project-description">{project.shortDescription}</p>
          <p className="project-tech">
            <strong>Tech:</strong> {project.techStack.join(", ")}
          </p>
          <Link to={`/projects/${project.id}`} className="project-link">
            View Project →
          </Link>
        </div>
      ))}
      
</div>
  );
}
