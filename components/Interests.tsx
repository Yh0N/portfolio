const Interests = () => {
  return (
    <section id="interests" className="py-20 bg-[#222831]">
      <h2 className="text-6xl text-center font-bold text-[#39CEAF] mb-10">
        MIS INTERESES
      </h2>
      <p className="text-lg text-white text-center max-w-4xl mx-auto leading-relaxed mb-6">
        Me apasionan varias cosas, entre ellas:
      </p>
      <ul className="text-lg text-white max-w-4xl mx-auto leading-relaxed list-disc list-inside space-y-4">
        <li>
          <strong>Videojuegos:</strong> Disfruto de los videojuegos como forma de entretenimiento y de aprendizaje.
        </li>
        <li>
          <strong>Motos y Autos:</strong> Me encanta el mundo de las motos y los carros, y espero tener la oportunidad de explorar más esta pasión.
        </li>
        <li>
          <strong>Viajar:</strong> Aunque no viajo mucho, siempre me interesa conocer nuevos lugares y culturas.
        </li>
        <li>
          <strong>Nuevas Tecnologías:</strong> Me gusta estar al día con las últimas tecnologías y tendencias en el mundo del desarrollo y la innovación.
        </li>
      </ul>
    </section>
  );
};

export default Interests;
  