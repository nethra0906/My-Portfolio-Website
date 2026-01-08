import React from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

function App() {
  return (
    <div className="container" id="scroll-root">

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

// NAVBAR
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">NK</div>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <NavItem href="#hero" onClick={() => setMenuOpen(false)}>Home</NavItem>
        <NavItem href="#about" onClick={() => setMenuOpen(false)}>About</NavItem>
        <NavItem href="#projects" onClick={() => setMenuOpen(false)}>Projects</NavItem>
        <NavItem href="#contact" onClick={() => setMenuOpen(false)}>Contact</NavItem>
      </ul>
    </nav>
  );
}

function NavItem({ children, href }) {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const navbarOffset = 100;
    const startY = window.pageYOffset;
    const targetY =
      target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    const duration = 700; // ms
    let startTime = null;

    function animateScroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;

      const progress = Math.min(elapsed / duration, 1);

      // easeInOutCubic
      const ease =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startY + (targetY - startY) * ease);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  };

  return (
    <li>
      <a href={href} onClick={handleClick} className="nav-btn">
        {children}
      </a>
    </li>
  );
}


// HERO
function Hero() {
  return (
    <section id="hero" className="hero-row full-height">
      <div className="hero-text">
        <h1 className="full-name big-heading">
          <span className="highlight">Nethra Krishnan</span>
        </h1>
        <h2 className="hero-subtitle large-subtitle">
          Data Analytics, Tech & UI/UX Enthusiast
        </h2>
        <p className="hero-desc">
          I craft responsive and visually engaging web experiences, blending clean code with intuitive design to deliver impactful user interfaces.
        </p>
        <a
          href="https://github.com/nethra0906"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-btn">View My Work</button>
        </a>
      </div>
      <img
        className="profile-circle large-photo"
        src="profile.jpg"
        alt="Profile"
      />
      
    </section>
  );
}

// ABOUT
function About() {
  const cards = [
    {
      icon: "🔣",
      title: "Clean Code",
      text: "Writing maintainable, efficient code that scales with your business needs.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      text: "Creating intuitive user experiences with modern design principles.",
    },
    {
      icon: "⚡",
      title: "Performance",
      text: "Optimizing applications for speed and excellent user experience.",
    },
  ];

  return (
    <section id="about" className="about">
      <h2 className="about-h2">
        About <span className="highlight">Me</span>
      </h2>
      <p>
        I'm a passionate data analytics, tech & UI/UX enthusiast with experience of creating
        exceptional digital experiences. I love turning complex problems into
        simple, beautiful solutions.
      </p>
      <div className="about-cards">
        {cards.map((card) => (
          <div key={card.title} className="card">
            <div className="card-icon">{card.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// SKILLS
function Skills() {
  const techs = [
    "HTML-CSS",
    "JavaScript",
    "Data Science",
    "React",
    "C++",
    "Python",
    "Figma",
    "Git",
    "Power BI",
    "SQL",
    "Java",
    "Tableau",
  ];

  return (
    <section className="skills">
      <h2 className="skills-title"> <span style={{ color: "#a084f9" }}>Technologies</span> I Work With</h2>
      <div className="skills-list">
        {techs.map((tech) => (
          <span key={tech} className="skills-chip">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

// PROJECTS
function Projects() {
  const projects = [
    {
      img: "project1.jpg",
      name: "Air Traffic Controller",
      link: "https://github.com/nethra0906/Air-Traffic-Controller.git",
    },
    {
      img: "project2.jpg",
      name: "Regional Sales Analysis",
      link: "https://github.com/nethra0906/Regional-Sales-Analysis.git",
    },
    {
      img: "project3.jpg",
      name: "LLM Policy Retriever",
      link: "https://github.com/nethra0906/LLM-Policy-Retriever.git",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-h2">
        Featured <span className="highlight">Projects</span>
      </h2>
      <p className="projects-desc">
        Here are some of my recent projects that showcase my skills.
      </p>
      <div className="project-gallery">
        {projects.map((proj) => (
          <a
            key={proj.name}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-item"
          >
            <img src={proj.img} alt={proj.name} />
            <div className="project-label">{proj.name}</div>
          </a>
        ))}
      </div>

      {/* More Projects Button */}
      <div className="more-projects">
        <a
          href="https://github.com/nethra0906"
          target="_blank"
          rel="noopener noreferrer"
          className="more-btn"
        >
          View More Projects →
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail_portfolio",
        "template_qpb9x99",
        formRef.current,
        "W2ICYcoz3zef3XQqI"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2 className="contact-h2">
        Let’s <span className="highlight">Connect</span>
      </h2>

      <p className="contact-desc">
        Interested in collaborating or have something in mind?  
        Feel free to leave a message below.
      </p>

      <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          placeholder="Your name"
          required
        />

        <input
          type="email"
          name="from_email"
          placeholder="Email address"
          required
        />

        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          required
        ></textarea>

        <button type="submit" className="contact-btn">
          Send Message
        </button>
      </form>
    </section>
  );
}

// FOOTER
function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Nethra Krishnan. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/nethra0906" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/nethrakrishnan/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:nethra.krish0906@gmail.com">
          Email
        </a>
      </div>
    </footer>
  );
}


export default App;
