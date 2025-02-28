import React from 'react'
import '../css/Home.css'

function Home() {
  return (
    
    <div class="hero">
        <h1>Hi, I'm Priyanka 👋</h1>
        <p>A passionate <strong>Software Developer</strong> crafting elegant, efficient, and scalable solutions. I specialize in modern web technologies and love building interactive, user-friendly applications.</p>
        <a href="#projects" class="btn">Explore My Work 🚀</a>

        {/* <!-- Social Media Icons --> */}
        <div class="social-icons">
            <a href="https://github.com/" ><i class="fab fa-github"></i></a>
            <a href="https://linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>

    </div>
  )
}

export default Home