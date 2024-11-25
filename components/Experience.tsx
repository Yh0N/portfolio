import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { BiLogoPostgresql, BiLogoVisualStudio } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { FaAngular, FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiAzuredevops, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

const Experience = () => {
  const [pause, setPause] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
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

        <section className="flex flex-col space-y-4 w-full sm:w-1/3 px-4 max-w-full ml-4 sm:ml-0">
          <h3 className="text-4xl font-bold text-[#39ceaf] mb-4 text-center">Educación</h3>
          <article className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <h3 className="font-semibold text-xl">Ingeniería de Software en la Universidad Cooperativa de Colombia (Pasto)</h3>
            <p className="text-gray-600">Durante mi formación, he aprendido a manejar diferentes lenguajes de programación, incluyendo: Java, TypeScript, JavaScript, Python.</p>
          </article>
          <article className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <h3 className="font-semibold text-xl">Bases de Datos</h3>
            <p className="text-gray-600">Tengo conocimientos en el uso y gestión de bases de datos como: MySQL, MongoDB.</p>
          </article>
          <article className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <h3 className="font-semibold text-xl">Tecnologías y Herramientas</h3>
            <p className="text-gray-600">He trabajado con varias tecnologías y herramientas modernas, como: Azure DevOps, Git y GitHub, Next.js.</p>
          </article>
        </section>

        <section className="w-8 bg-[#39ceaf] h-96 hidden sm:block"></section>

        <section className="flex flex-col space-y-4 w-full sm:w-1/3 px-4 max-w-full ml-4 sm:ml-0">
          <h3 className="text-4xl font-bold text-[#39ceaf] mb-4 text-center">Experiencia Laboral</h3>
          <article className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <p className="text-gray-600">Actualmente, no tengo experiencia laboral formal, pero estoy abierto y dispuesto a nuevas oportunidades para aplicar mis conocimientos y habilidades en proyectos de desarrollo de software. Estoy motivado para aprender, colaborar y crecer profesionalmente en el campo de la tecnología.</p>
          </article>

          <h3 className="text-4xl font-bold text-[#39ceaf] mb-4 text-center">Skills</h3>
          <article className="bg-[#222831] p-6 shadow-lg rounded-[20px] sm:p-4">
            <p className="text-gray-600 mb-4">Aquí enumero mis habilidades y conocimientos técnicos.</p>

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
                  <section key={index} className="flex items-center justify-center flex-col mx-4 text-center">
                    <div className="text-4xl text-[#39ceaf]">{skill.icon}</div>
                    <span className="text-white text-sm mt-2">{skill.label}</span>
                  </section>
                ))}
              </Marquee>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Experience;
