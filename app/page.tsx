import React from "react";

// ─── Data ───────────────────────────────────────────────────────────────────

const profile = {
  name: "Doruk Özgen",
  role: "Full-Stack Developer & AI/ML Researcher",
  location: "Antalya, Türkiye",
  email: "dorukozgen0@gmail.com",
  photo: "/doruk.jpg",
  paperUrl: "/papers/paligemma2_research_review_doruk_ozgen.pdf",
  links: [
    { label: "Paper", href: "/papers/paligemma2_research_review_doruk_ozgen.pdf", external: true },
    { label: "GitHub", href: "https://github.com/dorukozgen", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/dorukozgen", external: true },
    { label: "Email", href: "mailto:dorukozgen0@gmail.com", external: false },
  ],
  bio: [
    "Full-Stack Developer experienced in building end-to-end software applications and developing SaaS products. Actively involved in quality assurance and test automation, with a deep focus on AI/ML research — particularly model architecture, training, and evaluation.",
    "Combines software engineering fundamentals with a product-oriented, quality-driven, and research-focused approach to building scalable software systems and intelligent solutions.",
  ],
};

const researchPapers = [
  {
    title: "PaLiGemma 2 Research Review",
    type: "Research Paper · Vision-Language Models",
    year: "2024",
    description:
      "A comprehensive review and technical analysis of Google's PaLiGemma 2 architecture, covering multi-resolution visual encoding, vision-language model alignment, zero-shot capabilities, and fine-tuning evaluation.",
    href: "/papers/paligemma2_research_review_doruk_ozgen.pdf",
    tags: ["PaLiGemma 2", "Multimodal AI", "Transformers", "VLM"],
  },
];

const projects = [
  {
    name: "Fleetify",
    tagline: "AI Agent Command Center",
    status: "Active Development",
    description:
      "A cross-platform product featuring a Rust/Tauri desktop client, web platform, and management dashboard. Built for multi-agent orchestration, interactive session streaming, telemetry monitoring, and fine-grained permission controls.",
    tags: ["Rust", "Tauri", "TypeScript", "Multi-Agent", "Desktop"],
    links: [
      { label: "Website", href: "https://fleetify.dev/" },
      { label: "GitHub", href: "https://github.com/fleetifydev" },
    ],
  },
  {
    name: "YZ50",
    tagline: "Neural Networks & Language Models from Scratch",
    status: "Freya (YC S25) AI Research",
    description:
      "Implemented neural network fundamentals from scratch: automatic differentiation, backpropagation, MLPs, character-level language models, and WaveNet. Developed and trained GPT-style Transformer models using PyTorch, exploring attention mechanisms, weight initialization, and GPU-accelerated training.",
    tags: ["PyTorch", "Transformers", "Deep Learning", "LLMs", "From Scratch"],
    links: [
      { label: "Program", href: "https://yz50.ai/" },
      { label: "GitHub", href: "https://github.com/dorukozgen/yz50" },
    ],
  },
];

const experience = [
  {
    company: "DoKa Şans Oyunları ve Bilişim Hizmetleri A.Ş.",
    role: "Junior Software Test Engineer",
    period: "Jul 2025 – Sep 2025",
    location: "Istanbul, Turkey",
    bullets: [
      "Developed functional test scenarios for İddaa betting kiosks and terminal infrastructure using Jira (AIO Tests), executing regression suites and defect reporting.",
      "Authored unit test plans and technical architecture documentation; established code review workflows and Git branch protection rules.",
    ],
  },
  {
    company: "Jurnalle",
    role: "QA Automation Engineer",
    period: "Feb 2023 – Jul 2023",
    location: "Istanbul, Turkey",
    bullets: [
      "Executed UAT, functional, regression, smoke, API, and UI automation using Selenium, Appium, Rest-Assured, TestNG, JUnit, and Cucumber.",
      "Managed CI/CD test automation pipelines and reporting via Jenkins and Jira, accelerating regression turnaround time and stabilizing production releases.",
    ],
  },
];

const skills = [
  {
    category: "Languages & Core",
    items: ["TypeScript", "JavaScript", "Python", "Rust", "Java", "SQL", "HTML/CSS"],
  },
  {
    category: "Full-Stack & Web",
    items: ["Bun", "Hono", "React", "Next.js", "Tauri", "Drizzle ORM", "Zod", "REST APIs", "OpenAPI", "Tailwind CSS"],
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch", "Transformers", "Deep Learning", "Neural Networks", "Model Training & Eval", "LangChain", "MCP", "AI Agents"],
  },
  {
    category: "QA & Test Automation",
    items: ["Playwright", "Cypress", "Selenium", "Appium", "JUnit", "TestNG", "Rest Assured", "Cucumber", "Postman"],
  },
  {
    category: "Databases & DevOps",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "Jenkins", "CI/CD", "Git / GitHub", "Cloudflare Workers", "Vercel"],
  },
];

const education = [
  {
    title: "VIZJA University",
    subtitle: "B.S. in Computer Science",
    period: "Oct 2026 – Aug 2029",
    location: "Warsaw, Poland",
  },
  {
    title: "Wroclaw University of Science and Technology",
    subtitle: "Preparatory English Language Course",
    period: "Completed",
    location: "Wroclaw, Poland",
  },
];

const certifications = [
  {
    title: "Freya (YC S25) Research Fellow",
    year: "2026",
    issuer: "Freya AI Research Program",
    detail: "AI Research & Deep Learning",
  },
  {
    title: "ISTQB Foundation Level (CTFL)",
    year: "2024",
    issuer: "ISTQB",
    detail: "Manual & Automated Software Testing",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ExternalArrow() {
  return (
    <span className="inline-block text-[#ea580c] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      ↗
    </span>
  );
}

function SectionHeader({ title, count }: { title: string; count?: string | number }) {
  return (
    <div className="flex items-center justify-between border-b border-[#e7e5e4] bg-[#f5f5f4] px-5 py-2.5">
      <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#78716c]">
        {title}
      </span>
      {count && (
        <span className="font-mono text-[11px] font-medium text-[#a8a29e]">
          [{count}]
        </span>
      )}
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#e7e5e4] bg-[#fafaf9] px-2.5 py-1 font-mono text-[11px] font-medium text-[#57534e] transition-colors hover:border-[#d6d3d1] hover:text-[#1c1917]">
      {label}
    </span>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] selection:bg-[#1c1917] selection:text-[#fafaf9]">

      {/* ━━ Topbar / Navigation ━━ */}
      <header className="sticky top-0 z-40 border-b border-[#e7e5e4] bg-[#fafaf9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 h-14">
          <a
            href="/"
            className="font-mono text-xs font-medium uppercase tracking-wider text-[#1c1917] hover:text-[#ea580c] transition-colors"
          >
            doruk özgen
          </a>

          <nav className="flex items-center gap-1 sm:gap-2">
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-1 rounded-md px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wider text-[#78716c] transition-all hover:bg-[#f5f5f4] hover:text-[#ea580c]"
              >
                <span>{link.label}</span>
                <span className="text-[11px] text-[#a8a29e] transition-transform group-hover:text-[#ea580c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ━━ Content Shell ━━ */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="border border-[#e7e5e4] bg-[#ffffff] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">

          {/* ━━ Hero Section: Profile Card + Intro ━━ */}
          <section className="grid grid-cols-1 md:grid-cols-[260px_1fr] border-b border-[#e7e5e4]">
            
            {/* Left Col: Photo & Metadata */}
            <div className="border-b md:border-b-0 md:border-r border-[#e7e5e4] bg-[#fafaf9] p-6 sm:p-7 flex flex-col justify-between gap-6">
              <div>
                <div className="relative aspect-square w-36 sm:w-44 overflow-hidden rounded-xl border border-[#e7e5e4] bg-[#f5f5f4] shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="mt-5 space-y-1">
                  <h2 className="text-base font-semibold tracking-tight text-[#1c1917]">
                    {profile.name}
                  </h2>
                  <p className="text-xs text-[#78716c] leading-relaxed">
                    {profile.role}
                  </p>
                </div>
              </div>

              <div className="border-t border-[#e7e5e4] pt-4 font-mono text-[11px] text-[#78716c]">
                <div className="flex items-center gap-2 text-[#78716c]">
                  <span>📍</span>
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Right Col: Editorial Headline & Bio */}
            <div className="p-6 sm:p-9 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#a8a29e]">
                  Portfolio & Research
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-normal leading-[1.05] tracking-tight text-[#1c1917]">
                  Hi, I&apos;m Doruk Özgen.
                </h1>
                <p className="font-serif italic text-lg sm:text-xl text-[#78716c]">
                  Full-stack developer building robust systems, exploring AI models, and crafting software with care.
                </p>

                <div className="space-y-3 pt-2 text-[14px] leading-relaxed text-[#57534e]">
                  {profile.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[#f5f5f4]">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-1.5 rounded-md border border-[#1c1917] bg-[#1c1917] px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-[#fafaf9] transition-all hover:bg-[#ea580c] hover:border-[#ea580c]"
                >
                  <span>Get in Touch</span>
                  <ExternalArrow />
                </a>

                <a
                  href={profile.paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-md border border-[#e7e5e4] bg-[#ffffff] px-4 py-2 font-mono text-xs font-medium uppercase tracking-wider text-[#1c1917] transition-all hover:border-[#d6d3d1] hover:text-[#ea580c]"
                >
                  <span>Read PaLiGemma 2 Paper</span>
                  <ExternalArrow />
                </a>
              </div>
            </div>
          </section>

          {/* ━━ Section: Publications / Research ━━ */}
          <section className="border-b border-[#e7e5e4]">
            <SectionHeader title="Selected Publications & Research" count="01" />

            <div className="p-6 sm:p-8">
              {researchPapers.map((paper) => (
                <article
                  key={paper.title}
                  className="group relative rounded-lg border border-[#e7e5e4] bg-[#fafaf9] p-5 sm:p-6 transition-all hover:border-[#d6d3d1] hover:bg-[#ffffff]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#ea580c]">●</span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917]">
                        {paper.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#a8a29e]">
                      {paper.year}
                    </span>
                  </div>

                  <p className="mt-1 font-mono text-xs text-[#78716c]">
                    {paper.type}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[#57534e]">
                    {paper.description}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#e7e5e4] pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {paper.tags.map((tag) => (
                        <Pill key={tag} label={tag} />
                      ))}
                    </div>

                    <a
                      href={paper.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 rounded border border-[#1c1917] bg-[#1c1917] px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-[#ea580c] hover:border-[#ea580c]"
                    >
                      <span>View PDF</span>
                      <span className="text-[11px] transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
                        ↗
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ━━ Section: Featured Projects ━━ */}
          <section className="border-b border-[#e7e5e4]">
            <SectionHeader title="Projects & Ventures" count="02" />

            <div className="divide-y divide-[#e7e5e4]">
              {projects.map((project) => (
                <article key={project.name} className="p-6 sm:p-8 transition-colors hover:bg-[#fafaf9]/60">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-serif text-2xl sm:text-3xl text-[#1c1917]">
                          {project.name}
                        </h3>
                        <span className="font-mono text-xs text-[#a8a29e]">—</span>
                        <span className="font-mono text-xs text-[#78716c]">
                          {project.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1 rounded border border-[#e7e5e4] bg-[#ffffff] px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-[#1c1917] transition-all hover:border-[#d6d3d1] hover:text-[#ea580c]"
                        >
                          <span>{link.label}</span>
                          <ExternalArrow />
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#57534e] max-w-3xl">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded bg-[#f5f5f4] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#78716c]">
                      {project.status}
                    </span>
                    {project.tags.map((tag) => (
                      <Pill key={tag} label={tag} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ━━ Section: Experience ━━ */}
          <section className="border-b border-[#e7e5e4]">
            <SectionHeader title="Work Experience" count="02" />

            <div className="divide-y divide-[#e7e5e4]">
              {experience.map((job) => (
                <div key={job.company} className="p-6 sm:p-8 transition-colors hover:bg-[#fafaf9]/60">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <h4 className="text-base font-semibold text-[#1c1917]">
                        {job.role}
                      </h4>
                      <p className="text-xs font-mono text-[#78716c] mt-0.5">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-[#a8a29e] shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex gap-2.5 text-sm text-[#57534e] leading-relaxed">
                        <span className="text-[#ea580c] select-none text-xs mt-0.5">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ━━ Section: Skills ━━ */}
          <section className="border-b border-[#e7e5e4]">
            <SectionHeader title="Technical Arsenal" />

            <div className="p-6 sm:p-8 space-y-5">
              {skills.map((group) => (
                <div key={group.category} className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-2 sm:gap-4 items-baseline">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-[#78716c]">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <Pill key={item} label={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ━━ Section: Education & Certifications ━━ */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e7e5e4]">
              
              {/* Education */}
              <div>
                <SectionHeader title="Education" />
                <div className="p-6 space-y-5">
                  {education.map((item) => (
                    <div key={item.title} className="space-y-0.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#1c1917]">{item.title}</h4>
                        <span className="font-mono text-[11px] text-[#a8a29e]">{item.period}</span>
                      </div>
                      <p className="text-xs text-[#57534e]">{item.subtitle}</p>
                      <p className="font-mono text-[11px] text-[#a8a29e]">{item.location}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <SectionHeader title="Certifications & Honors" />
                <div className="p-6 space-y-5">
                  {certifications.map((cert) => (
                    <div key={cert.title} className="space-y-0.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#1c1917]">{cert.title}</h4>
                        <span className="font-mono text-[11px] text-[#ea580c]">{cert.year}</span>
                      </div>
                      <p className="text-xs text-[#57534e]">{cert.issuer}</p>
                      <p className="font-mono text-[11px] text-[#a8a29e]">{cert.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ━━ Decorative / Structural Footer Rail (Sergey Bunas style) ━━ */}
          <footer className="border-t border-[#e7e5e4] bg-[#fafaf9] px-6 py-6 sm:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-[#78716c]">
              <div className="flex items-center gap-2">
                <span className="font-serif italic text-sm text-[#1c1917]">Doruk Özgen</span>
                <span>© {new Date().getFullYear()}</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="#top" className="hover:text-[#ea580c] transition-colors">
                  Back to top ↑
                </a>
              </div>
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
}
