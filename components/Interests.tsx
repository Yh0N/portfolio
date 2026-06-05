import React from 'react';

const Interests = () => {
  return (
    <section id="interests" className="py-20 bg-[#222831] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#39CEAF]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 -right-20 w-[400px] h-[400px] rounded-full bg-[#39CEAF]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#39CEAF] tracking-tighter mb-4 uppercase">
            MIS INTERESES
          </h2>
          <div className="h-1 w-24 bg-[#39CEAF] mx-auto rounded-full shadow-[0_0_10px_#39CEAF]"></div>
        </div>

        {/* Interests Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[320px]">
          {/* Card 1: Videojuegos (Large) */}
          <div className="md:col-span-8 group bg-[#1a202c]/60 backdrop-blur-md border border-white/5 transition-all duration-300 hover:border-[#39CEAF] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(57,206,175,0.2)] rounded-xl overflow-hidden relative cursor-pointer">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB60Y3P7x42PTffZHcNuRGSvaKK-qZ07b9qiEsTR_9Dddo8KYmrpaNt4npRaawkOxecO2C8LNn4PJOWquv3qSoaUKzRbTHcbemgFjXWYdMKgdWOZV1c-JjXrBbOfAi9KmK3aPxeNFXqu8gl_ZZ19rOyxmdOvh-4tJKc1vfvhzfl9C58_sdUNoZh_NZ43DpJFu5Qq5wN6M1ay7Qzjh7_6S2NrfkjKmxV8JIfLLh8zKQtiai0_i-av4Womrj0_7l8o1MwyvkLdlXnz9W3" 
                alt="Videojuegos" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222831] via-[#222831]/40 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-[#39CEAF]">Videojuegos</h3>
              </div>
              <p className="text-lg text-gray-300 max-w-xl">
                Disfruto de los videojuegos como forma de entretenimiento y de aprendizaje constante sobre mecánicas y UX.
              </p>
            </div>
          </div>

          {/* Card 2: Motos y Autos */}
          <div className="md:col-span-4 group bg-[#1a202c]/60 backdrop-blur-md border border-white/5 transition-all duration-300 hover:border-[#39CEAF] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(57,206,175,0.2)] rounded-xl overflow-hidden relative cursor-pointer">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQgMGa1Kp_nHd1Vn-jNdkjAezeSB5r7-IfqZKRJGCQfAbFaW2PTRlBVM6Dg4Lt7dPkj_7rbwGHv0qEpGOrq1u9e-CqCakS702BLY3Ly41-8OKlQuRggtqCxcxCnzutBBGPHj2PAW4TqgIMgSi9QZGWfISyLO30z3Urxj1c0eJdrkUBWjEPukq6natv5P1enyfJUxZaI3qKr6cg2dyww2fKEPDEiuP_debbyMV5bfyZ3r6Fm4TuGHF_UZpagCgq4LtR6FMlLRCE7f2W" 
                alt="Motos y Autos" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222831] via-[#222831]/60 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full p-6 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-[#39CEAF]">Motos y Autos</h3>
              </div>
              <p className="text-base text-gray-300">
                Me apasiona el mundo del motor, la ingeniería y el diseño industrial detrás de cada vehículo.
              </p>
            </div>
          </div>

          {/* Card 3: Viajar */}
          <div className="md:col-span-5 group bg-[#1a202c]/60 backdrop-blur-md border border-white/5 transition-all duration-300 hover:border-[#39CEAF] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(57,206,175,0.2)] rounded-xl overflow-hidden relative cursor-pointer">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjGBmlWlycow9ZDZuDYJFuBxoWDHYFz8_sfeP45eU_v62KFALOEbhj02osuqcir2xsRpV28pzLealouiZRC3wxOLrMoG_8QLx26cWomLbguq2xw1GtgJdTnJCMb44m__wjgJnraJR6J1JdMzPJNukscW6N7NGfrEGKM3sQuAGMsTEIWLFz3JOWwmZ1DzJYxkspVi1f4VyoEHO3hWIKImj96Uz84CnusNJrm7f2z32a8YeZFx3sJHhRyIGQhQR-YyVAfV8kx7j0fgjm" 
                alt="Viajar" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222831] via-[#222831]/60 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full p-6 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-[#39CEAF]">Viajar</h3>
              </div>
              <p className="text-base text-gray-300">
                Explorar nuevas culturas y paisajes me ayuda a mantener una perspectiva fresca y creativa.
              </p>
            </div>
          </div>

          {/* Card 4: Nuevas Tecnologías (Wide) */}
          <div className="md:col-span-7 group bg-[#1a202c]/60 backdrop-blur-md border border-white/5 transition-all duration-300 hover:border-[#39CEAF] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(57,206,175,0.2)] rounded-xl overflow-hidden relative cursor-pointer">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwaaKGeU21FE4U-xbBOsXfao1ggz6S0-AaVsyW49lK2nUfSzHxDlX6Y0ZY_Pqp0eFGvwW2v9Wzl-Eu4GAcMUZ6hGVP_UR_FXbe7ZwH3oCALdmli-lFdlK93WbFsOxa65GwVph4-AzluhwyN3BCmcafs-2RbYuZSrxiFfZstAF1uNTZ66_YCt1TbvPzx4su4LSJzjboKN5Thg3vQlfPITJPXqI7h8wcg33vopUB-9d3ntV4q5jbygbtX8FzA99hqcXceGPtGV07I1so" 
                alt="Nuevas Tecnologías" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222831] via-[#222831]/40 to-transparent"></div>
            </div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-[#39CEAF]">Nuevas Tecnologías</h3>
              </div>
              <p className="text-lg text-gray-300 max-w-lg">
                Constantemente aprendiendo sobre IA, desarrollo y las innovaciones que moldean nuestro futuro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
  