import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import gtn_logo from "../assets/gtn-logo.png";
import { IoMenu } from "react-icons/io5";



function Header() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
    return (
      <>
        
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <span className="icon">
                <img src={gtn_logo} alt="logo"  style={{width:'100%',height:'100%', objectFit:'contain'}}/>
              </span>
              <span className="title-nav">Gran teatro nacional</span>
            </NavLink>
  
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/espectaculos"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Espectaculos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/novedades"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Novedades
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/nosotros"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                   Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contacto"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                   Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                   Iniciar Sesion
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
  
              {click ? (
                <span className="icon">
                  <IoMenu />{" "}
                </span>
              ) : (
                <span className="icon">
                  <IoMenu />
                </span>
              )}
            </div>
          </div>
        
      </>
    );
  }
  
  export default Header;