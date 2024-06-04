import { Button, Input, PasswordInput } from "@mantine/core";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import top_mobile from "../assets/top_pasarela.jpg";
import gtn_logo from "../assets/gtn-logo.png";
import "../signUp/signUp.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordConfirmationValid, setIsPasswordConfirmationValid] =
    useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

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

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setIsPasswordValid(password.length >= 8);
  };

  const handlePasswordConfirmationChange = (event) => {
    const passwordConfirmation = event.target.value;
    setPasswordConfirmation(passwordConfirmation);
    setIsPasswordConfirmationValid(passwordConfirmation.length >= 8);
    setIsPasswordMatch(password === passwordConfirmation);
  };

  return (
    <div className="sign-up_page">
      <div className="sign-up-container">
        <div className="sign-up-content">
          <div className="sign-up-image">
            <img
              src={top_mobile}
              alt="Imagen de la empresa"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="sign-up-form">
            <div className="title-sign-up-form">
              <img src={gtn_logo} alt="Logo de la empresa" />
              <h1 style={{ color: "white" }}>GTN</h1>
            </div>
            <div className="subtitle-sign-up-form">
              <p>Regístrate en GTN</p>
            </div>
            <div className="sign-up-inputs">
              <div className="sign-up-inputs-1">
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
                    value={password}
                    onChange={handlePasswordChange}
                    error={!isPasswordValid}
                  />
                </div>
                <div className="password-confirmation-input">
                    <PasswordInput
                    leftSection={<FaLock />}
                    radius="lg"
                    placeholder="Confirmar contraseña"
                    value={passwordConfirmation}
                    onChange={handlePasswordConfirmationChange}
                    error={!isPasswordConfirmationValid || !isPasswordMatch}
                    />
                </div>
                <div className="phone-input">
                    <Input
                        leftSection={<MdEmail />}
                        radius="lg"
                        placeholder="Número de teléfono"
                        value={email}
                        onChange={handleEmailChange}
                        error={!isEmailValid}
                    />
                </div>
               </div> 
                <div className="sign-up-inputs-2">
                  <div className="name-input">
                    <Input
                      leftSection={<MdEmail />}
                      radius="lg"
                      placeholder="Nombre"
                      value={email}
                      onChange={handleEmailChange}
                      error={!isEmailValid}
                    />
                  </div>
                  <div className="first-last-name-input">
                    <Input
                        leftSection={<MdEmail />}
                        radius="lg"
                        placeholder="Primer apellido"
                        value={email}
                        onChange={handleEmailChange}
                        error={!isEmailValid}
                    />
                  </div>
                  <div className="second-last-name-input">
                    <Input
                        leftSection={<MdEmail />}
                        radius="lg"
                        placeholder="Segundo apellido"
                        value={email}
                        onChange={handleEmailChange}
                        error={!isEmailValid}
                    />
                  </div>
                  <div className="dni-input">
                    <Input
                        leftSection={<MdEmail />}
                        radius="lg"
                        placeholder="DNI"
                        value={email}
                        onChange={handleEmailChange}
                        error={!isEmailValid}
                    />
                </div>
            </div>
              
            </div>
            <div className="sign-up-button">
              <Button
                text="Registrarse"
                radius="lg"
                onClick={() => {}}
                disabled={
                  !isEmailValid ||
                  !isPasswordValid ||
                  !isPasswordConfirmationValid ||
                  !isPasswordMatch
                }
              />
            </div>
            <div className="sign-up-login">
              <a href="/">¿Ya tienes cuenta? Inicia sesión</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
