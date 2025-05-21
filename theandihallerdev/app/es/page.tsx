import Socials from "../ui/socials";

export default function Home() {
  return (
    <main className="sm:px-0 px-4">
      <div className="mb-10">
        <h1 className=" text-xl font-bold pb-4">
          {"¡Hola! Soy Andi"}
        </h1>
        <div>
          <p className="mb-5">
            Soy un <strong>programador, maker y diseñador</strong> con más de
            seis años de experiencia construyendo proyectos, tanto para mí mismo
            como freelancer. Disfruto aprender y experimentar en diversos
            campos, siendo un &quot;aprendiz de mucho, maestro de nada.&quot;
          </p>
          <p>
            En este momento, estoy en un camino para convertir la programación
            en mi carrera a tiempo completo, buscando forjar mi lugar en el
            mundo de la tecnología.
          </p>
        </div>
      </div>
      {<Socials />}
      <div className="pb-10">
        <h1 className="text-xl font-bold pb-4">
          {"Projecto actual "}
          <a
            className="font-bold text-underline"
            href="https://trackeen.cl/"
            target="_blank"
            rel="noopener"
          >
            Trackeen
          </a>
        </h1>
        <p className="mb-4">
          <span>
            Trackeen es un dispositivo diseñado para ayudarte a monitorear tus
            hábitos y seguir tu crecimiento personal a través de datos
            informativos.
          </span>
          <br />
        </p>
        <a
          className="font-bold text-underline"
          href="https://trackeen.cl/"
          target="_blank"
          rel="noopener"
        >
          {"Visitar Trackeen"}
        </a>
      </div>
    </main>
  );
}
