import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import gtn_logo from "../assets/gtn-logo.png";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Menu, Button, Text, rem, Avatar } from '@mantine/core';
import { IoTicket } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { TbLogin } from "react-icons/tb";
import { TbLogin2 } from "react-icons/tb";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { useEffect } from "react";



function Header() {
    const [click, setClick] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    const handleClick = () => setClick(!click);


    return (
      <>
        
          <div className="nav-container" >
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
                  <Button className="nav-links" style={{fontSize:'16px',fontWeight:'500',height:'100%',padding:'0',margin:'0',border:'none',background:'none',cursor:'pointer',outline:'none'}}>Inicio</Button>
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
                  <Button className="nav-links" style={{fontSize:'16px',fontWeight:'500',height:'100%',padding:'0',margin:'0',border:'none',background:'none',cursor:'pointer',outline:'none'}}>Espectaculos</Button>
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
                  <Button className="nav-links" style={{fontSize:'16px',fontWeight:'500',height:'100%',padding:'0',margin:'0',border:'none',background:'none',cursor:'pointer',outline:'none'}}>Novedades</Button>
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
                  <Button className="nav-links" style={{fontSize:'16px',fontWeight:'500',height:'100%',padding:'0',margin:'0',border:'none',background:'none',cursor:'pointer',outline:'none'}}>Nosotros</Button>
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
                  <Button className="nav-links" style={{fontSize:'16px',fontWeight:'500',height:'100%',padding:'0',margin:'0',border:'none',background:'none',cursor:'pointer',outline:'none'}}>Contacto</Button>
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
                  {isAuthenticated ?
                    <Menu trigger="click-hover" shadow="md" width={200}>
                    <Menu.Target >
                      <Button className="nav-links" style={{fontSize:'16px',fontWeight:'500',height:'100%',padding:'0',margin:'0',border:'none',background:'none',cursor:'pointer',outline:'none'}}>Contacto</Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Label>Application</Menu.Label>
                      <Menu.Item leftSection={<HiShoppingBag style={{ width: rem(14), height: rem(14) }} />}>
                        Mis Compras
                      </Menu.Item>
                      <Menu.Item leftSection={<IoTicket style={{ width: rem(14), height: rem(14) }} />}>
                        E-tickets
                      </Menu.Item>
                      <Menu.Item leftSection={<CgProfile style={{ width: rem(14), height: rem(14) }} />}>
                        Perfil
                      </Menu.Item>
                      <Menu.Item
                        leftSection={<TbLogin style={{ width: rem(14), height: rem(14) }} />}
                        // rightSection={
                        //   <Text size="xs" c="dimmed">
                        //     ⌘K
                        //   </Text>
                        // }
                        color="red"
                      >
                        Cerrar sesion
                      </Menu.Item>

                      <Menu.Divider />

                      <Menu.Label>Account</Menu.Label>
                      {/* <Menu.Item
                        leftSection={<CgProfile style={{ width: rem(14), height: rem(14) }} />}
                      >
                        Transfer my data
                      </Menu.Item> */}
                      <Menu.Item leftSection={<TbLogin2 style={{ width: rem(14), height: rem(14) }} />}>
                        Iniciar sesion
                      </Menu.Item>
                      <Menu.Item leftSection={<FaLock style={{ width: rem(14), height: rem(14) }} />}>
                        Cambiar contraseña
                      </Menu.Item>
                      <Menu.Item
                        color="red"
                        leftSection={<MdDelete style={{ width: rem(14), height: rem(14) }} />}
                      >
                        Delete my account
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                  :
                  <Menu trigger="click-hover" shadow="md" width={200}>
                    <Menu.Target >
                      <Button className="nav-links" style={{fontSize:'16px',fontWeight:'500',height:'100%',padding:'0',margin:'0',border:'none',background:'none',cursor:'pointer',outline:'none'}}>Contacto</Button>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item color="green" leftSection={<TbLogin2 style={{ width: rem(14), height: rem(14) }} />}>
                        <NavLink style={{color:'green'}} to="/login">Iniciar sesion</NavLink>
                      </Menu.Item>
                      <Menu.Item color="blue" leftSection={<RiCheckboxCircleLine style={{ width: rem(14), height: rem(14) }} />}>
                        <NavLink style={{color:'blue'}} to="/contacto">Registrarse</NavLink>
                      </Menu.Item>
                      <Menu.Item color="red" leftSection={<FaLock style={{ width: rem(14), height: rem(14) }} />}>
                        <NavLink style={{color:'red'}} to="/contacto">Olvide mi contraseña</NavLink>
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
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