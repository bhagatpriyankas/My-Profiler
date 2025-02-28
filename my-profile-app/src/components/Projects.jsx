import React from 'react'
import '../css/Projects.css'

function Projects() {
  return (
    <div class="project-section">
       <h2>Recent Work</h2>
        <div class="projects">
            <div class="project-card">
                <h3>Portfolio Website</h3>
                <p>A personal portfolio website built using HTML, CSS, and JavaScript.</p>
                <a href="#">View Project</a>
            </div>
            
            <div class="project-card">
                <h3>E-Commerce Web App</h3>
                <p>A fully functional e-commerce platform using React.js and Node.js.</p>
                <a href="#">View Project</a>
            </div>

            <div class="project-card">
                <h3>Task Manager</h3>
                <p>A to-do list app with real-time sync built with MongoDB and Express.js.</p>
                <a href="#">View Project</a>
            </div>

            <div class="project-card">
                <h3>Blog Website</h3>
                <p>A responsive blog platform built with Next.js and Tailwind CSS.</p>
                <a href="#">View Project</a>
            </div>
        </div>
    </div>
  )
}

export default Projects