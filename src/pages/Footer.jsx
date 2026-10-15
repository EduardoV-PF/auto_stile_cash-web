
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
} from "react-icons/md";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Información de la empresa */}
        <div className="footer-column">
          <h2 className="footer-logo">Autos Style Cash</h2>

          <p className="footer-text">
            Conectamos personas con su próximo vehículo.
          </p>

          <p>
            <MdLocationOn /> Ciudad de Panamá, Panamá
          </p>

          <p>
            <MdPhone /> +507 6000-0000
          </p>

          <p>
            <MdEmail /> ventas@superautos.com
          </p>
        </div>

        {/* Enlaces de la empresa */}
        <div className="footer-column">
          <h3>Nosotros</h3>

          <a href="#quienes-somos">Quiénes somos</a>
          <a href="#inventario">Inventario</a>
          <a href="#promociones">Promociones</a>
          <a href="#financiamiento">Financiamiento</a>
          <a href="#contacto">Contacto</a>
        </div>

        {/* Servicios */}
        <div className="footer-column">
          <h3>Servicios</h3>

          <a href="#compra">Compra</a>
          <a href="#venta">Venta</a>
          <a href="#inspeccion">Inspección vehicular</a>
          <a href="#seguros">Seguros</a>
          <a href="#soporte">Soporte</a>
        </div>

        {/* Redes sociales */}
        <div className="footer-column">
          <h3>Síguenos</h3>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Parte inferior del footer */}
      <div className="footer-bottom">
        <p>
          © 2026 SuperAutos. Todos los derechos reservados.
        </p>

        <div className="footer-legal">
          <a href="#privacidad">Política de privacidad</a>
          <a href="#terminos">Términos y condiciones</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
