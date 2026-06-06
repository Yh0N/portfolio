'use client';

import { FaLaptopCode, FaPlane } from "react-icons/fa";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { IoLogoGameControllerB } from "react-icons/io";
import { IoCarSportSharp } from "react-icons/io5";

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#323C48] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] rounded-full bg-[#39CEAF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-[#39CEAF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-[#222831]/90 backdrop-blur-md p-8 md:p-14 rounded-[40px] shadow-[0_15px_50px_rgba(0,0,0,0.3)] border border-gray-700/50">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image Section */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative group flex justify-center items-center">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[#39CEAF]/20 rounded-[30px] blur-xl group-hover:bg-[#39CEAF]/30 transition-all duration-500"></div>
              
              <div className="relative w-full max-w-[450px] lg:max-w-full aspect-[4/3] rounded-[30px] overflow-hidden border-2 border-gray-700/50 group-hover:border-[#39CEAF]/50 transition-colors duration-500 shadow-2xl transform group-hover:-translate-y-2">
                <img
                  src="/AboutMe.jpeg"
                  alt="Jhon Fredy Moran"
                  className="w-full h-full object-cover object-left transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e242d] via-transparent to-transparent opacity-60"></div>
              </div>
            </div>

            {/* Text & Interests Section */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center">
              <header className="mb-8 text-center lg:text-left">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#39CEAF] to-[#14B8A6] tracking-tighter mb-4 uppercase">
                  Sobre Mí
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[#39CEAF] to-[#14B8A6] rounded-full shadow-[0_0_15px_#39CEAF] mx-auto lg:mx-0"></div>
              </header>

              <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed text-center lg:text-left">
                <p>
                  Soy estudiante de Ingeniería de Software en la Universidad Cooperativa de Colombia. Vivo en Pasto, y
                  una de mis mayores pasiones son las <strong className="text-[#39CEAF] font-medium">motos</strong>. Me encantaría tener una moto de alto cilindraje en el
                  futuro. Durante mi formación, me he dedicado a aprender sobre tecnología y desarrollo,
                  siempre buscando mejorar.
                </p>

                <p>
                  Además, me encanta jugar videojuegos. Uno de mis favoritos es <span className="text-white italic">Red Dead Redemption</span>, y siempre disfruto
                  de perderme en sus historias. Estoy muy ansioso por unirme a un equipo de desarrollo para colaborar y crear productos innovadores.
                </p>
              </div>

              {/* Redesigned Interests Mini-Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-[#39CEAF] mb-6 text-center lg:text-left">
                  Mis Intereses
                </h3>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {/* Item: Viajar */}
                  <div className="flex items-center gap-3 bg-[#1e242d] border border-gray-700/50 hover:border-[#39CEAF] hover:shadow-[0_0_15px_rgba(57,206,175,0.2)] px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <FaPlane className="text-[#39CEAF] text-2xl group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 font-medium">Viajar</span>
                  </div>

                  {/* Item: Motos */}
                  <div className="flex items-center gap-3 bg-[#1e242d] border border-gray-700/50 hover:border-[#39CEAF] hover:shadow-[0_0_15px_rgba(57,206,175,0.2)] px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <GiFullMotorcycleHelmet className="text-[#39CEAF] text-2xl group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 font-medium">Motos</span>
                  </div>

                  {/* Item: Carros */}
                  <div className="flex items-center gap-3 bg-[#1e242d] border border-gray-700/50 hover:border-[#39CEAF] hover:shadow-[0_0_15px_rgba(57,206,175,0.2)] px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <IoCarSportSharp className="text-[#39CEAF] text-2xl group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 font-medium">Carros</span>
                  </div>

                  {/* Item: Juegos */}
                  <div className="flex items-center gap-3 bg-[#1e242d] border border-gray-700/50 hover:border-[#39CEAF] hover:shadow-[0_0_15px_rgba(57,206,175,0.2)] px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <IoLogoGameControllerB className="text-[#39CEAF] text-2xl group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 font-medium">Juegos</span>
                  </div>

                  {/* Item: Tecnología */}
                  <div className="flex items-center gap-3 bg-[#1e242d] border border-gray-700/50 hover:border-[#39CEAF] hover:shadow-[0_0_15px_rgba(57,206,175,0.2)] px-5 py-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                    <FaLaptopCode className="text-[#39CEAF] text-2xl group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 font-medium">Tecnología</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
