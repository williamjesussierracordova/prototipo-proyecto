import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./contacto-p.css";

const Contacto = () => {
  return (
    <div className="contacto__p section__padding">
      <div className="contacto__p__div">
        <h1>Contacto</h1>
      </div>
      <div className="contacto__p__div__inf">
      <p>Para preguntas o reservas acerca del recinto</p>
        <div className="contacto__p__div__inf__div">
          <a href="tel:5116189393" target="_blank">
            <FaPhoneAlt className="icon" />
          </a>
          <p>(511) 618 9393 anexo 1004</p>
        </div>
        <p>Para información y/o preguntas acerca de un show</p>
        <div className="contacto__p__div__inf__div">
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
        <p>Para quejas, sugerencias o reclamos</p>
        <div className="contacto__p__div__inf__div">
          <a href="mailto:comunicacion.gtn@cultura.gob.pe" target="_blank">
            <IoIosMail className="icon" />
          </a>
          <p>comunicacion.gtn@cultura.gob.pe</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
