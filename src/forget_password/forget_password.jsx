import "./forget_password.css";
import { Input, PasswordInput, Button } from "@mantine/core";
import gtn_logo from "../assets/gtn-logo.png";
import top_mobile from "../assets/top_pasarela.jpg";
import { FcGoogle } from "react-icons/fc";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ForgetPassword() {
    return (
        <div className="forg_pass_page">
            <div className="forg_pass-container">
                <div className="forg_pass-content">
                    <div className="forg_pass-image">
                        <img
                            src={top_mobile}
                            alt="Imagen de la empresa"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>
                    <div className="forg_pass-form">
                        <div className="title-forg_pass-form">
                            <img src={gtn_logo} alt="Logo de la empresa" />
                            <h1 style={{ color: "white" }}>GTN</h1>
                        </div>
                        <div className="subtitle-forg_pass-form">
                            <p>Ingresa tu email para que podamos ayudarte</p>
                        </div>
                        <div className="forg_pass-inputs">
                            <div className="correo-input">
                                <Input
                                    leftSection={<MdEmail />}
                                    radius="lg"
                                    placeholder={"Correo electrónico"}
                                />
                            </div>
                            <div className="signup_forgot_pasord">
                                <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
                                <a href="/registrar">¿No tienes cuenta? Registrate</a>
                            </div>

                            <div className="forg_pass-button">
                                <Button radius="lg" variant="filled" color="indigo">
                                    Enviar correo
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
