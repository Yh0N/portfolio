'use client';

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "Este es mi portfolio personal donde doy a conocer algunos de mis proyectos y un poco sobre mí. Desarrollado con Next.js y Tailwind CSS.",
    image: "/fondo.png",
    link: "https://github.com/Yh0N/portfolio",
    tags: ["React", "Tailwind"]
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2. Aquí puedes añadir más detalles sobre la tecnología utilizada y el propósito.",
    image: "/fondo.png",
    link: "#",
    tags: ["Node.js", "Express"]
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3. Aquí puedes añadir más detalles sobre la tecnología utilizada y el propósito.",
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
            Explora algunos de los trabajos y proyectos en los que he puesto mi dedicación, utilizando diferentes tecnologías.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="group relative bg-[#222831] rounded-3xl overflow-hidden shadow-lg border border-gray-700/50 hover:border-[#39CEAF]/50 hover:shadow-[0_10px_30px_rgba(57,206,175,0.15)] transition-all duration-500 h-[280px] sm:h-[320px]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              
              {/* Permanent Dark Gradient Overlay so text is always somewhat readable if needed, but we'll cover it */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e242d] via-transparent to-transparent opacity-80" />

              {/* Hover / Touch Overlay */}
              <div className="absolute inset-0 bg-[#1e242d]/90 backdrop-blur-sm flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0 focus-within:translate-y-0">
                
                <h3 className="text-2xl font-bold text-[#39CEAF] mb-3 text-center transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-center text-sm md:text-base mb-6 line-clamp-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 mb-6 flex-wrap justify-center">
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
                  className="bg-[#39CEAF] text-[#002113] font-bold px-6 py-2 rounded-full shadow-[0_4px_15px_rgba(57,206,175,0.3)] hover:shadow-[0_6px_25px_rgba(57,206,175,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2"
                  onClick={(e) => {
                    // Prevenir la propagación para evitar comportamientos extraños en móviles
                    e.stopPropagation();
                  }}
                >
                  <FaGithub className="text-xl" />
                  Ver Repositorio
                </a>
              </div>
              
              {/* Visual Indicator for touch devices (only visible when not hovered) */}
              <div className="absolute top-4 right-4 bg-[#222831]/80 backdrop-blur-md p-2 rounded-full opacity-100 group-hover:opacity-0 transition-opacity md:hidden">
                <FaExternalLinkAlt className="text-[#39CEAF] text-sm" />
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
