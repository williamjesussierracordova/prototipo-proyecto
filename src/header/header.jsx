import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import gtn_logo from "../assets/gtn-logo.png";
import { IoMenu } from "react-icons/io5";
import {  Button } from '@mantine/core';
import { useSelector } from "react-redux";

function Header() {
  const [click, setClick] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {currentUser} = useSelector(state => state.user);

  const handleClick = () => setClick(!click);


  return (
    <>

      <div className="nav-container" >
        <NavLink exact to="/" className="nav-logo">
          <span className="icon">
            <img src={gtn_logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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
              <Button className="nav-links" style={{ fontSize: '16px', fontWeight: '500', height: '100%', padding: '0', margin: '0', border: 'none', background: 'none', cursor: 'pointer', outline: 'none' }}>Inicio</Button>
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
              <Button className="nav-links" style={{ fontSize: '16px', fontWeight: '500', height: '100%', padding: '0', margin: '0', border: 'none', background: 'none', cursor: 'pointer', outline: 'none' }}>Espectaculos</Button>
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
              <Button className="nav-links" style={{ fontSize: '16px', fontWeight: '500', height: '100%', padding: '0', margin: '0', border: 'none', background: 'none', cursor: 'pointer', outline: 'none' }}>Novedades</Button>
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
              <Button className="nav-links" style={{ fontSize: '16px', fontWeight: '500', height: '100%', padding: '0', margin: '0', border: 'none', background: 'none', cursor: 'pointer', outline: 'none' }}>Nosotros</Button>
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
              <Button className="nav-links" style={{ fontSize: '16px', fontWeight: '500', height: '100%', padding: '0', margin: '0', border: 'none', background: 'none', cursor: 'pointer', outline: 'none' }}>Contacto</Button>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to={currentUser ? "/profile" : "/login"}
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              {currentUser ?
                    // <Button className="nav-links"  style={{ fontSize: '16px', fontWeight: '500', height: '100%', padding: '0', margin: '0', border: 'none', background: 'none', cursor: 'pointer', outline: 'none', color:'blue'}}>Hola @{currentUser.user.displayName}</Button>
                    <Button className="nav-links"  style={{ fontSize: '16px', fontWeight: '500', height: '100%', padding: '0', margin: '0', border: 'none', background: 'none', cursor: 'pointer', outline: 'none', color:'red'}}>Mi perfil</Button>
                :
                    <Button className="nav-links"  style={{ fontSize: '16px', fontWeight: '500', height: '100%', padding: '0', margin: '0', border: 'none', background: 'none', cursor: 'pointer', outline: 'none', color: 'red' }}>Iniciar Sesion</Button>
              }
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