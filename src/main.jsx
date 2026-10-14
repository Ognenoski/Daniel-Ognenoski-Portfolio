import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
const copy = {
  en: {
    nav: ["About", "Projects", "Journey", "Contact"],
    badge: "Aspiring Full Stack Developer",
    title: ["DANIEL", "OGNENOSKI."],
    intro:
      "I’m Daniel, a computer engineering graduate building my next chapter in web development. Combining technical curiosity with years of responsibility, teamwork, and a service-first mindset.",
    work: "Explore projects",
    cv: "Download CV",
    based: "Based in Worms, Germany",
    learning: "Currently learning at Semos Education",
    aboutTitle: "A technical foundation.\nA practical mindset.",
    about:
      "My bachelor’s degree in computer engineering gave me a foundation in programming, databases, networks, and operating systems. Today, I’m developing that foundation through full-stack training at Semos Education, studying React, Node.js, Express, and MongoDB — turning concepts into practical web applications.",
    approach:
      "From coordinating a delivery team to structuring an application, I value clear communication, dependable processes, and careful attention to the people using the result.",
    skills: "TECHNOLOGIES IN MY TRAINING",
    projects: "Learning through building.",
    projectIntro:
      "A selection of training project areas from my CV. Repository links and detailed case studies will be added as they become available.",
    placeholder: "Training example · Link pending",
    cards: [
      [
        "01",
        "CRUD application",
        "Creating and managing records with Node.js and Express.js. Practising clear routes and application structure.",
        ["Node.js", "Express.js"],
      ],
      [
        "02",
        "REST API & database",
        "Exploring REST APIs and data persistence with MongoDB and Mongoose.",
        ["REST API", "MongoDB", "Mongoose"],
      ],
      [
        "03",
        "Frontend interfaces",
        "Building web interfaces with HTML, CSS, and JavaScript, with a focus on structure and usability.",
        ["HTML", "CSS", "JavaScript"],
      ],
    ],
    journey: "My path into development.",
    edu: "Education & training",
    experience: "Professional experience",
    training: "Full-stack developer training",
    degree: "Bachelor’s degree · Computer Engineering",
    current: "Mar 2026 — Mar 2027 · In progress",
    school:
      "Faculty of Technical Sciences, University St. Kliment Ohridski · Bitola",
    degreeDate: "Sep 2008 — Feb 2018",
    roles: [
      [
        "Jan 2025 — Present",
        "Mail & parcel delivery",
        "Deutsche Post & DHL · Lampertheim",
        "Independent route organisation, reliable delivery, and direct customer service.",
      ],
      [
        "Jan 2023 — Dec 2024",
        "Team leader",
        "Deutsche Post & DHL · Erbes-Büdesheim",
        "Team coordination, staffing and route planning, onboarding, and operational quality.",
      ],
      [
        "Feb 2018 — Dec 2022",
        "Mail & parcel delivery",
        "Deutsche Post & DHL · Alzey",
        "Daily delivery operations, customer contact, and dependable time management.",
      ],
    ],
    language: "Languages",
    langs: [
      "German · C1",
      "Macedonian · C2",
      "English · B1",
      "Serbian / Croatian · C1",
    ],
    contact: "Let’s start a conversation.",
    contactText:
      "Interested in my journey, a learning project, or an opportunity to grow in IT? I’d be happy to connect.",
    email: "Send an email",
    footer: "Built with curiosity. Designed with care.",
    section: ["01 / ABOUT", "02 / PROJECTS", "03 / JOURNEY", "04 / CONTACT"],
    profile: "Developer in training",
    more: "Visit GitHub",
    top: "Back to top",
  },
  de: {
    nav: ["Über mich", "Projekte", "Werdegang", "Kontakt"],
    badge: "Angehender Full-Stack-Entwickler",
    title: ["DANIEL", "OGNENOSKI."],
    intro:
      "Ich bin Daniel, Absolvent der Technischen Informatik, und gestalte meinen nächsten Schritt in der Webentwicklung. Technische Neugier trifft auf langjährige Verantwortung, Teamarbeit und Serviceorientierung.",
    work: "Projekte entdecken",
    cv: "Lebenslauf herunterladen",
    based: "Worms, Deutschland",
    learning: "Aktuell in Weiterbildung bei Semos Education",
    aboutTitle: "Technische Grundlagen.\nEine praktische Denkweise.",
    about:
      "Mein Bachelorabschluss in Technischer Informatik bildet die Grundlage in Programmierung, Datenbanken, Netzwerken und Betriebssystemen. Heute vertiefe ich dieses Wissen in der Full-Stack-Weiterbildung bei Semos Education mit React, Node.js, Express und MongoDB und setze Konzepte in praktische Webanwendungen um.",
    approach:
      "Ob bei der Koordination eines Zustellteams oder beim Aufbau einer Anwendung: Ich schätze klare Kommunikation, zuverlässige Abläufe und einen bewussten Blick auf die Menschen, die das Ergebnis nutzen.",
    skills: "TECHNOLOGIEN IN MEINER WEITERBILDUNG",
    projects: "Lernen durch Entwickeln.",
    projectIntro:
      "Ausgewählte Projektbereiche meiner Weiterbildung aus dem Lebenslauf. Repository-Links und ausführliche Projektbeschreibungen folgen, sobald sie verfügbar sind.",
    placeholder: "Übungsbeispiel · Link folgt",
    cards: [
      [
        "01",
        "CRUD-Anwendung",
        "Datensätze erstellen und verwalten mit Node.js und Express.js. Klare Routen und Anwendungsstrukturen üben.",
        ["Node.js", "Express.js"],
      ],
      [
        "02",
        "REST API & Datenbank",
        "REST APIs und Datenpersistenz mit MongoDB und Mongoose erkunden.",
        ["REST API", "MongoDB", "Mongoose"],
      ],
      [
        "03",
        "Frontend-Oberflächen",
        "Weboberflächen mit HTML, CSS und JavaScript entwickeln, mit Fokus auf Struktur und Nutzbarkeit.",
        ["HTML", "CSS", "JavaScript"],
      ],
    ],
    journey: "Mein Weg in die Entwicklung.",
    edu: "Ausbildung & Weiterbildung",
    experience: "Berufserfahrung",
    training: "Weiterbildung zum Full-Stack-Entwickler",
    degree: "Bachelorabschluss · Technische Informatik",
    current: "Mär 2026 — Mär 2027 · Laufend",
    school:
      "Faculty of Technical Sciences, University St. Kliment Ohridski · Bitola",
    degreeDate: "Sep 2008 — Feb 2018",
    roles: [
      [
        "Jan 2025 — heute",
        "Zusteller für Briefe und Pakete",
        "Deutsche Post & DHL · Lampertheim",
        "Selbstständige Tourenorganisation, zuverlässige Zustellung und direkter Kundenservice.",
      ],
      [
        "Jan 2023 — Dez 2024",
        "Teamleiter",
        "Deutsche Post & DHL · Erbes-Bödesheim",
        "Teamkoordination, Personal- und Tourenplanung, Einarbeitung und Qualität im Betrieb.",
      ],
      [
        "Feb 2018 — Dez 2022",
        "Zusteller für Briefe und Pakete",
        "Deutsche Post & DHL · Alzey",
        "Tägliche Zustellung, Kundenkontakt und zuverlässiges Zeitmanagement.",
      ],
    ],
    language: "Sprachen",
    langs: [
      "Deutsch · C1",
      "Mazedonisch · C2",
      "Englisch · B1",
      "Serbisch / Kroatisch · C1",
    ],
    contact: "Kommen wir ins Gespräch.",
    contactText:
      "Interesse an meinem Werdegang, einem Lernprojekt oder einer Möglichkeit, in der IT zu wachsen? Ich freue mich auf den Austausch.",
    email: "E-Mail schreiben",
    footer: "Mit Neugier entwickelt. Mit Sorgfalt gestaltet.",
    section: [
      "01 / ÜBER MICH",
      "02 / PROJEKTE",
      "03 / WERDEGANG",
      "04 / KONTAKT",
    ],
    profile: "Entwickler in Weiterbildung",
    more: "GitHub besuchen",
    top: "Nach oben",
  },
};
function App() {
  const [lang, setLang] = useState(() =>
    localStorage.getItem("portfolio-language") === "de" ? "de" : "en",
  );
  const [menu, setMenu] = useState(false);
  const t = copy[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("portfolio-language", lang);
  }, [lang]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const ids = ["about", "projects", "journey", "contact"];
  return (
    <>
      <a className="skip" href="#main">
        {lang === "de" ? "Zum Inhalt" : "Skip to content"}
      </a>
      <header>
        <a className="brand" href="#" aria-label="Daniel Ognenoski home">
          DO<span>.</span>
        </a>
        <nav
          className={menu ? "open" : ""}
          aria-label={lang === "de" ? "Hauptnavigation" : "Main navigation"}
        >
          {t.nav.map((n, i) => (
            <a key={n} href={"#" + ids[i]} onClick={() => setMenu(false)}>
              <span className="nav-symbol" aria-hidden="true">
                {["◈", "▦", "◇", "↗"][i]}
              </span>
              {n}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language" aria-label="Language">
            <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
            <span>/</span>
            <button aria-pressed={lang === "de"} onClick={() => setLang("de")}>
              DE
            </button>
          </div>
          <button
            className="menu"
            aria-expanded={menu}
            aria-label={lang === "de" ? "Menü" : "Menu"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>
      </header>
      <main id="main">
        <div className="page-status">
          <span className="dot" />
          {lang === "de"
            ? "LERNEN. ENTWICKELN. WACHSEN."
            : "LEARNING. BUILDING. GROWING."}
        </div>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" />
              {t.badge}
            </div>
            <p className="hello">
              {lang === "de"
                ? "TECHNISCHE INFORMATIK. WEBENTWICKLUNG."
                : "COMPUTER ENGINEERING. WEB DEVELOPMENT."}
            </p>
            <h1>
              {t.title[0]}
              <br />
              <span>{t.title[1]}</span>
            </h1>
            <p className="intro">{t.intro}</p>
            <div className="buttons">
              <a className="button primary" href="#projects">
                {t.work}
                <span>↗</span>
              </a>
              <a
                className="button secondary"
                href="./Daniel-Ognenoski-CV.pdf"
                download
              >
                {t.cv}
                <span>↓</span>
              </a>
            </div>
            <div className="hero-socials">
              <a
                className="social-button github"
                href="https://github.com/Ognenoski"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">&lt;/&gt;</span> GitHub{" "}
                <b aria-hidden="true">↗</b>
              </a>
              <a
                className="social-button linkedin"
                href="https://www.linkedin.com/in/daniel-ognenoski/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="in-icon" aria-hidden="true">
                  in
                </span>{" "}
                LinkedIn <b aria-hidden="true">↗</b>
              </a>
            </div>
            <div className="location">
              <span>⌖</span>
              {t.based}
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="orb" />
            <div className="portrait">
              <img src="./daniel.jpg" alt="Daniel Ognenoski" />
              <div className="portrait-caption">
                <span>Daniel Ognenoski</span>
                <small>{t.profile}</small>
              </div>
            </div>
            <div className="floating">
              <span className="dot" />
              <div>
                {t.learning}
                <small>2026 — 2027</small>
              </div>
            </div>
            <div className="orbit-label">&lt; keep learning /&gt;</div>
          </div>
        </section>
        <div className="ticker" aria-hidden="true">
          <span>WEB DEVELOPMENT</span>
          <b>✦</b>
          <span>TECHNICAL CURIOSITY</span>
          <b>✦</b>
          <span>CONTINUOUS LEARNING</span>
          <b>✦</b>
          <span>TEAMWORK</span>
        </div>
        <section id="about" className="section reveal">
          <p className="eyebrow">{t.section[0]}</p>
          <div className="about-grid">
            <h2>
              {t.aboutTitle.split("\n").map((l, i) => (
                <React.Fragment key={l}>
                  {i > 0 && <br />}
                  {l}
                </React.Fragment>
              ))}
            </h2>
            <div>
              <p>{t.about}</p>
              <p>{t.approach}</p>
            </div>
          </div>
          <div className="foundation-grid">
            <div>
              <strong>BSc</strong>
              <span>
                {lang === "de"
                  ? "Technische Informatik"
                  : "Computer Engineering"}
              </span>
            </div>
            <div>
              <strong>Semos</strong>
              <span>
                {lang === "de"
                  ? "Full-Stack-Weiterbildung"
                  : "Full-stack training"}
              </span>
            </div>
            <div>
              <strong>Web</strong>
              <span>HTML · CSS · JavaScript</span>
            </div>
          </div>
          <div className="skillbar">
            <p className="eyebrow">{t.skills}</p>
            <div className="chips">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "Git & GitHub",
              ].map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="section reveal">
          <p className="eyebrow">{t.section[1]}</p>
          <div className="section-heading">
            <h2>{t.projects}</h2>
            <a
              className="text-link"
              href="https://github.com/Ognenoski"
              target="_blank"
              rel="noreferrer"
            >
              {t.more} ↗
            </a>
          </div>
          <p className="section-intro">{t.projectIntro}</p>
          <div className="project-grid">
            {t.cards.map((c, i) => (
              <article className="project" key={c[0]}>
                <div className={"project-art art-" + i} aria-hidden="true">
                  {i === 0 ? (
                    <div className="mini-ui">
                      <div className="mini-top">
                        Records <span>+ Add</span>
                      </div>
                      {[1, 2, 3].map((n) => (
                        <div className="mini-row" key={n}>
                          <i />
                          <b />
                          <em />
                        </div>
                      ))}
                    </div>
                  ) : i === 1 ? (
                    <div className="api-art">
                      <span>GET /api/items</span>
                      <pre>
                        {'{\n  "status": "success",\n  "data": [...]\n}'}
                      </pre>
                    </div>
                  ) : (
                    <div className="web-art">
                      <div />
                      <h3>Hello, web.</h3>
                      <span />
                      <span />
                      <button tabIndex="-1">Explore ↗</button>
                    </div>
                  )}
                  <span className="project-number">{c[0]}</span>
                </div>
                <div className="project-body">
                  <p className="project-status">{t.placeholder}</p>
                  <h3>{c[1]}</h3>
                  <p>{c[2]}</p>
                  <div className="tags">
                    {c[3].map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="journey" className="section reveal">
          <p className="eyebrow">{t.section[2]}</p>
          <h2>{t.journey}</h2>
          <div className="journey-grid">
            <div>
              <h3 className="column-title">{t.edu}</h3>
              <article className="timeline featured">
                <small>{t.current}</small>
                <h3>{t.training}</h3>
                <p>Semos Education · Skopje</p>
                <div className="tags">
                  <span>Full Stack</span>
                  <span>React</span>
                  <span>APIs</span>
                  <span>Git</span>
                </div>
              </article>
              <article className="timeline">
                <small>{t.degreeDate}</small>
                <h3>{t.degree}</h3>
                <p>{t.school}</p>
              </article>
              <h3 className="column-title languages-title">{t.language}</h3>
              <div className="chips languages">
                {t.langs.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="column-title">{t.experience}</h3>
              {t.roles.map((r) => (
                <article className="timeline" key={r[0]}>
                  <small>{r[0]}</small>
                  <h3>{r[1]}</h3>
                  <p className="company">{r[2]}</p>
                  <p>{r[3]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="section contact reveal">
          <p className="eyebrow">{t.section[3]}</p>
          <h2>{t.contact}</h2>
          <p>{t.contactText}</p>
          <a className="contact-email" href="mailto:ognenoski@gmx.de">
            ognenoski@gmx.de <span>↗</span>
          </a>
          <div className="buttons">
            <a className="button primary" href="mailto:ognenoski@gmx.de">
              {t.email} ↗
            </a>
            <a
              className="button social-button linkedin"
              href="https://www.linkedin.com/in/daniel-ognenoski/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="in-icon" aria-hidden="true">
                in
              </span>{" "}
              LinkedIn <b aria-hidden="true">↗</b>
            </a>
            <a
              className="button social-button github"
              href="https://github.com/Ognenoski"
              target="_blank"
              rel="noreferrer"
            >
              <span aria-hidden="true">&lt;/&gt;</span> GitHub{" "}
              <b aria-hidden="true">↗</b>
            </a>
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#">
          DO<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} Daniel Ognenoski · {t.footer}
        </p>
        <a href="#" className="text-link">
          {t.top} ↑
        </a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
