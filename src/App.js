import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
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
  return (
    <nav className="navbar">
      <div className="logo">NK</div>
      <ul className="nav-links">
        <NavItem href="#hero">Home</NavItem>
        <NavItem href="#about">About</NavItem>
        <NavItem href="#projects">Projects</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </ul>
    </nav>
  );
}

function NavItem({ children, href }) {
  return (
    <li>
      <a className="nav-btn" href={href}>
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
      name: "Hospital Management Website",
      link: "https://github.com/nethra0906/WeCare-Hospitals-Website.git",
    },
    {
      img: "project2.jpg",
      name: "Regional Sales Analysis",
      link: "https://github.com/nethra0906/Regional-Sales-Analysis.git",
    },
    {
      img: "project3.jpg",
      name: "Design Portfolio",
      link: "https://www.figma.com/file/akUGHzk9dwRLpWvpYRUfzC/Design-Portfolio",
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


// CONTACT
function Contact() {
  const contacts = [
    {
      icon: "✉️",
      title: "Email",
      text: "nethra.krish0906@gmail.com",
    },

    {
      icon: "📍",
      title: "Location",
      text: "Chennai, Tamil Nadu",
    },
  ];

  return (
    <section id="contact" className="contact">
      <h2 className="contact-h2">
        Get In <span className="highlight">Touch</span>
      </h2>
      <p className="contact-desc">
        I'm always interested in new opportunities and exciting projects. Let's
        discuss how we can work together!
      </p>
      <div className="contact-cards">
        {contacts.map((card) => (
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
