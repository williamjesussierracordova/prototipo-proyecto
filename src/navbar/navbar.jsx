import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircle } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="sb__navbar section__padding">
                <div className="sb__navbar-links">
                    <div className={`sb__navbar-links_div ${isOpen ? "open" : ""}`}>
                        <a href="">
                            <Link to="/">
                                <p>Inicio</p>
                            </Link>
                        </a>
                        <a href="">
                            <Link to="/espectaculos">
                                <p>Espectaculos</p>
                            </Link>
                        </a>
                        <a href="">
                            <Link to="/novedades">
                                <p>Novedades</p>
                            </Link>
                        </a>
                        <a href="">
                            <Link to="/nosotros">
                                <p>Nosotros</p>
                            </Link>
                        </a>
                        <a href="">
                            <Link to="/contacto">
                                <p>Contacto</p>
                            </Link>
                        </a>
                    </div>
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <IoCloseCircle /> : <TiThMenu />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// const Navbar = () => {
//     return (
//         <section className="navbar">
//             <div className="navbar_section">
//                 <ul className="navbar_list flex">
//                     <li className="navitem">
//                         <a href="#" className="navLink">Inicio</a>
//                     </li>
//                     <li className="navitem">
//                         <a href="#" className="navLink">Espectaculos</a>
//                     </li>
//                     <li className="navitem">
//                         <a href="#" className="navLink">Novedades</a>
//                     </li>
//                     <li className="navitem">
//                         <a href="#" className="navLink">Nosotros</a>
//                     </li>
//                     <li className="navitem">
//                         <a href="#" className="navLink">Contacto</a>
//                     </li>

//                     <button className="btn">
//                         <a href="#" className="btnLink">Comprar entradas</a>
//                     </button>

//                     <div className="closeNavbar">
//                         <IoCloseCircle className="icon"/>
//                     </div>
//                 </ul>
//             </div>

//             <div className="openNavbar">
//                 <TiThMenu className="icon"/>
//             </div>
//         </section>
//     )
// }

// export default Navbar;