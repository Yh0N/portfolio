import dynamic from "next/dynamic"; // Importamos dynamic para cargar Marquee solo en el cliente
import { useEffect, useState } from "react";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { FaAngular, FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAzuredevops, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

// Cargar Marquee solo en el cliente
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const Experience = () => {
  const [pause, setPause] = useState(false);
  const [isClient, setIsClient] = useState(false); // Estado para asegurarnos que se renderiza solo en el cliente

  useEffect(() => {
    setIsClient(true); // Establecemos que es cliente cuando el componente se monta
  }, []);

  if (!isClient) {
    return null; // Evitamos que se renderice en el servidor
  }

  const skills = [
    { icon: <FaPython />, label: "Python" },
    { icon: <DiDjango />, label: "Django" },
    { icon: <SiAzuredevops />, label: "Azure DevOps" },
    { icon: <VscAzure />, label: "Azure" },
    { icon: <FaJava />, label: "Java" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <RiNextjsFill />, label: "Next.js" },
    { icon: <FaReact />, label: "React" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3Alt />, label: "CSS" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <FaGitAlt />, label: "Git" },
    { icon: <FaGithub />, label: "GitHub" },
    { icon: <FaAngular />, label: "Angular" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <FaNode />, label: "Node.js" },
    { icon: <BiLogoPostgresql />, label: "PostgreSQL" },
    { icon: <BiLogoVisualStudio />, label: "Visual Studio" },
  ];

  return (
    <section id="experience" className="py-20 bg-[#323c48]">
      <h2 className="text-6xl text-center font-bold text-[#39ceaf]">EXPERIENCIA LABORAL</h2>

      <div className="flex justify-center mt-10 space-x-10 flex-wrap">
        {/* Contenedor de Educación con margen izquierdo */}
        <div className="flex flex-col space-y-4 w-full sm:w-1/3 px-4 max-w-full ml-4 sm:ml-0">
          <h3 className="text-4xl font-bold text-[#39ceaf] mb-4 text-center">Educación</h3>
          <div className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <h3 className="font-semibold text-xl">Experiencia 1</h3>
            <p className="text-gray-600">Descripción de la experiencia laboral 1</p>
          </div>
          <div className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <h3 className="font-semibold text-xl">Experiencia 2</h3>
            <p className="text-gray-600">Descripción de la experiencia laboral 2</p>
          </div>
          <div className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <h3 className="font-semibold text-xl">Experiencia 3</h3>
            <p className="text-gray-600">Descripción de la experiencia laboral 3</p>
          </div>
        </div>

        {/* Barra central solo visible en pantallas más grandes */}
        <div className="w-8 bg-[#39ceaf] h-96 hidden sm:block"></div>

        {/* Contenedor de Experiencia Laboral con margen izquierdo */}
        <div className="flex flex-col space-y-4 w-full sm:w-1/3 px-4 max-w-full ml-4 sm:ml-0">
          <h3 className="text-4xl font-bold text-[#39ceaf] mb-4 text-center">Experiencia Laboral</h3>
          <div className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <p className="text-gray-600">Detalles sobre mi experiencia laboral aquí.</p>
          </div>

          {/* Contenedor de Skills con margen izquierdo */}
          <h3 className="text-4xl font-bold text-[#39ceaf] mb-4 text-center">Skills</h3>
          <div className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <p className="text-gray-600 mb-4">Aquí enumero mis habilidades y conocimientos técnicos.</p>

            {/* Marquee con interacción manual */}
            <div
              onMouseEnter={() => setPause(true)}
              onMouseLeave={() => setPause(false)}
            >
              <Marquee
                className="mb-4"
                gradient={false}
                speed={50}
                pauseOnHover={false}
                play={!pause}
              >
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-center flex-col mx-4 text-center">
                    <div className="text-4xl text-[#39ceaf]">{skill.icon}</div>
                    <span className="text-white text-sm mt-2">{skill.label}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
