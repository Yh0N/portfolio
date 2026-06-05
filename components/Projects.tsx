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
    title: "Proyecto 2",
    description: "Descripción del proyecto 2. Aquí puedes añadir más detalles sobre la tecnología utilizada y el propósito. Expandir el texto te permite leer sin que se corte nada.",
    image: "/fondo.png",
    link: "#",
    tags: ["Node.js", "Express"]
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3. Aquí puedes añadir más detalles sobre la tecnología utilizada y el propósito. Puedes escribir todo lo que desees.",
    image: "/fondo.png",
    link: "#",
    tags: ["React", "Firebase"]
  },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Descripción del proyecto 4. Aquí puedes añadir más detalles sobre la tecnología utilizada y el propósito.",
    image: "/fondo.png",
    link: "#",
    tags: ["Python", "Django"]
  },
  {
    id: 5,
    title: "Proyecto 5",
    description: "Descripción del proyecto 5. Aquí puedes añadir más detalles sobre la tecnología utilizada y el propósito.",
    image: "/fondo.png",
    link: "#",
    tags: ["UI/UX", "Figma"]
  },
  {
    id: 6,
    title: "Proyecto 6",
    description: "Descripción del proyecto 6. Aquí puedes añadir más detalles sobre la tecnología utilizada y el propósito.",
    image: "/fondo.png",
    link: "#",
    tags: ["Java", "Spring"]
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
    <section id="projects" className="py-20 bg-[#323C48] px-6 sm:px-12 md:px-16 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#39CEAF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#39CEAF]/5 blur-[120px] pointer-events-none" />

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
                className={`group relative bg-[#1e242d] rounded-3xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-[#39CEAF]/50 cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-end 
                  h-[140px] md:h-[320px] 
                  ${isExpanded ? 'max-md:h-auto max-md:min-h-[350px] max-md:shadow-[0_10px_30px_rgba(57,206,175,0.15)]' : ''}`
                }
              >
                {/* Background Image */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-110 ${isExpanded ? 'max-md:scale-110' : ''}`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                
                {/* Dark Gradient Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 
                  max-md:bg-gradient-to-t max-md:from-[#1e242d] max-md:via-[#1e242d]/60 max-md:to-transparent max-md:opacity-90 
                  md:bg-[#1e242d]/90 md:backdrop-blur-sm md:opacity-0 md:group-hover:opacity-100
                  ${isExpanded ? 'max-md:!bg-[#1e242d]/90 max-md:!bg-none max-md:backdrop-blur-sm max-md:opacity-100' : ''}`} 
                />

                {/* Content Container */}
                <div className="relative z-10 p-6 w-full flex flex-col h-full justify-end">
                  <div className="flex justify-between items-center w-full">
                    <h3 className={`font-bold text-[#39CEAF] drop-shadow-lg transition-all duration-300 md:text-3xl md:-translate-y-4 md:group-hover:translate-y-0 
                      ${isExpanded ? 'max-md:text-3xl max-md:mb-2' : 'max-md:text-2xl'}`}>
                      {project.title}
                    </h3>
                    {/* Expand Icon - Mobile Only */}
                    <div className={`md:hidden bg-[#222831]/80 backdrop-blur-md p-2 rounded-full transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                      <FaChevronDown className="text-[#39CEAF] text-sm" />
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden flex flex-col 
                      md:max-h-[500px] md:opacity-0 md:group-hover:opacity-100 md:mt-4 md:translate-y-4 md:group-hover:translate-y-0
                      ${isExpanded ? 'max-md:max-h-[500px] max-md:opacity-100 max-md:mt-4' : 'max-md:max-h-0 max-md:opacity-0 max-md:mt-0'}
                    `}
                  >
                    <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 mb-6 flex-wrap">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-mono bg-[#39CEAF]/10 text-[#39CEAF] px-3 py-1 rounded-full border border-[#39CEAF]/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions Button */}
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#39CEAF] to-[#2BA88D] text-[#002113] font-bold px-6 py-3 rounded-full shadow-[0_4px_15px_rgba(57,206,175,0.3)] hover:shadow-[0_6px_25px_rgba(57,206,175,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 w-full sm:w-auto self-start mt-auto"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <FaGithub className="text-xl" />
                      Ver Repositorio
                    </a>
                  </div>
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
