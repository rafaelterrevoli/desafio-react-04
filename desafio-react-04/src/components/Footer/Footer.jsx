import './Footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
   <footer className="footer-section">
  <div className="container">
    <div className="footer-cta pt-5 pb-5">
      <div className="row">
      <div className="col-xl-5 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-map-marker-alt" />
            <div className="cta-text">
              <h4>Dirección</h4>
              <span>Av. Gomez, 543, Valencia</span>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 mb-30">
          <div className="single-cta">
            <i className="fas fa-phone" />
            <div className="cta-text">
              <h4>Teléfono</h4>
              <span>9 5117 7975</span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-4 mb-30">
          <div className="single-cta">
            <i className="far fa-envelope-open" />
            <div className="cta-text">
              <h4>Nuestro enail</h4>
              <span>mail@info.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-content pt-5 pb-5">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index.html"><img src={logo} className="img-fluid" alt="logo" /></a>
            </div>
            <div className="footer-text">
              <p>En TeamPro te ayudamos a hacer realidad de estudiar en el extrajero</p>
            </div>
            <div className="footer-social-icon">
              <span>Siguenos en:</span>
              <a href="#"><i className="fab fa-facebook-f facebook-bg" /></a>
              <a href="#"><i className="fab fa-twitter twitter-bg" /></a>
              <a href="#"><i className="fab fa-google-plus-g google-bg" /></a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Enlaces</h3>
            </div>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Acerca de Nosotros</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contactos</a></li>
              <li><a href="#">Quines Somos</a></li>
              <li><a href="#">Nuestros Servicios</a></li>
              <li><a href="#">Equipo de Expertos</a></li>
              <li><a href="#">Constactanos</a></li>
              <li><a href="#">Últimas Noticias</a></li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Suscribete</h3>
            </div>
            <div className="footer-text mb-25">
              <p>No dejes de suscribirte, ingresa tu correo electrónico.</p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button><i className="fab fa-telegram-plane" /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
          <div className="copyright-text">
            <p>Copyright © 2023, All Right Reserved <a>TeamPro</a></p>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
          <div className="footer-menu">
            <ul>
              <li><a href="#">Inico</a></li>
              <li><a href="#">Terminos y Condiciones</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Polícas</a></li>
              <li><a href="#">Contactanos</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer