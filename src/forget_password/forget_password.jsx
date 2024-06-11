import "./forget_password.css";
import { Input, Button } from "@mantine/core";
import gtn_logo from "../assets/gtn-logo.png";
import top_mobile from "../assets/top_pasarela.jpg";
import { MdEmail } from "react-icons/md";
import { sendPasswordResetEmail, updatePassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../Redux/User/userSlice';
import { getAuth } from 'firebase/auth';
const auth = getAuth(app);

export default function ForgetPassword() {
    const history = useNavigate();
    const dispatch = useDispatch();
    
    const handleResetPassword = async (e) => {
        e.preventDefault();
        
        try{
            const email = e.target.email.value;
            console.log(email);
            await sendPasswordResetEmail(auth, email);
            dispatch(signoutSuccess());
            alert('Se ha enviado un correo para restablecer tu contraseña');
            history('/login');
        }
        catch(error){
            console.log(error); 
            dispatch(signoutSuccess());
            console.log('No se pudo enviar el correo');
        }
        // sendPasswordResetEmail(auth, email).then((val) => {
        //     console.log(val)
        //     dispatch(signoutSuccess());
        //     alert('Se ha enviado un correo para restablecer tu contraseña');
        //     history('/login');
        // }).catch((error) => {
        //     // An error happened.
        //     console.log(error);
        // });
    }

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
                            <form onSubmit={handleResetPassword}>
                                <div className="correo-input">
                                    <Input
                                        leftSection={<MdEmail />}
                                        radius="lg"
                                        placeholder={"Correo electrónico"}
                                        type="email"
                                        id="email"
                                    />
                                </div>
                                <div className="signup_forgot_pasord">
                                    <a href="/login">¿Ya tienes cuenta? Inicia sesión</a>
                                    <a href="/registrar">¿No tienes cuenta? Registrate</a>
                                </div>

                                <div className="forg_pass-button">
                                    <Button radius="lg" variant="filled" color="indigo" type="submit">
                                        Enviar correo
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
