import { Button, Input, PasswordInput } from "@mantine/core";
import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import top_mobile from "../assets/top_pasarela.jpg";
import gtn_logo from "../assets/gtn-logo.png";
import "../signUp/signUp.css";
import { FaPhone } from "react-icons/fa6";
import { HiIdentification } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { writeUser } from "../Firebase/UserManage/userController";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase/firebase";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInFailure, signInSuccess } from "../Redux/User/userSlice";
const auth = getAuth(app);

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordConfirmationValid, setIsPasswordConfirmationValid] =
    useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [phone, setPhone] = useState("");
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [name, setName] = useState("");
  const [first_last_name, setFirstLastName] = useState("");
  const [second_last_name, setSecondLastName] = useState("");
  const [dni, setDni] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handlePhoneNumber = (event) => {
    const phone = event.target.value;
    setPhone(phone);
    setIsPhoneValid(phone.length === 9 && !isNaN(phone));
  };

  const handleName = (event) => {
    const name = event.target.value;
    setName(name);
  };

  const handleFirstLastName = (event) => {
    const first_last_name = event.target.value;
    setFirstLastName(first_last_name);
  };

  const handleSecondLastName = (event) => {
    const second_last_name = event.target.value;
    setSecondLastName(second_last_name);
  };

  const handleDni = (event) => {
    const dni = event.target.value;
    setDni(dni);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          writeUser(email, password, phone, name, first_last_name, second_last_name, dni);
          dispatch(signInSuccess(user));
          console.log(user);
          navigate('/');
        }
        else {
          dispatch(signInFailure('No se pudo iniciar sesión'));
        }
      });
    }
    catch(error){
      dispatch(signInFailure(error.message));
    }
  }

  const validForm = () => {
    return (
      isEmailValid &&
      isPasswordValid &&
      isPasswordConfirmationValid &&
      isPasswordMatch &&
      isPhoneValid &&
      name !== "" &&
      first_last_name !== "" &&
      second_last_name !== "" &&
      dni.length === 8
    );
  }



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
            <form onSubmit={handleFormSubmit}>
              <div className="sign-up-inputs">
                <div className="sign-up-inputs-1">
                  <div className="email-input">
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
                      id="email"
                    />
                  </div>
                  <div className="password-input1">
                    <PasswordInput
                      leftSection={<FaLock />}
                      radius="lg"
                      placeholder="Contraseña"
                      value={password}
                      onChange={handlePasswordChange}
                      error={!isPasswordValid}
                      id="password"
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
                      id="password-confirmation"
                    />
                  </div>
                  <div className="phone-input">
                    <Input
                      leftSection={<FaPhone />}
                      radius="lg"
                      placeholder="Número de teléfono"
                      value={phone}
                      onChange={handlePhoneNumber}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      error={!isPhoneValid}
                      id="phone"
                    />
                  </div>
                </div>
                <div className="sign-up-inputs-2">
                  <div className="name-input">
                    <Input
                      leftSection={<CgProfile />}
                      radius="lg"
                      placeholder="Nombres"
                      value={name}
                      onChange={handleName}
                      onKeyPress={(event) => {
                        if (!/[a-zA-Z]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      id="name"
                    />
                  </div>
                  <div className="first-last-name-input">
                    <Input
                      leftSection={<CgProfile />}
                      radius="lg"
                      placeholder="Primer apellido"
                      value={first_last_name}
                      onChange={handleFirstLastName}
                      onKeyPress={(event) => {
                        if (!/[a-zA-Z]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      id="first_last_name"
                    />
                  </div>
                  <div className="second-last-name-input">
                    <Input
                      leftSection={<CgProfile />}
                      radius="lg"
                      placeholder="Segundo apellido"
                      value={second_last_name}
                      onChange={handleSecondLastName}
                      onKeyPress={(event) => {
                        if (!/[a-zA-Z]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      id="second_last_name"
                    />
                  </div>
                  <div className="dni-input">
                    <Input
                      leftSection={<HiIdentification />}
                      radius="lg"
                      placeholder="DNI"
                      value={dni}
                      onChange={handleDni}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      error={dni.length !== 8}
                      id="dni"
                    />
                  </div>
                </div>
              </div>
              <div className="sign-up-button">
                <Button
                  radius="lg"
                  onClick={() => {}}
                  disabled={validForm() ? false : true
                  }
                  style={{ width: "100%" }}
                  color="indigo"
                  type="submit"
                >
                  Registrarse
                </Button>
              </div>
            </form>
            <div className="sign-up-login">
              <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
              <a href="/forget_password">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
