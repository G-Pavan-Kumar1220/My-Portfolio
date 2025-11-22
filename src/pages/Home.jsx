import React from 'react'
import { useState,useEffect } from 'react';

function Home() {

  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    fetch(`https://api.github.com/users/G-Pavan-Kumar1220`)
      .then(res => res.json())
      .then(data => setAvatar(data.avatar_url));
  }, []);

  return (
    <>
      <div className="home">
        <div className="right-side">
          <section id="profile-medium" class="profile">
            <h1>Hi, I'm <span className="name">PAVAN KUMAR</span>.</h1>
            <p class="lead">
              I'm a MERN stack developer specializing in building full-stack web applications using MongoDB, Express, 
              React, and Node.js. I create scalable APIs, responsive UIs, and seamless end-to-end user experiences with clean, 
              efficient, and maintainable code. I enjoy transforming ideas into fully functional, 
              production-ready applications.
            </p>

            <ul class="profile-meta">
              <li><strong>Role:</strong> MERN stack developer </li>
              <li><strong>Available for:</strong> Freelance / Full-time</li>
            </ul>

            <div className="profile-actions">
              <a className="btn" href="/resume.pdf" target="_blank" rel="noopener">Download Resume</a>
              <a className="btn btn-outline" href="https://mail.google.com/mail/?view=cm&fs=1&to=yourmail@gmail.com">Contact Me</a>
            </div>
          </section>
        </div>

        <div className="right-side">
          <img className='my-pic' src={avatar} alt="profile" />
        </div>
      </div>
    </>
  )
}

export default Home
