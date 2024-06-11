import './profile.css'
import { Button, Input, PasswordInput } from '@mantine/core'
import { CgProfile } from "react-icons/cg";
import { IoTicketOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { reauthenticateWithCredential, signOut, updatePassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../Redux/User/userSlice';
import { getAuth } from 'firebase/auth';
import { EmailAuthProvider } from 'firebase/auth/web-extension';
import { useState } from 'react';
const auth = getAuth(app);

export default function Profile() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [activeSection, setActiveSection] = useState('perfil'); // 'perfil' es el valor inicial
    const handleShowPerfil = () => setActiveSection('perfil');
    const handleShowEntradas = () => setActiveSection('entradas');
    const handleShowCambiarContraseña = () => setActiveSection('cambiarContraseña');

    const handleSignOut = async () => {
        signOut(auth).then((val) => {
            console.log(val)
            dispatch(signoutSuccess())
            history('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const newpassword = e.target.password.value;
            const newpassword1 = e.target.password1.value;
            const oldpassword = e.target.oldpassword.value;
            if (newpassword !== newpassword1) {
                alert('Las contraseñas no coinciden');
                return;
            }
            console.log(newpassword);
            const credential = EmailAuthProvider.credential(
                auth.currentUser.email,
                oldpassword
            )

            reauthenticateWithCredential(auth.currentUser, credential).then(() => {
                console.log('Reautenticado');
                updatePassword(auth.currentUser, newpassword).then(() => {
                    console.log('Contraseña actualizada');
                    alert('Contraseña actualizada');

                })
            })
        }
        catch (error) {
            console.log(error);
            console.log('No se pudo actualizar la contraseña');
        }
    }

    return (
        <div className='profile_page'>
            <div className='profile_image' style={{ width: '100%', height: '150px', background: 'linear-gradient(to top, #964B96,#EC6839)' }}>
                <h1 className='profile_name' style={{ color: 'white' }}>Mi perfil</h1>
            </div>
            <div className='profile_container'>
                <div className='profile_buttons'>
                    <Button onClick={handleShowPerfil} leftSection={<CgProfile />} variant='light' radius='xs' size="md" className='profile_button' fullWidth style={{ border: '1px solid black' }} >Mi perfil</Button>
                    <Button onClick={handleShowEntradas} leftSection={<IoTicketOutline />} variant='light' radius='xs' size="md" className='profile_button' fullWidth style={{ border: '1px solid black' }}>Mis entradas</Button>
                    <Button onClick={handleShowCambiarContraseña} leftSection={<RiLockPasswordLine />} variant='light' radius='xs' size="md" className='profile_button' fullWidth style={{ border: '1px solid black' }}>Cambiar contraseña</Button>
                    <Button leftSection={<CiLogout />} variant='light' radius='xs' size="md" className='profile_button' color='red' fullWidth style={{ border: '1px solid black' }} onClick={handleSignOut}>Cerrar sesion</Button>
                </div>
                <div className='profile_info'>
                    {activeSection === 'perfil' && (
                        <div className='profile_perfil_container'>
                            <h1>Mis datos</h1>
                            <div className='profile_datos'>
                                <div className='profile_datos_1'>
                                    <Input.Wrapper label="Nombre" >
                                        <Input placeholder="Nombre" />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="Apellidos" >
                                        <Input placeholder="Apellidos" />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="Correo" >
                                        <Input placeholder="Correo" />
                                    </Input.Wrapper>
                                </div>
                                <div className='profile_datos_2'>
                                    <Input.Wrapper label="Telefono" >
                                        <Input placeholder="Telefono" />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="DNI">
                                        <Input placeholder="DNI" />
                                    </Input.Wrapper>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeSection === 'entradas' && (
                        <div className='profile_entradas_container'>
                            <h1>Entradas</h1>
                            <Button variant='light' radius='xs' size="md" type="submit" fullWidth style={{ border: '1px solid black' }} >Cambiar contraseña</Button>
                        </div>
                    )}
                    {activeSection === 'cambiarContraseña' && (
                        <div className='profile_cambiar_contrasena_container'>
                            <h2 style={{ marginTop: '0' }}>Cambiar contraseña</h2>
                            <div className='profile_password_info'>
                                <form onSubmit={handleChangePassword}>
                                    <PasswordInput placeholder='Contraseña actual' type="password" id="oldpassword" name='oldpassword' style={{ marginBlock: '1rem' }} />
                                    <PasswordInput placeholder='Nueva contraseña' type="password" id="password" name='password' style={{ marginBlock: '1rem' }} />
                                    <PasswordInput placeholder='Confirmar contraseña' type="password" id="password1" name='password1' style={{ marginBlock: '1rem' }} />
                                    <Button variant='light' radius='xs' size="md" type="submit" fullWidth style={{ border: '1px solid black' }}>Cambiar contraseña</Button>
                                </form>
                            </div>
                        </div>
                    )}
                    {/* <div className='profile_cerrar_sesion_container'>

                    </div> */}
                </div>
            </div>
        </div>
    )
}