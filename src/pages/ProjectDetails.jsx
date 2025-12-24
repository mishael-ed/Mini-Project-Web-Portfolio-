import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();

  const projects = [
    {
      id: "1",
      name: "Biometric-Based Attendance and Shift Management System",
      video: "https://www.youtube.com/embed/OVnpovhzlFg?si=JONpEaps-bpD-A-d",
      description: `Pan-Atlantic University aims to enhance its internal operations by automating the attendance and shift management system for its support staff, including Security, Horticulture, Facility, Cafeteria, and Maintenance units.

Key system features include:
- Comprehensive user registration capturing personal details, passport photographs, and fingerprint biometric data.
- Secure, role-based authentication for IT admins, Supervisors, and staff.
- Automatic generation and secure hashing of passwords.
- Email notifications for logins, password resets, sign-ins/outs, and approved shift swaps.
- Shift management with roster uploads/downloads in CSV format.
- Real-time biometric sign-in/sign-out using fingerprint authentication.
- Attendance reporting with detection of late sign-ins, early sign-outs, and absences.
- Unit-level and system-wide dashboards.`,
      techStack: ["Java", "MySQL", "Java Swing", "Biometrics", "Email Automation"],
      github: "https://github.com/mishael-ed/Biometric-Based-Attendance-and-Shift-Management-System-for-Pan-Atlantic-University-Support-Staff",
    },
    {
      id: "2",
      name: "FrameBufferWriter Enhancements",
      image: "/images/framebuffer-writer.png",
      description: `This project was developed as part of Operating Systems coursework and focuses on improving a custom FrameBufferWriter.

Major enhancements:
- Dynamic cursor positioning with validation.
- Automatic cursor wrapping across rows.
- Screen scrolling when text exceeds the screen height.
- Improved error handling.
- Custom print! macro for handling text overflow and escape sequences.

This project demonstrates low-level systems programming skills and OS text output mechanisms.`,
      techStack: ["Rust", "Operating Systems", "Framebuffers", "Low-Level Systems"],
      github: "https://github.com/mishael-ed/Operating-System-Text-Output-Engine-Using-Framebuffers",
    },
  ];

  const project = projects.find((p) => p.id === id);
  if (!project) return <div>Project not found.</div>;

  return (
    <div className="project-details-page">
      <h1>{project.name}</h1>

   
      {project.video && (
        <div className="project-media">
          <iframe
            width="100%"
            height="400"
            src={project.video}
            title={project.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {project.image && (
        <div className="project-media">
          <img src={project.image} alt={project.name} />
        </div>
      )}

      
      <div className="project-description">
        {project.description.split("\n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>

      
      <p className="project-tech">
        <strong>Tech Stack:</strong> {project.techStack.join(", ")}
      </p>

      
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-github-link"
        >
          View on GitHub →
        </a>
      )}
    </div>
  );
}
