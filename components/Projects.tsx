// components/Projects.tsx
const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-[#323C48] px-6 sm:px-12 md:px-16">
      <h2 className="text-6xl text-center font-bold text-[#39CEAF]">Mis Proyectos</h2>
      <p className="text-center mt-4 text-white">Aquí están algunos de mis proyectos.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {/* Proyecto 1 */}
        <div
          className="bg-[#222831] p-6 rounded-[30px] shadow-lg relative group transition-all duration-300"
          style={{
            backgroundImage: 'url(/fondo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '200px',
            width: '100%',
          }}
        >
          <div className="absolute inset-0 bg-[#138e79] bg-opacity-50 group-hover:bg-opacity-80 rounded-[30px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">Proyecto 1</h3>
            <p className="text-gray-300 text-center">Descripción del proyecto 1.</p>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div
          className="bg-[#222831] p-6 rounded-[30px] shadow-lg relative group transition-all duration-300"
          style={{
            backgroundImage: 'url(/fondo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '200px',
            width: '100%',
          }}
        >
          <div className="absolute inset-0 bg-[#138e79] bg-opacity-50 group-hover:bg-opacity-80 rounded-[30px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">Proyecto 2</h3>
            <p className="text-gray-300 text-center">Descripción del proyecto 2.</p>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div
          className="bg-[#222831] p-6 rounded-[30px] shadow-lg relative group transition-all duration-300"
          style={{
            backgroundImage: 'url(/fondo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '200px',
            width: '100%',
          }}
        >
          <div className="absolute inset-0 bg-[#138e79] bg-opacity-50 group-hover:bg-opacity-80 rounded-[30px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">Proyecto 3</h3>
            <p className="text-gray-300 text-center">Descripción del proyecto 3.</p>
          </div>
        </div>

        {/* Proyecto 4 */}
        <div
          className="bg-[#222831] p-6 rounded-[30px] shadow-lg relative group transition-all duration-300"
          style={{
            backgroundImage: 'url(/fondo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '200px',
            width: '100%',
          }}
        >
          <div className="absolute inset-0 bg-[#138e79] bg-opacity-50 group-hover:bg-opacity-80 rounded-[30px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">Proyecto 4</h3>
            <p className="text-gray-300 text-center">Descripción del proyecto 4.</p>
          </div>
        </div>

        {/* Proyecto 5 */}
        <div
          className="bg-[#222831] p-6 rounded-[30px] shadow-lg relative group transition-all duration-300"
          style={{
            backgroundImage: 'url(/fondo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '200px',
            width: '100%',
          }}
        >
          <div className="absolute inset-0 bg-[#138e79] bg-opacity-50 group-hover:bg-opacity-80 rounded-[30px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">Proyecto 5</h3>
            <p className="text-gray-300 text-center">Descripción del proyecto 5.</p>
          </div>
        </div>

        {/* Proyecto 6 */}
        <div
          className="bg-[#222831] p-6 rounded-[30px] shadow-lg relative group transition-all duration-300"
          style={{
            backgroundImage: 'url(/fondo.png)',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            height: '200px',
            width: '100%',
          }}
        >
          <div className="absolute inset-0 bg-[#138e79] bg-opacity-50 group-hover:bg-opacity-80 rounded-[30px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-2 text-white">Proyecto 6</h3>
            <p className="text-gray-300 text-center">Descripción del proyecto 6.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;