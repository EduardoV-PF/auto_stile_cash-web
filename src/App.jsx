import { useState } from "react";
import "./App.css";
import VehiculosDestacados from "./pages/VehiculosDestacados";
import Novedades from "./pages/novedades";
import Footer from "./pages/Footer";
import logoPrincipal from "./assets/iconcoti.png";


      {/* marcas  */}
import bmwlogo from "./assets/marcas_icon/bmwlogo.png";
import chevroletlogo from "./assets/marcas_icon/chevroletlogo.png";
import fordlogo from "./assets/marcas_icon/fordlogo.png";
import geelylogo from "./assets/marcas_icon/Geelylogo.png";
import hondalogo from "./assets/marcas_icon/hondalogo.png";
import hyundailogo from "./assets/marcas_icon/hyundailogo.png";
import jaclogo from "./assets/marcas_icon/jaclogo.png";
import kialogo from "./assets/marcas_icon/kialogo.png";
import mazdalogo from "./assets/marcas_icon/mazdalogo.png";
import mitsubishilogo from "./assets/marcas_icon/mitsubishilogo.png";
import nissanlogo from "./assets/marcas_icon/nissanlogo.png";
import toyotalogo from "./assets/marcas_icon/toyotalogo.png";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    "Nosotros",
    "Inventario",
    "Vende Tu Auto",
    "Contáctanos",
  ];


const brands = [
  { name: "BMW", img: bmwlogo },
  { name: "Honda", img: hondalogo },
  { name: "Mazda", img: mazdalogo },
  { name: "Ford", img: fordlogo },
  { name: "Hyundai", img: hyundailogo },
  { name: "Kia", img: kialogo },

  { name: "Mitsubishi", img: mitsubishilogo },
  { name: "Nissan", img: nissanlogo },
  { name: "Toyota", img: toyotalogo },
  { name: "Chevrolet", img: chevroletlogo },

  { name: "Geely", img: geelylogo },
  { name: "JAC", img: jaclogo },
];


  return (


    <div className="app">

      {/* HEADER */}

{/* cabesa de pagina logos y seccion de navegador  */}





      <header className="header">
        <div className="logo">

             <img src={logoPrincipal}
             altsh></img>
          
          <span className="logo-mark"></span>
      

          <span>Auto Style Cash</span>
        </div>
      
        <button
          className="menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>


      {/* HERO */}
      <main>

      {/*banner superior  */}

        <section className="hero">

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <h1>Los Mejores Autos a Buen Precio</h1>
          </div>
        </section>

  {/*invocación de veiculos destacado*/}
<VehiculosDestacados />

    {/*logo de marcas */}


<section className="brands-section">
  <div className="container">
    <h2>Marcas Disponibles</h2>

    <div className="brands-grid">
      {brands.map((brand) => (
        <div className="brand-card" key={brand.name}>
          <img
            src={brand.img}
            alt={`Logo de ${brand.name}`}
            className="brand-logo"
          />

          <span>{brand.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>


  {/*invocacion de desplegable de novedades*/}
  <Novedades/>
  {/*invocacion de desplegable de pie de pagina*/}
  <Footer/>

      </main>

      {/* OVERLAY */}
      <div
        className={`menu-overlay ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      ></div>


      {/* MENU LATERAL */}
      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>

        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          ×
        </button>

        <nav>

          {menuItems.map((item) => (
            <a
              href="#"
              key={item}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

        </nav>

      </aside>



    </div>
  );
}

export default App;