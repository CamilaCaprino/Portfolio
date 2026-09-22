"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Check, Code2, Download,
  Languages, Mail, Moon, Phone, Sparkles, Sun, UserRound,
} from "lucide-react";

type Language = "es" | "en";

const content = {
  es: {
    nav: [["Perfil", "#perfil"], ["Experiencia", "#experiencia"], ["Habilidades", "#habilidades"], ["Formación", "#formacion"]],
    availability: "Disponible para nuevos desafíos",
    eyebrow: "Analista de Sistemas · Producto · Desarrollo",
    intro: "Conecto necesidades reales con soluciones digitales que funcionan.",
    summary: "Soy Camila, Analista de Sistemas con experiencia en desarrollo, análisis funcional y gestión de proyectos tecnológicos. Me apasiona partir de un problema, comprenderlo y transformarlo en una solución que pueda automatizarse y sistematizarse.",
    badge: "Analista de Sistemas",
    cta: "Conocé mi experiencia", contact: "Hablemos",
    profileKicker: "Lo que hago",
    profileTitle: "Convierto problemas en soluciones que mejoran la forma de trabajar.",
    profileBody: "Me motiva investigar cada desafío, encontrar su causa y diseñar una respuesta concreta. Busco automatizar y sistematizar procesos para resolver la necesidad actual y dejar una solución sostenible. Disfruto aprender, asumir nuevos retos y construir en equipo, conectando usuarios, negocio y tecnología.",
    profilePills: ["Resolución de problemas", "Automatización y sistemas", "Trabajo en equipo", "Gestión ágil"],
    impact: [["03+", "años creando soluciones digitales"], ["02", "sectores de impacto: salud y gestión pública"], ["360°", "visión del ciclo de vida del producto"]],
    experienceKicker: "Trayectoria", experienceTitle: "Experiencia profesional",
    roles: [
      {
        period: "2024 — Actualidad", company: "Viasano Salud",
        role: "Analista de Desarrollo · Gestión de Proyectos Tecnológicos",
        description: "Impulso soluciones digitales para afiliados y equipos internos, articulando negocio, usuarios y desarrollo durante todo el ciclo del proyecto.",
        bullets: [
          "Relevamiento, documentación funcional, user stories y criterios de aceptación.",
          "Gestión de backlog, priorización, sprint planning y seguimiento de entregas.",
          "Diseño y desarrollo de sitios web, sistemas escalables y aplicaciones PWA.",
          "Testing funcional, implementación, capacitación y acompañamiento a usuarios.",
          "Automatización y mejora continua de procesos del sector salud.",
        ],
      },
      {
        period: "2023 — 2024", company: "Municipalidad de Merlo",
        role: "Analista de Sistemas · Desarrollo e Implementación",
        description: "Diseñé e implementé sistemas web y mejoras funcionales para digitalizar procesos administrativos de distintas áreas municipales.",
        bullets: [
          "Análisis de procesos y requerimientos junto a usuarios finales.",
          "Desarrollo y rediseño de sistemas internos de gestión.",
          "Mejoras de estructura, rendimiento y adaptabilidad.",
          "Soporte funcional y acompañamiento durante la implementación.",
        ],
      },
    ],
    toolkitKicker: "Caja de herramientas", toolkitTitle: "Habilidades que se complementan",
    skillGroups: [
      { title: "Producto & análisis", items: ["Product discovery", "Backlog management", "User stories", "Roadmaps", "Testing funcional", "UX/UI"] },
      { title: "Desarrollo", items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Symfony", "MySQL", "Livewire", "Tailwind CSS", "PWA"] },
      { title: "Gestión & colaboración", items: ["Scrum", "Kanban", "Jira", "ClickUp", "Trello", "Git", "GitHub", "GitLab", "Google Workspace"] },
    ],
    educationKicker: "Formación", educationTitle: "Aprender, aplicar, mejorar.",
    degree: "Técnica Superior en Análisis de Sistemas",
    degreeMeta: "Instituto Superior de Formación Técnica N.º 177 · 2021—2023 · Título obtenido",
    courses: [
      ["Oracle Next Education (ONE)", "Lógica de programación, Frontend y habilidades blandas · 2024"],
      ["Coderhouse", "JavaScript · 2023"],
      ["Udemy", "Testing de software, IA generativa y gestión con Jira & Scrum · 2026"],
    ],
    learningTitle: "Aprendizaje continuo",
    learningBody: "Me encuentro en capacitación constante para ampliar día a día mis habilidades profesionales. Actualmente, mi foco está en profundizar el uso de la inteligencia artificial aplicada al análisis, la automatización y la creación de soluciones digitales más eficientes.",
    languagesTitle: "Idiomas", languages: "Español nativo · Inglés intermedio · Nivel 6 en curso en la Universidad Nacional del Oeste",
    cvKicker: "CV", cvTitle: "Mi experiencia, en una sola versión.",
    cvSubtitle: "Un CV consolidado que reúne desarrollo, análisis funcional, producto y gestión de proyectos.",
    cvs: [
      ["CV profesional completo", "Experiencia, formación, habilidades técnicas y fortalezas profesionales.", "/cv/Camila-Caprino-CV.pdf"],
    ],
    download: "Descargar PDF",
    closing: "¿Construimos algo que simplifique lo complejo?",
    closingBody: "Estoy abierta a oportunidades donde pueda conectar producto, procesos y tecnología para generar impacto real.",
    email: "Escribime", footer: "Diseñado y desarrollado con intención.",
  },
  en: {
    nav: [["Profile", "#perfil"], ["Experience", "#experiencia"], ["Skills", "#habilidades"], ["Education", "#formacion"]],
    availability: "Open to new opportunities",
    eyebrow: "Systems Analyst · Product · Development",
    intro: "I connect real needs with digital solutions that work.",
    summary: "I'm Camila, a Systems Analyst with experience in software development, functional analysis and technology project management. I love starting with a problem, understanding it and turning it into a solution that can be automated and systematized.",
    badge: "Systems Analyst",
    cta: "Explore my experience", contact: "Let's talk",
    profileKicker: "What I do",
    profileTitle: "I turn problems into solutions that improve how people work.",
    profileBody: "I enjoy investigating each challenge, finding its root cause and designing a concrete response. I automate and systematize processes to solve the immediate need while leaving a sustainable solution. I value learning, new challenges and teamwork across users, business and technology.",
    profilePills: ["Problem solving", "Automation & systems", "Teamwork", "Agile delivery"],
    impact: [["03+", "years building digital solutions"], ["02", "impact sectors: healthcare and public services"], ["360°", "product life-cycle perspective"]],
    experienceKicker: "Career", experienceTitle: "Professional experience",
    roles: [
      {
        period: "2024 — Present", company: "Viasano Salud",
        role: "Development Analyst · Technology Project Management",
        description: "I drive digital solutions for members and internal teams, connecting business, users and development throughout the project life cycle.",
        bullets: [
          "Discovery, functional documentation, user stories and acceptance criteria.",
          "Backlog management, prioritization, sprint planning and delivery tracking.",
          "Design and development of websites, scalable systems and PWA applications.",
          "Functional testing, implementation, training and user enablement.",
          "Automation and continuous improvement for healthcare operations.",
        ],
      },
      {
        period: "2023 — 2024", company: "Municipality of Merlo",
        role: "Systems Analyst · Development & Implementation",
        description: "I designed and implemented web systems and functional improvements to digitize administrative processes across municipal departments.",
        bullets: [
          "Process and requirements analysis with end users.",
          "Development and redesign of internal management systems.",
          "Structural, performance and responsive improvements.",
          "Functional support throughout implementation.",
        ],
      },
    ],
    toolkitKicker: "Toolkit", toolkitTitle: "Complementary skills",
    skillGroups: [
      { title: "Product & analysis", items: ["Product discovery", "Backlog management", "User stories", "Roadmaps", "Functional testing", "UX/UI"] },
      { title: "Development", items: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "Symfony", "MySQL", "Livewire", "Tailwind CSS", "PWA"] },
      { title: "Delivery & collaboration", items: ["Scrum", "Kanban", "Jira", "ClickUp", "Trello", "Git", "GitHub", "GitLab", "Google Workspace"] },
    ],
    educationKicker: "Education", educationTitle: "Learn, apply, improve.",
    degree: "Higher Technical Degree in Systems Analysis",
    degreeMeta: "Higher Technical Institute No. 177 · 2021—2023 · Degree completed",
    courses: [
      ["Oracle Next Education (ONE)", "Programming logic, Frontend and soft skills · 2024"],
      ["Coderhouse", "JavaScript · 2023"],
      ["Udemy", "Software testing, generative AI and Jira & Scrum project management · 2026"],
    ],
    learningTitle: "Continuous learning",
    learningBody: "I continuously train to expand my professional skills. My current focus is deepening my use of artificial intelligence for analysis, automation and the creation of more efficient digital solutions.",
    languagesTitle: "Languages", languages: "Native Spanish · Intermediate English · Currently studying level 6 at Universidad Nacional del Oeste",
    cvKicker: "Resume", cvTitle: "My experience, in one complete version.",
    cvSubtitle: "A consolidated resume covering development, functional analysis, product and project management. PDF in Spanish.",
    cvs: [
      ["Complete professional resume", "Experience, education, technical skills and professional strengths.", "/cv/Camila-Caprino-CV.pdf"],
    ],
    download: "Download PDF",
    closing: "Shall we build something that makes complexity simpler?",
    closingBody: "I'm open to opportunities where I can connect product, processes and technology to create meaningful impact.",
    email: "Email me", footer: "Designed and developed with intention.",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("es");
  const [dark, setDark] = useState(false);
  const t = content[language];

  useEffect(() => {
    const savedTheme = localStorage.getItem("camila-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextDark = savedTheme ? savedTheme === "dark" : prefersDark;
    setDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("camila-theme", next ? "dark" : "light");
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground transition-colors duration-500">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3" aria-label="Camila Caprino">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-sm font-black text-background transition-transform duration-300 group-hover:rotate-6">CC</span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Camila Caprino</span>
          </a>
          <div className="hidden items-center gap-8 lg:flex">
            {t.nav.map(([label, href]) => <a key={href} href={href} className="nav-link text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLanguage(language === "es" ? "en" : "es")} className="control-button gap-2" aria-label={language === "es" ? "Switch to English" : "Cambiar a español"}>
              <Languages size={17} /><span className="text-xs font-bold">{language === "es" ? "EN" : "ES"}</span>
            </button>
            <button onClick={toggleTheme} className="control-button" aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </nav>

      <section id="inicio" className="relative min-h-screen pt-20">
        <div className="absolute inset-0 hero-grid opacity-60" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:px-12 lg:py-20">
          <div className="reveal z-10 max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-sm backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8f9b78]" />{t.availability}
            </div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-muted-foreground">{t.eyebrow}</p>
            <h1 className="max-w-5xl text-balance text-[clamp(3.4rem,8vw,8.6rem)] font-black leading-[0.94] tracking-[-0.055em]">
              Camila<br /><span className="text-outline inline-block pt-[0.04em]">Caprino.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-balance text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl lg:text-4xl">{t.intro}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#experiencia" className="primary-button">{t.cta}<ArrowDown size={18} /></a>
              <a href="mailto:camicaprino@gmail.com" className="secondary-button">{t.contact}<ArrowUpRight size={18} /></a>
            </div>
          </div>
          <div className="reveal relative mx-auto w-full max-w-[520px] lg:mr-0">
            <div className="absolute -left-6 -top-7 h-28 w-28 rounded-full bg-[#C7BCA9]/60 blur-2xl" />
            <div className="portrait-frame relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#C7BCA9] shadow-[0_30px_90px_rgba(52,44,34,.18)]">
              <img src="/camila-caprino.png" alt="Camila Caprino" className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.025]" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-7 pt-24 text-white">
                <p className="text-sm font-medium">Buenos Aires, Argentina</p>
                <div className="mt-4 flex gap-2">
                  <a className="social-button" href="https://www.linkedin.com/in/camilacaprino" target="_blank" rel="noreferrer" aria-label="LinkedIn"><UserRound size={18} /></a>
                  <a className="social-button" href="https://github.com/CamilaCaprino" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={18} /></a>
                  <a className="social-button" href="mailto:camicaprino@gmail.com" aria-label="Email"><Mail size={18} /></a>
                </div>
              </div>
            </div>
            <div className="absolute right-4 top-4 rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur sm:right-5 sm:top-5">
              <Sparkles className="mb-2 text-muted-foreground" size={20} /><p className="text-sm font-bold">{t.badge}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="perfil" className="section-shell border-y border-border bg-card">
        <div className="reveal grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
          <div>
            <SectionLabel>{t.profileKicker}</SectionLabel>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {t.profilePills.map((pill, index) => <div key={pill} className={`skill-tile ${index === 0 ? "col-span-2" : ""}`}><Check size={16} />{pill}</div>)}
            </div>
          </div>
          <div>
            <h2 className="section-title max-w-4xl">{t.profileTitle}</h2>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground">{t.profileBody}</p>
            <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
              {t.impact.map(([number, label]) => <div key={label}><p className="text-5xl font-black tracking-[-0.06em]">{number}</p><p className="mt-2 max-w-[12rem] text-sm leading-relaxed text-muted-foreground">{label}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section-shell">
        <div className="reveal mb-14 lg:flex lg:items-end lg:justify-between">
          <div><SectionLabel>{t.experienceKicker}</SectionLabel><h2 className="section-title mt-6">{t.experienceTitle}</h2></div>
          <BriefcaseBusiness className="mt-8 text-muted-foreground lg:mt-0" size={38} strokeWidth={1.4} />
        </div>
        <div className="space-y-5">
          {t.roles.map((role, index) => (
            <article key={role.company} className="reveal experience-card group">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-5">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">{role.period}</p><span className="text-sm font-bold">0{index + 1}</span>
              </div>
              <div className="grid gap-8 pt-7 lg:grid-cols-[.8fr_1.2fr]">
                <div>
                  <p className="mb-3 text-sm font-semibold text-muted-foreground">{role.company}</p>
                  <h3 className="max-w-lg text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">{role.role}</h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{role.description}</p>
                </div>
                <ul className="space-y-4">
                  {role.bullets.map((bullet) => <li key={bullet} className="flex gap-4 leading-relaxed text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground transition-transform group-hover:scale-125" />{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="habilidades" className="section-shell bg-foreground text-background">
        <div className="reveal grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><SectionLabel inverted>{t.toolkitKicker}</SectionLabel><h2 className="section-title mt-6 max-w-xl">{t.toolkitTitle}</h2></div>
          <div className="divide-y divide-background/20 border-y border-background/20">
            {t.skillGroups.map((group, index) => (
              <div key={group.title} className="group py-8 sm:grid sm:grid-cols-[3rem_1fr] sm:gap-6">
                <span className="mb-3 block text-sm font-bold text-background/45 sm:mb-0">0{index + 1}</span>
                <div><h3 className="text-2xl font-black tracking-[-0.03em]">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded-full border border-background/25 px-3 py-1.5 text-sm text-background/75 transition-colors group-hover:border-background/40 group-hover:text-background">{item}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="formacion" className="section-shell bg-card">
        <div className="reveal grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-24">
          <div><SectionLabel>{t.educationKicker}</SectionLabel><h2 className="section-title mt-6 max-w-xl">{t.educationTitle}</h2></div>
          <div>
            <div className="rounded-[2rem] border border-border bg-background p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-muted-foreground">2021 — 2023</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">{t.degree}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{t.degreeMeta}</p>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {t.courses.map(([name, detail]) => <div key={name} className="rounded-3xl border border-border bg-background p-6 transition-transform duration-300 hover:-translate-y-1"><p className="font-bold">{name}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail}</p></div>)}
            </div>
            <div className="mt-4 flex items-start gap-4 rounded-3xl border border-border bg-background p-6">
              <Sparkles className="mt-0.5 shrink-0 text-muted-foreground" size={21} />
              <div><p className="font-bold">{t.learningTitle}</p><p className="mt-2 leading-relaxed text-muted-foreground">{t.learningBody}</p></div>
            </div>
            <div className="mt-4 flex items-start gap-4 rounded-3xl border border-border bg-[#C7BCA9]/25 p-6">
              <Languages className="mt-0.5 shrink-0" size={21} /><div><p className="font-bold">{t.languagesTitle}</p><p className="mt-1 text-sm text-muted-foreground">{t.languages}</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="reveal">
          <SectionLabel>{t.cvKicker}</SectionLabel>
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-title max-w-3xl">{t.cvTitle}</h2><p className="max-w-sm text-muted-foreground">{t.cvSubtitle}</p>
          </div>
          <div className="mt-12 max-w-2xl">
            {t.cvs.map(([title, description, href], index) => (
              <a key={title} href={href} download className="download-card group">
                <div className="flex items-start justify-between"><span className="text-sm font-bold text-muted-foreground">0{index + 1}</span><Download className="transition-transform group-hover:translate-y-1" size={20} /></div>
                <div><h3 className="text-2xl font-black tracking-[-0.03em]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p></div>
                <span className="flex items-center gap-2 text-sm font-bold">{t.download}<ArrowUpRight size={16} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-4 mb-4 overflow-hidden rounded-[2.5rem] bg-[#C7BCA9] text-[#171512] sm:mx-6 sm:mb-6 lg:mx-8 lg:mb-8">
        <div className="reveal mx-auto max-w-[1440px] px-6 py-20 text-center sm:px-10 lg:py-28">
          <h2 className="mx-auto max-w-5xl text-balance text-5xl font-black leading-[.95] tracking-[-0.06em] sm:text-7xl lg:text-8xl">{t.closing}</h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#171512]/70">{t.closingBody}</p>
          <a href="mailto:camicaprino@gmail.com" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#171512] px-7 py-4 font-bold text-[#FFFCF5] transition-transform hover:-translate-y-1">{t.email}<Mail size={18} /></a>
          <div className="mx-auto mt-14 flex max-w-xl flex-wrap justify-center gap-x-7 gap-y-3 text-sm font-semibold">
            <a href="mailto:camicaprino@gmail.com" className="footer-link"><Mail size={16} />camicaprino@gmail.com</a>
            <a href="tel:+541151762247" className="footer-link"><Phone size={16} />+54 11 5176 2247</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} Camila Caprino</p><p>{t.footer}</p>
      </footer>
    </main>
  );
}

function SectionLabel({ children, inverted = false }: { children: React.ReactNode; inverted?: boolean }) {
  return <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${inverted ? "text-background/55" : "text-muted-foreground"}`}><span className={`h-px w-8 ${inverted ? "bg-background/40" : "bg-foreground/35"}`} />{children}</p>;
}
