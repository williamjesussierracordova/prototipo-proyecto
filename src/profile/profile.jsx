import './profile.css'
import { Accordion, Button, Input, PasswordInput } from '@mantine/core'
import { CgProfile } from "react-icons/cg";
import { IoTicketOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import { reauthenticateWithCredential, signOut, updatePassword } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { app, db } from '../Firebase/firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess, signoutSuccess } from '../Redux/User/userSlice';
import { getAuth } from 'firebase/auth';
import { EmailAuthProvider } from 'firebase/auth/web-extension';
import { use, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { updateUserDNI, updateUserPassword, updateUserPhone } from '../Firebase/UserManage/userController';
import { onValue, ref } from 'firebase/database';
import { readPromoter } from '../Firebase/promotersManage/promotersManage';
import { readSaleUser } from '../Firebase/salesManage/salesManage';
import { readTicketSale } from '../Firebase/ticketsManage/ticketsManage';
import { readOffer } from '../Firebase/offersManage/offersManage';
const auth = getAuth(app);

export default function Profile() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [activeSection, setActiveSection] = useState('perfil'); // 'perfil' es el valor inicial
    const handleShowPerfil = () => setActiveSection('perfil');
    const handleShowEntradas = () => setActiveSection('entradas');
    const handleShowCambiarContraseña = () => setActiveSection('cambiarContraseña');
    const { currentUser } = useSelector(state => state.user);
    const [userData, setUserData] = useState(currentUser);
    const [phoneValid, setPhoneValid] = useState(false);
    const [dniValid, setDniValid] = useState(false);
    const [nameUser, setNameUser] = useState(userData.name);
    const [lastNameUser, setLastNameUser] = useState(userData.firstLastName + ' ' + userData.secondLastName);
    const [emailUser, setEmailUser] = useState(userData.email);
    const [phoneUser, setPhoneUser] = useState(userData.phone);
    const [dniUser, setDniUser] = useState(userData.DNI);

    const handlePhone = (e) => {
        const phone = e.target.value;
        setPhoneUser(phone);
        setUserData({ ...userData, phone: e.target.value });
        setPhoneValid(phone.length === 9);
    }

    const handleDNI = (e) => {
        const DNI = e.target.value;
        setDniUser(DNI);
        setUserData({ ...userData, DNI: e.target.value });
        setDniValid(DNI.length === 8);
    }

    const handleSignOut = async () => {
        signOut(auth).then(() => {
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

            console.log(credential);
            reauthenticateWithCredential(auth.currentUser, credential).then(() => {
                console.log('Reautenticado');
                updatePassword(auth.currentUser, newpassword).then(() => {
                    console.log('Contraseña actualizada');
                    alert('Contraseña actualizada');

                })

                updateUserPassword(currentUser.idUser, newpassword);
            })
                .catch((error) => {
                    console.log(error);
                    alert('Contraseña incorrecta');
                })

        }
        catch (error) {
            console.log(error);
            console.log('No se pudo actualizar la contraseña');
        }
    }

    const handleSubmitChanges = async (e) => {
        e.preventDefault();
        try {
            updateUserPhone(currentUser.idUser, phoneUser);
            updateUserDNI(currentUser.idUser, dniUser);
            userData.phone = phoneUser;
            userData.DNI = dniUser;

            dispatch(signInSuccess(userData));
            history('/profile');
        }
        catch (error) {
            console.log(error);
        }
    }

    const [events, setEvents] = useState([]);
    const eventsFirebase = () => {
        try {
            const eventsReference = ref(db, 'events/');
            onValue(eventsReference, (snapshot) => {
                const data = snapshot.val();
                setEvents(data);

            });
        }
        catch (error) {
            console.error(error);
        }
    }
    let userId=[]
    let sales=[]
    let tickets = []
    let oferta = []

    const consultarSales = async () => {
        userId = currentUser.idUser;
        sales = await readSaleUser(userId);
        sales.map(async (sale) => {
            tickets.push( await readTicketSale(sale.idSale));
        })
        
        
        console.log(sales);
        console.log(tickets);
        console.log(oferta);
    }

    useEffect(() => {
        consultarSales();
    }, []);

    useEffect(() => {
        eventsFirebase();
    }, []);

    // necesito que se posicione al inicio
    useEffect(() => {
        // Desplaza al inicio de la página al cargar el componente
        window.scrollTo(0, 0);
    }, []);


    // const items = acoordion_entradas[0].map((item) => (
    //     <Accordion.Item key={item.value} value={item.value} >
    //         <Accordion.Control icon={item.emoji}  >
    //             {item.value}
    //         </Accordion.Control>
    //         <Accordion.Panel>{item.description}</Accordion.Panel>
    //     </Accordion.Item>
    // ));

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
                                        <Input placeholder="Nombre" disabled='true' value={nameUser} style={{ width: '220px' }} />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="Apellidos" >
                                        <Input placeholder="Apellidos" disabled='true' value={lastNameUser} />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="Correo" >
                                        <Input placeholder="Correo" disabled='true' value={emailUser} />
                                    </Input.Wrapper>
                                </div>
                                <div className='profile_datos_2'>
                                    <Input.Wrapper label="Telefono" >
                                        <Input placeholder="Telefono" disabled={currentUser.phone} value={phoneUser} onChange={handlePhone} onKeyPress={(event) => {
                                            if (!/[0-9]/.test(event.key)) {
                                                event.preventDefault();
                                            }
                                        }}
                                            error={!phoneValid}
                                            style={{ width: '220px' }}
                                        />
                                    </Input.Wrapper>
                                    <Input.Wrapper label="DNI">
                                        <Input placeholder="DNI" disabled={currentUser.DNI !== '00000000' && currentUser.DNI.length == 8} onChange={handleDNI}
                                            onKeyPress={(event) => {
                                                if (!/[0-9]/.test(event.key)) {
                                                    event.preventDefault();
                                                }
                                            }}
                                            error={!dniValid}
                                            value={dniUser}
                                        />
                                    </Input.Wrapper>
                                </div>
                            </div>
                            <Button variant='light' radius='xs' size="md" disabled={!dniValid || !phoneValid} fullWidth style={{ border: '1px solid black' }} onClick={handleSubmitChanges}  >Guardar cambios</Button>
                        </div>
                    )}
                    {activeSection === 'entradas' && (
                        <div className='profile_entradas_container'>
                            <Accordion variant="separated" radius="lg" defaultValue="Seleccion de entradas" >
                                {items}
                            </Accordion>
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