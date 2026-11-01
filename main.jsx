import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Moon, Sun,
  Code2, Layers3, GraduationCap, Award, Download, ExternalLink, Sparkles,
  CheckCircle2, Heart, MonitorSmartphone, Phone, MapPin, BookOpen, Cpu,
  ShieldCheck
} from 'lucide-react';
import './styles.css';

const email = 'gulamjafar45@gmail.com';
const github = 'https://github.com/gulamjafar';
const linkedin = 'https://www.linkedin.com/in/gulam-jafar';

const skills = [
  { name: 'C', level: 'Programming language', icon: 'C' },
  { name: 'C++', level: 'Programming language', icon: 'C++' },
  { name: 'Python', level: 'Programming & scripting', icon: 'PY' },
  { name: 'SQL', level: 'Database queries', icon: 'SQL' },
  { name: 'HTML', level: 'Web structure', icon: 'HTML' },
  { name: 'CSS', level: 'Responsive styling', icon: 'CSS' },
  { name: 'JavaScript', level: 'Web interactivity', icon: 'JS' },
  { name: 'MySQL', level: 'Relational database', icon: 'DB' },
  { name: 'NumPy', level: 'Python data library', icon: 'NP' },
  { name: 'Pandas', level: 'Data analysis library', icon: 'PD' },
  { name: 'Arduino / ESP32', level: 'IoT & microcontrollers', icon: 'IoT' },
  { name: 'Git & GitHub', level: 'Version control', icon: 'GH' },
  { name: 'VS Code', level: 'Development environment', icon: 'VS' },
];
const coreSubjects = ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'];
const projects = [
  { number: '01', name: 'ShopSphere E-Commerce Store', category: 'Full-stack web application', description: 'An e-commerce experience focused on clear product discovery, a polished shopping interface, and a scalable web application structure.', tags: ['React', 'Node.js', 'MongoDB'], link: 'https://github.com/gulamjafar' },
  { number: '02', name: 'File Uploader', category: 'Web application', description: 'A file management project designed to make uploading and managing files straightforward through a clean interface.', tags: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/gulamjafar/file-uploader' },
  { number: '03', name: 'Employee Management System', category: 'Management application', description: 'A practical application concept for organizing employee records and managing employee information.', tags: ['Node.js', 'Express', 'MongoDB'], link: 'https://github.com/gulamjafar' },
  { number: '04', name: 'Weather Application', category: 'Frontend application', description: 'A weather-focused interface concept that presents forecast information in a simple, easy-to-understand format.', tags: ['HTML', 'CSS', 'JavaScript'], link: 'https://github.com/gulamjafar' },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']];
  const closeMenu = () => setMenuOpen(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { window.location.href = `mailto:${email}`; }
  };

  return (
    <div className={dark ? 'app dark' : 'app light'}>
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">GJ</span><span>Gulam<span className="brand-dot">.</span></span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="icon-btn theme-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
          <a className="nav-cta" href="#contact">Contact me <ArrowUpRight size={15}/></a>
          <button className="icon-btn menu-btn" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </div>
      </header>
      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> COMPUTER SCIENCE & ENGINEERING STUDENT</div>
            <h1>Curious mind.<br/><span className="gradient-text">Practical builder.</span><br/>Future-focused.</h1>
            <p className="hero-intro">Hi, I'm <strong>Gulam Jafar</strong> — a Computer Science & Engineering student interested in software development, cybersecurity, web technologies, and the Internet of Things. I enjoy learning by building practical projects.</p>
            <div className="hero-actions">
              <a className="primary-btn" href="#projects">Explore my projects <ArrowUpRight size={17}/></a>
              <a className="text-link" href="/resume.pdf" download="Gulam-Jafar-Resume.pdf"><Download size={16}/> Download CV</a>
            </div>
            <div className="hero-socials">
              <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a>
              <a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a>
              <a href={`mailto:${email}`} aria-label="Email"><Mail size={19}/></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
            <div className="profile-card">
              <div className="profile-top"><span className="mini-dot"/><span className="mini-dot"/><span className="mini-dot"/><span className="card-label">gulam-jafar.profile</span></div>
              <img className="avatar" src="/profile.jpg" alt="Gulam Jafar profile photo" />
              <div className="profile-name">Gulam Jafar</div>
              <div className="profile-role">B.Tech · Computer Science & Engineering</div>
              <div className="profile-divider"/>
              <div className="profile-code"><span>const</span> focus = <b>"learn • build • improve"</b>;<br/><span>const</span> interests = <b>"software + IoT"</b>;</div>
              <div className="profile-bottom"><span><Code2 size={14}/> Problem solving</span><span><Sparkles size={14}/> Curiosity</span></div>
            </div>
            <div className="float-chip chip-one"><ShieldCheck size={16}/> <span>Cybersecurity interest</span></div>
            <div className="float-chip chip-two"><Cpu size={16}/> <span>IoT & embedded systems</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="section-heading-row"><h2>Learning today.<br/><span className="gradient-text">Building for tomorrow.</span></h2><p className="section-side-note">Computer science, hands-on projects, and continuous learning.</p></div>
          <div className="about-grid">
            <div className="about-main glass">
              <div className="about-icon"><Sparkles size={22}/></div>
              <h3>Turning fundamentals into practical work.</h3>
              <p>I'm pursuing a B.Tech in Computer Science & Engineering at Ganga Institute of Technology and Management (2024–2028). My learning spans programming, web development, databases, core computer science subjects, and IoT-based projects.</p>
              <p>I enjoy exploring technologies, strengthening problem-solving skills, and applying what I learn through practical projects. I'm currently interested in software development, cybersecurity, web development, and IoT.</p>
              <div className="about-tags"><span>Problem solving</span><span>Teamwork</span><span>Quick learning</span><span>Communication</span></div>
            </div>
            <div className="about-side">
              <div className="info-card glass"><GraduationCap/><div><small>EDUCATION</small><strong>B.Tech — Computer Science & Engineering</strong><span>Ganga Institute of Technology and Management · 2024–2028</span></div></div>
              <div className="info-card glass"><MapPin/><div><small>LOCATION</small><strong>Bihar, India</strong><span>Open to learning and internship opportunities</span></div></div>
              <div className="info-card glass"><Heart/><div><small>INTERESTS</small><strong>Software · Security · Web · IoT</strong><span>Exploring practical applications of technology</span></div></div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-kicker">02 / TECHNICAL SKILLS</div>
          <div className="section-heading-row"><h2>My technical <span className="gradient-text">toolkit.</span></h2><p className="section-side-note">Languages, web fundamentals, databases, and development tools.</p></div>
          <div className="skills-grid">{skills.map((s, i) => <div className="skill-card glass" key={s.name}><div className={`skill-icon skill-${i % 6}`}>{s.icon}</div><div><h3>{s.name}</h3><p>{s.level}</p></div><ArrowUpRight className="skill-arrow" size={17}/></div>)}</div>
          <div className="core-strip glass"><div><Layers3 size={18}/><strong>Core CS subjects</strong></div><p>{coreSubjects.join('  ·  ')}</p></div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading-row"><h2>Learning through <span className="gradient-text">building.</span></h2><p className="section-side-note">A few projects from my learning and development journey.</p></div>
          <div className="projects-grid">{projects.map((p, i) => <article className={`project-card glass project-${i}`} key={p.number}>
            <div className="project-top"><span className="project-number">{p.number} / 04</span><a href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} on GitHub`}><ArrowUpRight size={20}/></a></div>
            <div className="project-art"><div className="art-window"><div className="art-bar"><i/><i/><i/></div><div className="art-content"><div className="art-line wide"/><div className="art-line short"/><div className="art-blocks"><i/><i/><i/></div></div></div><div className="art-orb"/></div>
            <div className="project-category">{p.category}</div><h3>{p.name}</h3><p>{p.description}</p>
            <div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
          </article>)}</div>
          <div className="github-note"><Github size={19}/><span>Explore my code and repositories on GitHub.</span><a href={github} target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={15}/></a></div>
        </section>

        <section className="section-wrap experience-section" id="education">
          <div className="section-kicker">04 / EDUCATION & CERTIFICATIONS</div>
          <div className="section-heading-row"><h2>My learning <span className="gradient-text">journey.</span></h2><p className="section-side-note">Academic foundation and certifications mentioned in my resume.</p></div>
          <div className="timeline">
            <div className="timeline-item"><div className="timeline-marker"><GraduationCap size={17}/></div><div className="timeline-content glass"><div className="timeline-meta"><span>B.TECH</span><span>2024 — 2028</span></div><h3>Computer Science & Engineering</h3><h4>Ganga Institute of Technology and Management</h4><p>Currently pursuing an undergraduate degree with an interest in software development, cybersecurity, web technologies, and IoT.</p></div></div>
            <div className="timeline-item"><div className="timeline-marker"><BookOpen size={17}/></div><div className="timeline-content glass"><div className="timeline-meta"><span>CLASS XII</span><span>2024 · 67.2%</span></div><h3>Senior Secondary — Bihar Board</h3><h4>A.K.S. College, Puraina Paltuhata, Siwan</h4><p>Completed Class XII in 2024.</p></div></div>
            <div className="timeline-item"><div className="timeline-marker"><BookOpen size={17}/></div><div className="timeline-content glass"><div className="timeline-meta"><span>CLASS X</span><span>2021 · 54.2%</span></div><h3>Secondary — Bihar Board</h3><h4>Islamiya Urdu Academy H/S, Mirganj, Gopalganj</h4><p>Completed Class X in 2021.</p></div></div>
          </div>
          <div className="cert-grid">
            <div className="cert-card glass"><div className="cert-icon"><Award/></div><div><small>CERTIFICATION</small><h3>Cyber Security</h3><p>NPTEL</p></div></div>
            <div className="cert-card glass"><div className="cert-icon"><Cpu/></div><div><small>PROJECT / CERTIFICATE</small><h3>IIOT Base Project</h3><p>GITAM</p></div></div>
          </div>
        </section>

        <section className="section-wrap resume-section">
          <div className="resume-panel">
            <div className="resume-copy"><div className="section-kicker">05 / MY RESUME</div><h2>A closer look at<br/>my <span className="gradient-text">journey.</span></h2><p>Download my latest resume for a concise overview of my education, technical skills, projects, and certifications.</p><a className="primary-btn resume-download" href="/resume.pdf" download="Gulam-Jafar-Resume.pdf"><Download size={17}/> Download Resume (PDF)</a><span className="upload-status"><CheckCircle2 size={15}/> Resume PDF is included with this portfolio.</span></div>
            <div className="resume-graphic"><div className="paper"><div className="paper-head"/><div className="paper-line long"/><div className="paper-line medium"/><div className="paper-section"/><div className="paper-line long"/><div className="paper-line short"/><div className="paper-section"/><div className="paper-line medium"/><div className="paper-line long"/><div className="paper-line short"/></div><div className="paper-glow"/></div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="section-kicker">06 / CONTACT</div>
          <div className="contact-panel"><div><div className="eyebrow"><span className="status-dot"/> LET'S CONNECT</div><h2>Let's build<br/>something <span className="gradient-text">useful.</span></h2><p>I'm interested in learning opportunities, internships, and connecting with people who enjoy building with technology.</p><a className="primary-btn" href={`mailto:${email}?subject=Let's%20connect`}>Send an email <ArrowUpRight size={17}/></a></div><div className="contact-details">
            <button className="contact-row" onClick={copyEmail}><span className="contact-icon"><Mail/></span><span><small>EMAIL</small><strong>{email}</strong></span><span className="contact-action">{copied ? 'Copied!' : 'Copy'}</span></button>
            <a className="contact-row" href="tel:+919546745897"><span className="contact-icon"><Phone/></span><span><small>PHONE</small><strong>+91 95467 45897</strong></span><ExternalLink className="contact-action" size={17}/></a>
            <a className="contact-row" href={linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin/></span><span><small>LINKEDIN</small><strong>Gulam Jafar</strong></span><ExternalLink className="contact-action" size={17}/></a>
            <a className="contact-row" href={github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github/></span><span><small>GITHUB</small><strong>github.com/gulamjafar</strong></span><ExternalLink className="contact-action" size={17}/></a>
            <div className="contact-row"><span className="contact-icon"><MapPin/></span><span><small>LOCATION</small><strong>Bihar, India</strong></span></div>
          </div></div>
        </section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">GJ</span><span>Gulam<span className="brand-dot">.</span></span></a><p>Designed & built with curiosity by Gulam Jafar.</p><span>© {new Date().getFullYear()} · All rights reserved</span></footer>
    </div>
  );
}
createRoot(document.getElementById('root')).render(<App />);
