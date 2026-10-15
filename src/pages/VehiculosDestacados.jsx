import "../styles/VehiculosDestacados.css";
import mazdaImg from "../assets/sssss.jpg";
import mazdet from "../assets/mitf.jpg";
import gre from "../assets/ffgrel.jpg"
import isuu from "../assets/izuzu.jpg"

const autos = [
  {
    id: 1,
    nombre: "Mazda CX-5",
    precio: "$ 9,999",
    km: "79,738 km",
    transmision: "Automática",
    categoria: "CAMIONETAS",
    anio: "2016",
    imagen: mazdaImg ,
  },
  {
    id: 2,
    nombre: "Mitsubishi Outlander",
    precio: "$ 34,999",
    km: "935 km",
    transmision: "Automática",
    categoria: "CAMIONETAS",
    anio: "2026",
    imagen:mazdet ,
  },
  {
    id: 3,
    nombre: "Geely Tugella",
    precio: "$ 22,999",
    km: "45,509 km",
    transmision: "Automática",
    categoria: "CAMIONETAS",
    anio: "2024",
    imagen: gre ,
  },
  {
    id: 4,
    nombre: "Isuzu D-Max",
    precio: "$ 9,500",
    km: "220,000 km",
    transmision: "Automática",
    categoria: "CAMIONETAS",
    anio: "2024",
    imagen: isuu ,
  },
];

function VehiculosDestacados() {
  return (
    <section className="featured-section">
      <div className="container">

        <h2>Vehículos recientemente agregados</h2>

        <div className="cars-grid">
          {autos.map((auto) => (
            <div className="vehiculo-card" key={auto.id}>

              {/* IMAGEN */}
              <div className="img-container">
                <img
                  src={auto.imagen}
                  alt={auto.nombre}
                />

                <span className="nuevo">
                  Nuevo anuncio
                </span>

                <span className="anio">
                  {auto.anio}
                </span>
              </div>

              {/* INFORMACIÓN */}
              <div className="vehiculo-info">

                <h3>{auto.nombre}</h3>

                <div className="precio">
                  {auto.precio}
                </div>

                <p>{auto.km}</p>

                <p>{auto.transmision}</p>

                <button className="categoria">
                  {auto.categoria}
                </button>

                <a href="#" className="detalles">
                  Más detalles →
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN VER TODOS */}
        <div className="ver-todos">
          <button>Ver todos</button>
        </div>

      </div>
    </section>
  );
}

export default VehiculosDestacados;