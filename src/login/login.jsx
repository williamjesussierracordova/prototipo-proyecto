import React, { useState } from "react";
import "./login.css";
import gtn_logo from "../assets/gtn-logo.png";
import { Button, Input, PasswordInput } from "@mantine/core";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import top_mobile from "../assets/top_pasarela.jpg";
import { FaTwitter } from "react-icons/fa";
import { AuthProvider } from "../context/AuthContext";
import { auth } from "../firebase/firebase";
import { createContext, useContext } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    setIsEmailValid(validateEmail(email));
  };

  return (
    <div className="login_page">
      <div className="login-container">
        <div className="login-content">
          <div className="login-image">
            <img
              src={top_mobile}
              alt="Imagen de la empresa"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="login-form">
            <div className="title-login-form">
              <img src={gtn_logo} alt="Logo de la empresa" />
              <h1 style={{ color: "white" }}>GTN</h1>
            </div>
            <div className="subtitle-login-form">
              <p>Bienvenido de nuevo, elige tu metodo de login</p>
            </div>
            <div className="login-inputs">
              <div className="correo-input">
                <Input
                  leftSection={<MdEmail />}
                  radius="lg"
                  placeholder={
                    !isEmailValid
                      ? "Introduce un correo electrónico válido"
                      : "Correo electrónico"
                  }
                  value={email}
                  onChange={handleEmailChange}
                  error={!isEmailValid}
                />
              </div>
              <div className="password-input">
                <PasswordInput
                  leftSection={<FaLock />}
                  radius="lg"
                  placeholder="Contraseña"
                />
              </div>

              <div className="signup_forgot_pasord">
                <a href="/">¿No tienes cuenta? Registrate</a>
                <a href="/">¿Olvidaste tu contraseña?</a>
              </div>

              <div className="login-button">
                <Button radius="lg" variant="filled" color="indigo">
                  Ingresar
                </Button>
              </div>
              <div className="separator">
                <span>or</span>
              </div>
              <div className="login-buttons">
                <Button
                  leftSection={<FcGoogle size={14} />}
                  radius="md"
                  variant="default"
                >
                  Google
                </Button>
                {/* <Button
                leftSection={<FaTwitter size={14} color="skyblue" />}
                radius="md"
                variant="default"
              >
                Twitter
              </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
