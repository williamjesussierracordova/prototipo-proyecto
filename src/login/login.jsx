import { useState } from "react";
import "./login.css";
import gtn_logo from "../assets/gtn-logo.png";
import { Button, Input, Notification, PasswordInput } from "@mantine/core";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import top_mobile from "../assets/top_pasarela.jpg";
import OAuth from "../Components/OAuth";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../Redux/User/userSlice";
import { useNavigate } from "react-router-dom";
import { app } from "../Firebase/firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { readUserFromEmail } from "../Firebase/UserManage/userController";

const auth = getAuth(app);

export default function Login() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
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

  const funcAuth = async (e) => {
    e.preventDefault();
    try {
      const correo = e.target.email.value;
      const password = e.target.password.value;

      await signInWithEmailAndPassword(auth, correo, password);
      let userData = await readUserFromEmail(correo);
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(signInSuccess(userData));
          navigate('/');
        }
        else {
          dispatch(signInFailure('No se pudo iniciar sesión'));
          console.log('No se pudo iniciar sesión');
        }
      });

    } catch (error) {
      dispatch(signInFailure(error.message)); 
    }
  }

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
              <form onSubmit={funcAuth}>
                <div className="correo-input">
                  <Input
                    leftSection={<MdEmail />}
                    radius="lg"
                    placeholder={isEmailValid ? " Ingresa correo" : "Ingresa correo válido"}
                    type="email"
                    onChange={handleEmailChange}
                    error={ isEmailValid ? null : 'Correo inválido'}
                    id="email"
                  />
                </div>
                <div className="password-input">
                  <PasswordInput
                    type="password"
                    leftSection={<FaLock />}
                    radius="lg"
                    placeholder="Contraseña"
                    id="password"
                  />
                </div>
                <div className="login-button">
                  <Button radius="lg" variant="filled" color="indigo" type="submit" style={{minWidth:'100%'}}>
                    Ingresar
                  </Button>
                </div>
                <div className="separator">
                  <span>or</span>
                </div>
                <div className="oauth-buttons">
                  <OAuth />
                </div>
              </form>
              <div className="signup_forgot_pasord">
                <a href="/registrar">¿No tienes cuenta? Registrate</a>
                <a href="/forget_password">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
