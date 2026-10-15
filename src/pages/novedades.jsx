
import { useState } from "react";
import "../styles/novedades.css";

function Novedades() {
  const [inicio, setInicio] = useState(0);

  const novedades = [
    {
      id: 1,
      titulo: "Paquete de Asistencia al Viajero",
      descripcion:
        "Protección integral durante tu alquiler: emergencias médicas y asistencia.",
      imagen: "/novedades/img1.jpg",
    },
    {
      id: 2,
      titulo: "Cómo elegir el auto ideal",
      descripcion:
        "Descubre qué vehículo alquilar según tu tipo de viaje.",
      imagen: "/novedades/img2.jpg",
    },
    {
      id: 3,
      titulo: "Promociones de temporada",
      descripcion:
        "Aprovecha nuestras ofertas especiales para alquiler de autos.",
      imagen: "/novedades/img3.jpg",
    },
    {
      id: 4,
      titulo: "Consejos para conducir",
      descripcion:
        "Guías y recomendaciones para un viaje seguro.",
      imagen: "/novedades/img4.jpg",
    },
  ];

  const siguiente = () => {
    setInicio((prev) =>
       prev >= novedades.length - 2 ? 0 : prev + 1
    );
  };

  const anterior = () => {
    setInicio((prev) =>
      prev <= 0 ? novedades.length - 2 : prev - 1
    );
  };

  return (
    <section className="novedades-section">
      <h2>Novedades de Autos Style Cash</h2>

      <p className="subtitulo">
        enterate en lo ultimo de autos justo aqui.
      </p>

      <div className="slider-container">
        <button
          type="button"
          className="slider-btn"
          onClick={anterior}
          aria-label="Ver novedades anteriores"
        >
          ❮
        </button>



<div className="slider-viewport">
        <div className="cards-container"
          style={{
   transform: `translateX(-${inicio * 370}px)`,
  }}        
        >
          {novedades.map((item) => (
            <article className="novedad-card" key={item.id}>
              <img
                src={item.imagen}
                alt={item.titulo}
                className="novedad-imagen"
              />

              <div className="novedad-info">
                <h3>{item.titulo}</h3>

                <p>{item.descripcion}</p>

                <a
                  href={`/novedades/${item.id}`}
                  className="novedad-link"
                >
                  Ver más →
                </a>
              </div>
            </article>
          ))}
        </div>
</div>

        <button
          type="button"
          className="slider-btn"
          onClick={siguiente}
          aria-label="Ver siguientes novedades"
        >
          ❯
        </button>
      </div>
    </section>
  );
}

export default Novedades;
