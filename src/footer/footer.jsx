import React from "react";
import "./footer.css";
// import fb from "../assets/fb.svg";
// import twitter from "../assets/twitter.svg";
// import instagram from "../assets/instagram.svg";
// import youtube from "../assets/youtube.svg";
// import phone from "../assets/phone.svg";
// import email from "../assets/mail.svg"
import ministerio from "../assets/logo-ministerio.png";
import gtn from "../assets/gtn.png";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sb__footer padding_footer">
      <div className="sb__footer-links">
        <div className="sb__footer-links_div">
          <div className="teatro-img">
            <Link to="/">
              <img src={gtn} alt="" className="gtn-img"></img>
            </Link>
            <Link to={"/"}>
              <img src={ministerio} alt="" className="ministerio-img"></img>
            </Link>
          </div>
        </div>
        {/* <div className="sb__footer-links_div">
                        <h4>For business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healtplan">
                            <p>healtplan</p>
                        </a>
                        <a href="/individual">
                            <p>Employer</p>
                        </a>
                        <a href="/section">
                            <p>section</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Resource</h4>
                        <a href="/resource">
                            <p>Resourece center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/section">
                            <p>Stv</p>
                        </a>
                    </div> */}
        <div className="sb__footer-links_div">
          <h2>Sobre nosotros</h2>
          <a href="/company">
            <p> • Acerca de nosotros</p>
          </a>
          <a href="/company">
            <p> • Terminos y condiciones</p>
          </a>
          <a href="/company">
            <p> • Politica de privacidad</p>
          </a>
          <a href="/company">
            <p> • Preguntas Frecuentes</p>
          </a>
          <a href="/company">
            <p> • Revisa tu comprobante</p>
          </a>
        </div>
        <div className="sb__footer-links_div">
          <h2>Trabajemos juntos</h2>
          <a href="/legal">
            <p> • Tienes un evento?</p>
          </a>
          <a href="/legal">
            <p> • Contacto empresas</p>
          </a>
          <a href="/legal">
            <p> • Modulo de atención</p>
          </a>
        </div>
        <div className="sb__footer-links_div">
          <h2>Contacto</h2>
          <div className="socialmedia">
            {/* <p><img src={fb} alt=""></img></p>
                            <p><img src={twitter} alt=""></img></p>
                            <p><img src={instagram} alt=""></img></p>
                            <p><img src={youtube} alt="" ></img></p> */}
            <a
              href="https://www.facebook.com/GranTeatroNacional/"
              target="_blank"
            >
              <CiFacebook className="icon" />
            </a>
            <a href="https://twitter.com/GranTeatroNac" target="_blank">
              <FaXTwitter className="icon" />
            </a>
            <a
              href="https://www.instagram.com/granteatronacional/"
              target="_blank"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCxKysdVSHGO3t0YJF5Dj4_w/featured"
              target="_blank"
            >
              <FaYoutube className="icon" />
            </a>
          </div>
          <div className="socialmedia">
            <a href="tel:5116189393" target="_blank">
              <FaPhoneAlt className="icon" />
              <h4>(511) 618 9393 anexo 1004</h4>
            </a>
          </div>
          <div className="socialmedia">
            <a href="mailto:comunicacion.gtn@cultura.gob.pe" target="_blank">
              <IoIosMail className="icon" />
              <h4>comunicacion.gtn@cultura.gob.pe</h4>
            </a>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="sb__footer-below">
        <div className="sb__footer-copyright">
          <p> © TODOS LOS DERECHOS RESERVADOS {new Date().getFullYear()}.</p>
        </div>
        <div className="sb__footer-below-links">
          <a href="/terms">
            <div>
              <Link to={"/"}>
                <p>GRAN TEATRO NACIONAL - MINISTERIO DE CULTURA</p>
              </Link>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
