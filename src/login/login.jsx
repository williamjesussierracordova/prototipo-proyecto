import React from "react";
import "./login.css";
import clancy from "../assets/clancy_tour.jpg";
import gtn_logo from "../assets/gtn-logo.png";
import { Button, PasswordInput } from "@mantine/core";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";

export default function Login() {    
    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-image">
                    <img src={clancy} alt="Imagen de la empresa" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
                </div>
                <div className="login-form">
                    <div className="title-login-form" >
                        <img src={gtn_logo} alt="Logo de la empresa" />
                        <h1 style={{color:'white'}}>GTN</h1>
                    </div>
                    <div className="subtitle-login-form">
                        <p>Bienvenido de nuevo, elige tu metodo de login</p>
                    </div>
                    <div className="login-buttons">
                        <Button leftSection={<FaFacebook size={14} color="blue"/>} radius="md" variant="default">
                            Facebook
                        </Button>
                        <Button leftSection={<FcGoogle size={14} />} radius="md" variant="default">
                            Google
                        </Button>
                    </div>
                    <div className="separator">
                        <span>o continua con correo</span>
                    </div>
                    <div className="login-inputs">
                    <PasswordInput
                        leftSection= {<FaLock />}
                        radius="lg"
                        placeholder="Contraseña"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
}