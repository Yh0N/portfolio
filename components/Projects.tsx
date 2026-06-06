'use client';

import React, { useState } from 'react';
import { FaGithub, FaChevronDown } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "Este es mi portfolio personal donde doy a conocer algunos de mis proyectos y un poco sobre mí. Desarrollado con Next.js y Tailwind CSS para ofrecer una experiencia rápida, responsiva y con un diseño moderno (Glassmorphism).",
    image: "/fondo.png",
    link: "https://github.com/Yh0N/portfolio",
    tags: ["React", "Tailwind"]
  },
  {
    id: 2,
    title: "Exploro API",
    description: "API REST en Python con FastAPI para apoyar PYMES locales. Arquitectura por capas (routers, servicios, repositorios) para un código limpio y escalable. Explora lugares, negocios y puntos de interés por categorías.",
    image: "/exploro%20api.jpg",
    link: "https://github.com/Yh0N/Exploro-API",
    tags: ["Python", "FastAPI", "Arquitectura por Capas", "PYMES"]
  },
  {
    id: 3,
    title: "Airbnb Clone · Exploro",
    description: "Clone de Airbnb desarrollado con React y TypeScript que consume la Exploro API. Permite explorar lugares turísticos, negocios locales y PYMES organizados por categorías.",
    image: "/exploro%20airbnb.jpg",
    link: "https://github.com/Yh0N/airbnb-clone-exploro",
    tags: ["React", "TypeScript", "Exploro API", "Clone"]
  },
  {
    id: 4,
    title: "VersusMatch",
    description: "App móvil para comparar equipos de fútbol, retar a otros equipos y pactar lugares de encuentro para los partidos. Diseñada para que los equipos puedan organizarse fácilmente desde el celular.",
    image: "/vesus%20match.jpg",
    link: "https://github.com/Yh0N/VersusMatch",
    tags: ["Flutter", "Dart", "Mobile"]
  },
  {
    id: 5,
    title: "AgroClima",
    description: "App móvil para ayudar a campesinos con la predicción del clima y alertas de heladas. Incluye un bot de Telegram en Python que notifica en tiempo real sobre condiciones climáticas peligrosas para los cultivos.",
    image: "/agroclima.jpg",
    link: "https://github.com/Yh0N/agro-clima",
    tags: ["Flutter", "Dart", "Python", "Telegram Bot"]
  },
  {
    id: 6,
    title: "En desarrollo...",
    description: "Estamos trabajando en ello. Próximamente más detalles sobre este nuevo proyecto.",
    image: "/fondo.png",
    link: "https://github.com/Yh0N",
    tags: ["Coming Soon"]
  }
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    // Solo manejamos el estado para móviles. 
    // En escritorio, usamos hover de CSS.
    if (window.innerWidth < 768) {
      setExpandedId(expandedId === id ? null : id);
    }
  };

  return (
    <section id="projects" className="py-20 bg-[#323C48] px-6 sm:px-12 md:px-16 relative">
      {/* Background Glows — overflow hidden solo aquí para no cortar los cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#39CEAF]/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#39CEAF]/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#39CEAF] tracking-tighter mb-4 uppercase">
            Mis Proyectos
          </h2>
          <div className="h-1 w-24 bg-[#39CEAF] rounded-full shadow-[0_0_10px_#39CEAF] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explora algunos de mis trabajos. Toca un proyecto para expandirlo y ver todos los detalles.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                onClick={() => toggleExpand(project.id)}
                className={`group relative bg-[#1e242d] rounded-3xl shadow-lg border border-gray-700/50 hover:border-[#39CEAF]/50 cursor-pointer transition-all duration-500 ease-in-out
                  md:h-[380px] md:overflow-hidden
                  ${isExpanded ? 'h-auto border-[#39CEAF]/30 shadow-[0_10px_30px_rgba(57,206,175,0.15)]' : 'h-[140px] overflow-hidden'}`
                }
              >
                {/* Background image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-110 ${isExpanded ? 'scale-110' : ''}`}
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                </div>

                {/* ── DESKTOP layout (absolute, hover-driven) ── */}
                {/* Gradient siempre visible para leer el título */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-[#1e242d] via-[#1e242d]/40 to-transparent" />

                {/* Título fijo en la parte inferior */}
                <div className="hidden md:block absolute bottom-6 left-6 right-6 z-10">
                  <h3 className="font-bold text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:opacity-0 transition-opacity duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Overlay completo al hacer hover */}
                <div className="hidden md:flex absolute inset-0 bg-[#1e242d]/92 backdrop-blur-sm flex-col justify-end p-6 z-20 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="font-bold text-2xl text-[#39CEAF] mb-4">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono bg-[#39CEAF]/10 text-[#39CEAF] px-3 py-1 rounded-full border border-[#39CEAF]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#39CEAF] to-[#2BA88D] text-[#002113] font-bold px-6 py-3 rounded-full shadow-[0_4px_15px_rgba(57,206,175,0.3)] hover:shadow-[0_6px_25px_rgba(57,206,175,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2 w-fit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-xl" />
                    Ver Repositorio
                  </a>
                </div>

                {/* ── MOBILE layout (click-driven) ── */}
                <div className={`md:hidden relative z-10 p-5 flex flex-col h-full ${isExpanded ? '' : 'justify-end'}`}>
                  {/* Gradiente solo en colapsado */}
                  {!isExpanded && (
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e242d] via-[#1e242d]/50 to-transparent pointer-events-none" />
                  )}
                  {isExpanded && (
                    <div className="absolute inset-0 bg-[#1e242d]/88 backdrop-blur-sm pointer-events-none" />
                  )}

                  <div className="relative flex justify-between items-center w-full">
                    <h3 className={`font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${isExpanded ? 'text-2xl text-[#39CEAF] mb-3' : 'text-xl'}`}>
                      {project.title}
                    </h3>
                    <div className={`bg-[#222831]/80 backdrop-blur-md p-2 rounded-full transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                      <FaChevronDown className="text-[#39CEAF] text-sm" />
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="relative mt-3 flex flex-col">
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="text-xs font-mono bg-[#39CEAF]/10 text-[#39CEAF] px-3 py-1 rounded-full border border-[#39CEAF]/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-[#39CEAF] to-[#2BA88D] text-[#002113] font-bold px-6 py-3 rounded-full shadow-[0_4px_15px_rgba(57,206,175,0.3)] hover:shadow-[0_6px_25px_rgba(57,206,175,0.5)] transition-all flex items-center gap-2 w-fit"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-xl" />
                        Ver Repositorio
                      </a>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
