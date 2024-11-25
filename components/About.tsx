import { FaLaptopCode, FaPlane } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoCarSportSharp } from "react-icons/io5";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#323c48]">
      <div className="container mx-auto px-6">
        <article className="bg-[#222831] p-6 md:p-14 rounded-3xl w-full max-w-9xl shadow-lg mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-center font-bold text-[#39CEAF]">SOBRE MI</h2>

          <p className="text-center mt-4 text-white text-base sm:text-lg md:text-xl">
            Soy estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Vivo en Pasto, y
            una de mis mayores pasiones son las motos. Me encantaría tener una moto de alto cilindraje en el
            futuro. Durante mi formación, me he dedicado a aprender sobre tecnología y desarrollo de software,
            siempre buscando mejorar y aprender más sobre este fascinante campo.
          </p>

          <p className="text-center mt-4 text-white text-base sm:text-lg md:text-xl">
            Además, me encanta jugar videojuegos. Uno de mis favoritos es Red Dead Redemption, y siempre disfruto
            de perderme en sus historias y paisajes. Me ayuda a desconectarme y a ser más creativo. También estoy
            muy ansioso por unirme a un equipo de desarrollo de software. Me motiva la idea de colaborar con otros
            desarrolladores y compartir conocimientos para crear productos innovadores.
          </p>

          <section className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <img
              src="/AboutMe.jpeg"
              alt="Imagen de fondo"
              className="w-full sm:w-[400px] md:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] object-cover rounded-[30px]"
            />
            <aside className="flex flex-col items-center justify-center space-y-8 mt-8 md:mt-0 md:ml-16 lg:ml-32">
              <h3 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-[#39CEAF] mb-4">INTERESES</h3>
              <section className="flex justify-center space-x-6">
                <article className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#323c48] rounded-full flex items-center justify-center group hover:bg-[#39CEAF]">
                  <FaPlane className="text-[#39CEAF] text-6xl sm:text-7xl md:text-8xl group-hover:text-[#323c48] opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <span className="text-[#39CEAF] text-lg sm:text-xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 group-hover:text-[#323c48] transition-opacity duration-300 absolute">
                    Viajar
                  </span>
                </article>

                <article className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#323c48] rounded-full flex items-center justify-center group hover:bg-[#39CEAF]">
                  <GiFullMotorcycleHelmet className="text-[#39CEAF] text-6xl sm:text-7xl md:text-8xl group-hover:text-[#323c48] opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <span className="text-[#39CEAF] text-lg sm:text-xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 group-hover:text-[#323c48] transition-opacity duration-300 absolute">
                    Motos
                  </span>
                </article>
              </section>

              <section className="flex justify-center space-x-6 mt-8">
                <article className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#323c48] rounded-full flex items-center justify-center group hover:bg-[#39CEAF]">
                  <IoCarSportSharp className="text-[#39CEAF] text-6xl sm:text-7xl md:text-8xl group-hover:text-[#323c48] opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <span className="text-[#39CEAF] text-lg sm:text-xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 group-hover:text-[#323c48] transition-opacity duration-300 absolute">
                    Carros
                  </span>
                </article>

                <article className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#323c48] rounded-full flex items-center justify-center group hover:bg-[#39CEAF]">
                  <IoLogoGameControllerB className="text-[#39CEAF] text-6xl sm:text-7xl md:text-8xl group-hover:text-[#323c48] opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <span className="text-[#39CEAF] text-lg sm:text-xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 group-hover:text-[#323c48] transition-opacity duration-300 absolute">
                    Juegos
                  </span>
                </article>

                <article className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#323c48] rounded-full flex items-center justify-center group hover:bg-[#39CEAF]">
                  <FaLaptopCode className="text-[#39CEAF] text-6xl sm:text-7xl md:text-8xl group-hover:text-[#323c48] opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  <span className="text-[#39CEAF] text-lg sm:text-xl md:text-3xl font-semibold opacity-0 group-hover:opacity-100 group-hover:text-[#323c48] transition-opacity duration-300 absolute">
                    Tecnología
                  </span>
                </article>
              </section>
            </aside>
          </section>
        </article>
      </div>
    </section>
  );
};

export default About;
