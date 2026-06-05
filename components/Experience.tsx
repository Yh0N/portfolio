import dynamic from "next/dynamic";
import { useState } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import {
  FaAngular, FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub,
  FaGraduationCap, FaHtml5, FaJava, FaLaptopCode, FaNode,
  FaPython, FaReact, FaRocket,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAzuredevops, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const ACCENT = "#39ceaf";
const CARD_BG = "rgba(34,40,49,0.65)";
const BORDER_DEFAULT = "rgba(57,206,175,0.15)";

const GlassCard = ({
  children,
  leftBorder = false,
}: {
  children: React.ReactNode;
  leftBorder?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-xl p-5 transition-all duration-300 ${leftBorder ? "border-l-4" : "border"}`}
      style={{
        background: CARD_BG,
        backdropFilter: "blur(12px)",
        borderColor: hovered ? ACCENT : BORDER_DEFAULT,
        borderLeftColor: leftBorder ? ACCENT : undefined,
        boxShadow: hovered
          ? `0 0 20px rgba(57,206,175,0.15), 0 8px 32px rgba(0,0,0,0.3)`
          : "0 4px 24px rgba(0,0,0,0.25)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      {children}
    </article>
  );
};

const Tag = ({ label }: { label: string }) => (
  <span
    className="px-3 py-1 text-xs font-medium rounded-lg"
    style={{
      background: "rgba(57,206,175,0.1)",
      border: "1px solid rgba(57,206,175,0.2)",
      color: ACCENT,
    }}
  >
    {label}
  </span>
);


const IconItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <li
      className="flex items-center gap-2 text-sm transition-colors duration-200 cursor-default"
      style={{ color: hovered ? ACCENT : "rgb(156,163,175)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="text-lg flex-shrink-0 transition-colors duration-200"
        style={{ color: hovered ? ACCENT : "rgba(57,206,175,0.5)" }}
      >
        {icon}
      </span>
      {label}
    </li>
  );
};

const skills = [
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <RiNextjsFill />, label: "Next.js" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaNode />, label: "Node.js" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaPython />, label: "Python" },
  { icon: <DiDjango />, label: "Django" },
  { icon: <FaJava />, label: "Java" },
  { icon: <SiAzuredevops />, label: "Azure DevOps" },
  { icon: <VscAzure />, label: "Azure" },
  { icon: <FaAngular />, label: "Angular" },
  { icon: <FaBootstrap />, label: "Bootstrap" },
  { icon: <BiLogoPostgresql />, label: "PostgreSQL" },
];

const Experience = () => {
  const [pause, setPause] = useState(false);

  return (
    <section
      id="experience"
      className="relative py-14 overflow-hidden"
      style={{ backgroundColor: "#323c48" }}
    >
      <div
        className="absolute top-1/4 right-10 w-72 h-72 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(57,206,175,0.06)" }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Title */}
        <div className="mb-10 text-center md:text-left">
          <h2
            className="text-5xl md:text-6xl font-extrabold uppercase tracking-tight"
            style={{ color: ACCENT }}
          >
            EXPERIENCIA Y FORMACIÓN
          </h2>
          <div className="h-1 w-24 rounded-full mt-3 hidden md:block" style={{ background: ACCENT }} />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-8 items-start">

          {/* Left: Education */}
          <section className="space-y-4 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <FaGraduationCap className="text-2xl flex-shrink-0" style={{ color: ACCENT }} />
              <h3 className="text-2xl font-bold text-white">Educación</h3>
            </div>

            <GlassCard>
              <div className="mb-3">
                <h4 className="text-base font-semibold mb-1" style={{ color: ACCENT }}>
                  Ingeniería de Software
                </h4>
                <p className="text-xs font-medium uppercase tracking-wider mb-2" style={{ color: `${ACCENT}99` }}>
                  Universidad Cooperativa de Colombia (Pasto)
                </p>
                <span
                  className="inline-block text-xs px-3 py-1 rounded-lg text-gray-400"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  2020 – 2026
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                Sólida formación académica centrada en el ciclo de vida del software, patrones de diseño y arquitecturas modernas.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Java", "TypeScript", "JavaScript", "Python"].map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </GlassCard>

            <GlassCard>
              <h4 className="text-base font-semibold text-white mb-3">Especialidades Técnicas</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: ACCENT }}>
                    Bases de Datos
                  </p>
                  <ul className="space-y-2">
                    <IconItem icon={<SiMysql />} label="MySQL" />
                    <IconItem icon={<SiMongodb />} label="MongoDB" />
                    <IconItem icon={<BiLogoPostgresql />} label="PostgreSQL" />
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: ACCENT }}>
                    Tecnologías
                  </p>
                  <ul className="space-y-2">
                    <IconItem icon={<SiAzuredevops />} label="Azure DevOps" />
                    <IconItem icon={<FaGitAlt />} label="Git & GitHub" />
                    <IconItem icon={<RiNextjsFill />} label="Next.js" />
                    <IconItem icon={<DiDjango />} label="Django" />
                  </ul>
                </div>
              </div>
            </GlassCard>
          </section>

          {/* Vertical divider */}
          <div className="hidden lg:flex justify-center self-stretch">
            <div
              className="w-px h-full"
              style={{
                background: `linear-gradient(to bottom, transparent, ${ACCENT}, transparent)`,
                opacity: 0.35,
              }}
            />
          </div>

          {/* Right: Experience + Skills */}
          <section className="space-y-4 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <FaLaptopCode className="text-2xl flex-shrink-0" style={{ color: ACCENT }} />
              <h3 className="text-2xl font-bold text-white">Experiencia Profesional</h3>
            </div>

            <GlassCard leftBorder>
              <div className="flex items-start gap-4">
                <div className="rounded-lg p-2 flex-shrink-0" style={{ background: "rgba(57,206,175,0.1)" }}>
                  <FaRocket className="text-xl" style={{ color: ACCENT }} />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-3 mb-1 flex-wrap">
                    <h4 className="text-sm font-semibold text-white">Practicante de Desarrollo — Parquesdot</h4>
                    <span
                      className="text-xs px-2 py-0.5 rounded-lg text-gray-400 whitespace-nowrap"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      4 meses
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-2">
                    Realicé prácticas profesionales en Parquesdot, donde trabajé con <span style={{ color: ACCENT }}>TypeScript</span>, <span style={{ color: ACCENT }}>Angular</span> y <span style={{ color: ACCENT }}>NestJS</span> en el desarrollo de aplicaciones web empresariales.
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    El proyecto más destacado fue la construcción de un <strong className="text-gray-300">workflow visual</strong> con ReteJs al estilo de n8n — un editor de flujos a pequeña escala que permite conectar y configurar nodos de forma interactiva.
                  </p>
                </div>
              </div>
            </GlassCard>

            {/* Skills */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Skills</h4>
              <div
                className="rounded-xl border p-4 overflow-hidden"
                style={{
                  background: CARD_BG,
                  backdropFilter: "blur(12px)",
                  borderColor: BORDER_DEFAULT,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  onMouseEnter={() => setPause(true)}
                  onMouseLeave={() => setPause(false)}
                >
                  <Marquee gradient={false} speed={50} play={!pause}>
                    {skills.map((skill, i) => (
                      <SkillItem key={i} icon={skill.icon} label={skill.label} />
                    ))}
                  </Marquee>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center mx-5 text-center cursor-default select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="text-3xl mb-1"
        style={{
          color: hovered ? ACCENT : "rgba(57,206,175,0.45)",
          transform: hovered ? "scale(1.15) rotate(5deg)" : "scale(1) rotate(0deg)",
          transition: "color 0.2s, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        {icon}
      </div>
      <span
        className="text-xs"
        style={{ color: hovered ? ACCENT : "rgba(156,163,175,0.8)", transition: "color 0.2s" }}
      >
        {label}
      </span>
    </div>
  );
};

export default Experience;
