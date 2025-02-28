import React from 'react'
import '../css/About.css'

function About() {
  return (
    <div class="about-section">
           <h2>About Me 👩‍💻</h2>
        <p class="about-content">
            Hi, I'm <strong>Priyanka</strong>, a passionate <strong>Software Developer</strong> who loves building innovative and efficient web applications. 
            With expertise in front-end and back-end development, I focus on creating seamless user experiences using modern technologies.
        </p>
        
        {/* <!-- Skills Section --> */}
        <h3>Skills & Technologies 🚀</h3>
        <div class="skills">
            <span class="skill">JavaScript</span>
            <span class="skill">React.js</span>
            <span class="skill">Node.js</span>
            <span class="skill">HTML & CSS</span>
            <span class="skill">MongoDB</span>
            <span class="skill">Git & GitHub</span>
            <span class="skill">UI/UX Design</span>
        </div>

        {/* <!-- Education Section --> */}
        <h3>Education 🎓</h3>
        <div class="timeline">
            <div class="timeline-item">
                <h3>Bachelor of Technology in Computer Science</h3>
                <p>XYZ University, 2018 - 2022</p>
                <p>Graduated with honors, specializing in full-stack development and AI technologies.</p>
            </div>
        </div>

        {/* <!-- Work Experience Section --> */}
        <h3>Work Experience 💼</h3>
        <div class="timeline">
            <div class="timeline-item">
                <h3>Software Developer | ABC Tech Solutions</h3>
                <p>2023 - Present</p>
                <p>Developing scalable web applications using React.js, Node.js, and cloud technologies.</p>
            </div>

            <div class="timeline-item">
                <h3>Web Development Intern | XYZ Software</h3>
                <p>2022 - 2023</p>
                <p>2023 - 2024</p>
                <p>Worked on front-end development projects and improved website performance by 30%.</p>
            </div>
        </div>
    </div>
  )
}

export default About