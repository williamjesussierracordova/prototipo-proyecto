import "./pasarela_entrada.css";
import { useLocation } from "react-router-dom";
import mapa from "../assets/mapa.png";
import {  Table } from "@mantine/core";
import { FaSquare } from "react-icons/fa6";
import { Select } from "@mantine/core";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mantine/core";
import { IoTicketOutline } from "react-icons/io5";
import { Accordion } from "@mantine/core";
// import { TextInput } from "@mantine/core";
// import { Form, isInRange, isNotEmpty, useForm } from '@mantine/form';
import { Modal } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import axios from 'axios';
import KRGlue from '@lyracom/embedded-form-glue';
import PaymentForm from './PaymentForm';
import CryptoJS from 'crypto-js';
import { useSelector } from 'react-redux';
import { readOfferDescription } from "../Firebase/offersManage/offersManage";
import { useNavigate } from "react-router-dom";

const precios = [
    {
        id: 1,
        sector: "Platea Preferencial",
        precio_conadis: "288.80",
        precio_regular: "389.00",
        capacidad: "96",
        color: "#E20000",
    },
    {
        id: 2,
        sector: "Platea Baja",
        precio_conadis: "254.40",
        precio_regular: "319.00",
        capacidad: "384",
        color: "#2F00D9",
    },
    {
        id: 3,
        sector: "Platea Baja solo silla de ruedas",
        tipo: "solo silla de ruedas",
        precio_conadis: "210.40",
        precio_regular: "263.00",
        capacidad: "4",
        color: "#FF0000",
    },
    {
        id: 4,
        sector: "Platea Alta",
        precio_conadis: "236.80",
        precio_regular: "296.00",
        capacidad: "233",
        color: "#800080",
    },
    {
        id: 5,
        sector: "Platea Alta solo silla de ruedas",
        tipo: "solo silla de ruedas",
        precio_conadis: "196.00",
        precio_regular: "245.00",
        capacidad: "4",
        color: "#FF0000",
    },
    {
        id: 6,
        sector: "Platea Lateral Der/Izq",
        precio_conadis: "219.20",
        precio_regular: "274.00",
        capacidad: "54",
        color: "#1DE65F",
    },
    {
        id: 7,
        sector: "Palco Platea Der/Izq",
        precio_conadis: "219.20",
        precio_regular: "274.00",
        capacidad: "8",
        color: "#1DE6C3",
    },
    {
        id: 8,
        sector: "Piso 2",
        precio_conadis: "193.60",
        precio_regular: "242.00",
        capacidad: "168",
        color: "#F300B5",
    },
    {
        id: 9,
        sector: "Piso 2 solo silla de ruedas",
        tipo: "solo silla de ruedas",
        precio_conadis: "154.40",
        precio_regular: "193.00",
        capacidad: "2",
        color: "#FF0000",
    },
    {
        id: 10,
        sector: "Piso 2 Lateral Der/Izq",
        precio_conadis: "158.80",
        precio_regular: "197.60",
        capacidad: "42",
        color: "#7C00B5",
    },
    {
        id: 11,
        sector: "Piso 2 Lateral solo silla de ruedas",
        tipo: "solo silla de ruedas",
        precio_conadis: "126.40",
        precio_regular: "158.00",
        capacidad: "2",
        color: "#FF0000",
    },
    {
        id: 12,
        sector: "Piso 2 Palco Der/Izq",
        precio_conadis: "48.00",
        precio_regular: "48.00",
        capacidad: "8",
        color: "#E68FB5",
    },
    {
        id: 13,
        sector: "Piso 3",
        precio_conadis: "122.88",
        precio_regular: "153.60",
        capacidad: "154",
        color: "#11BECC",
    },
    {
        id: 14,
        sector: "Piso 3 Lateral Der/Izq",
        precio_conadis: "48.00",
        precio_regular: "48.00",
        capacidad: "44",
        color: "#1174CC",
    },
    {
        id: 15,
        sector: "Piso 3 Palco 1 Der/Izq",
        precio_conadis: "48.00",
        precio_regular: "48.00",
        capacidad: "8",
        color: "#85AF00",
    },
    {
        id: 16,
        sector: "Piso 3 Palco 2 Der/Izq",
        precio_conadis: "88.00",
        precio_regular: "110.00",
        capacidad: "8",
        color: "#FFC64E",
    },
    {
        id: 17,
        sector: "Piso 4 Central",
        precio_conadis: "79.20",
        precio_regular: "99.00",
        capacidad: "118",
        color: "#FF6600",
    },
    {
        id: 18,
        sector: "Piso 4 Der/Izq",
        precio_conadis: "48.00",
        precio_regular: "48.00",
        capacidad: "60",
        color: "#5A8200",
    },
    {
        id: 19,
        sector: "Piso 4 Lateral Der/Izq",
        precio_conadis: "48.00",
        precio_regular: "48.00",
        capacidad: "20",
        color: "#864A00",
    },
];

const Pasarela_Entrada = () => {
    const location = useLocation();
    const { card } = location.state;
    const { currentUser } = useSelector(state => state.user);
    const [sector, setSector] = useState(null);
    const [tipoEntrada, setTipoEntrada] = useState(null);
    const [precio, setPrecio] = useState(null);
    const [cantidad, setCantidad] = useState(null);
    const [entradas, setEntradas] = useState([]);
    // const [property, setProperty] = useState([]);
    // const [nextProperty, setNextProperty] = useState(null);
    const [opened, { open, close }] = useDisclosure(false);
    const [isShow, setIsShow] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [amount, setAmount] = useState("");
    const [error, setError] = useState("");
    const navigator = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    useEffect(() => {
        setTipoEntrada(null);
        setPrecio(null);
        setCantidad(null);
    }, [sector]);

    useEffect(() => {
        setPrecio(null);
        setCantidad(null);
    }, [tipoEntrada]);

    useEffect(() => {
        setCantidad(null);
    }, [precio]);

    const publicKey = '44749292:testpublickey_apD4sxLwpcp7c4bDLabbYwPLpRyI5CwAhsDKtCUQu1v9O';
    const endPoint = 'https://api.micuentaweb.pe';
    const server = "http://localhost:3003";

    const payment = (amount) => {
        const ExpRegSoloNumeros = "^[0-9]+(\\.[0-9]{1,2})?$";
        if (amount.match(ExpRegSoloNumeros) != null) {
            getFormToken(amount, publicKey, endPoint);
            setIsShow(true);
        } else {
            setIsValid(false);
            setTimeout(() => setIsValid(true), 3000);
        }
    };

    const getFormToken = (monto, publicKey, domain) => {
        const dataPayment = {
            amount: parseInt(monto) * 100,
            currency: "PEN",
            customer: {
                email: "example@gmail.com"
            },
            orderId: "pedido-0"
        };

        axios.post(`${server}/api/createPayment`, dataPayment)
            .then(({ data }) => {
                if (!data.formToken) {
                    throw new Error("Form Token no recibido");
                }
                console.log("Form Token recibido:", data.formToken);

                return KRGlue.loadLibrary(domain, publicKey)
                    .then(({ KR }) => KR.setFormConfig({
                        formToken: data.formToken,
                    }))
                    .then(({ KR }) => KR.onSubmit(validatePayment))
                    .then(({ KR }) => KR.attachForm("#form"))
                    .then(({ KR, result }) => KR.showForm(result.formId));
            })
            .catch(err => {
                console.error("Error en el proceso de obtención del formToken o en el proceso de carga del formulario:", err);
                setError(err.message || "Error desconocido");
            });
    };

    const validatePayment = (resp) => {
        // Calcula el hash de los datos relevantes
        const dataToHash = {
            shopId: resp.shopId,
            orderCycle: resp.orderCycle,
            orderStatus: resp.orderStatus,
            orderDetails: resp.orderDetails,
            customer: resp.customer,
            transactions: resp.transactions
        };
        const hash = CryptoJS.HmacSHA256(JSON.stringify(dataToHash), 'Gq3snkXEnxABXNKrnqRFqWU17AERYJgU8hSGTvoWnJHlh').toString();
    
        // Agrega el hash a los datos
        const dataToSend = {
            ...resp,
            hash: hash
        };
    
        axios.post(`${server}/validatePayment`, dataToSend)
            .then(({ data }) => {
                if (data === "Valid Payment") {
                    setIsShow(false);
                    alert("Pago Satisfactorio");
                    // redirigir a la página de éxito
                    navigator("/profile")
                } else {
                    alert("Pago Inválido");
                }
            })
            .catch(err => {
                console.error("Error en la validación del pago:", err);
                alert("Error en la validación del pago");
            });
        return false;
    };


    const rows = precios.map((element) => (
        <Table.Tr key={element} style={{ color: "white" }}>
            <Table.Td>
                {" "}
                <FaSquare style={{ color: element.color }} /> {element.sector}
            </Table.Td>
            <Table.Td>{element.precio_conadis}</Table.Td>
            <Table.Td>{element.precio_regular}</Table.Td>
            <Table.Td>{element.capacidad}</Table.Td>
        </Table.Tr>
    ));

   

    const agregarEntrada = () => {
        const existingEntrada = entradas.find(
            (entrada) =>
                entrada.sector === sector && entrada.tipoEntrada === tipoEntrada
        );

        const cantidadInt = parseInt(cantidad);
        const totalEntradasActuales = entradas.reduce(
            (acc, entrada) => acc + parseInt(entrada.cantidad),
            0
        );
        const nuevaCantidadTotal = totalEntradasActuales + cantidadInt;

        if (nuevaCantidadTotal <= 6) {
            if (existingEntrada) {
                existingEntrada.cantidad =
                    parseInt(existingEntrada.cantidad) + cantidadInt;
                setEntradas([...entradas]);
            } else {
                setEntradas([
                    ...entradas,
                    { sector, tipoEntrada, precio, cantidad: cantidadInt },
                ]);
            }
        } else {
            // Manejar el caso donde la cantidad total excede el máximo permitido
            console.log("No se pueden agregar más de 6 entradas en total.");
        }
    };

    const calcularMonto = () => {
        const nuevoMonto = entradas.reduce((acc, entrada) => acc + entrada.precio * entrada.cantidad, 0);
        setAmount(nuevoMonto.toString());
        return nuevoMonto.toString(); // Devolver el nuevo monto
    };
    
    const operacionesPagar = () => {
        const nuevoMonto = calcularMonto();
        console.log("Botón clickeado");
    
        setTimeout(() => {
            console.log("Monto calculado: ", nuevoMonto); // Usar el nuevo monto directamente
            open();
            console.log("Después de open");
            payment(nuevoMonto); // Pasar el nuevo monto a payment
            console.log("Después de payment");
        }, 3000);
    };


   // Setear la informacion para guardar el recibo

   //necesito coger la informacion de las entradas y guardarlas en un array

   const recorrerEntradas = () => {
         let entradasArray = [];
            entradas.map((entrada) => {
                if (entrada.cantidad >1){
                    for (let i = 0; i < entrada.cantidad; i++) {
                        entradasArray.push({
                            sector: entrada.sector,
                            tipoEntrada: entrada.tipoEntrada,
                            precio: entrada.precio,
                            cantidad: 1,
                        });
                    }
                } else if (entrada.cantidad === 1){
                    entradasArray.push({
                        sector: entrada.sector,
                        tipoEntrada: entrada.tipoEntrada,
                        precio: entrada.precio,
                        cantidad: entrada.cantidad,
                    });
                }
                }
                
            )
            return entradasArray;
        };
            
    // guardar en la base de datos

    const guardarRecibo = async () => {
        let idEvent = card.Id;
        let idUser = currentUser.idUser;
        let entradas = recorrerEntradas();
        for (let entrada of entradas) {
            let oferta = await readOfferDescription(entrada.sector);
            let idOferta = oferta.idOffer;
            
        }
    }

    useEffect(() => {
        guardarRecibo();
    }, [entradas]);

    const accordion_pasarela = [
        {
            emoji: <IoTicketOutline />,
            value: "Seleccion de entradas",
            description: (
                <div className="accordion_pasarela_seleccion_entrada">
                    <div className="pasarela_seleccion_entrada">
                        <Select
                            style={{ width: "250px" }}
                            checkIconPosition="right"
                            placeholder="Sector"
                            data={precios.map((element) => element.sector)}
                            value={sector}
                            onChange={setSector}
                        />
                        <Select
                            style={{ width: "250px" }}
                            checkIconPosition="right"
                            placeholder="Tipo de entrada"
                            value={tipoEntrada}
                            data={["Conadis", "Regular"]}
                            onChange={setTipoEntrada}
                            disabled={!sector}
                            allowDeselect={false}
                        />

                        <Select
                            style={{ width: "250px" }}
                            checkIconPosition="right"
                            placeholder="Precio"
                            data={
                                sector && tipoEntrada
                                    ? precios
                                        .filter((p) => p.sector === sector)
                                        .map((p) => ({
                                            value:
                                                tipoEntrada === "Conadis"
                                                    ? p.precio_conadis
                                                    : p.precio_regular,
                                            label:
                                                tipoEntrada === "Conadis"
                                                    ? `S/. ${p.precio_conadis}`
                                                    : `S/. ${p.precio_regular}`,
                                        }))
                                    : []
                            }
                            value={precio}
                            onChange={setPrecio}
                            disabled={!tipoEntrada}
                            allowDeselect={false}
                        />

                        <Select
                            style={{ width: "250px" }}
                            checkIconPosition="right"
                            placeholder="Cantidad"
                            data={["1", "2", "3", "4"]}
                            value={cantidad}
                            onChange={setCantidad}
                            disabled={!precio}
                            allowDeselect={false}
                        />
                        <Button
                            variant="filled"
                            color="red"
                            size="md"
                            radius="lg"
                            disabled={!sector || !tipoEntrada || !precio || !cantidad}
                            onClick={agregarEntrada}
                        >
                            Agregar
                        </Button>
                    </div>
                    <div className="pasarela_resumen">
                        <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
                            Resumen de entradas{" "}
                        </h2>
                        <div className="pasarela_resument_tabla">
                            <Table striped withRowBorders={true}>
                                <Table.Thead style={{ color: "black" }}>
                                    
                                </Table.Thead>
                                <Table.Tbody>
                                    {entradas.map((entrada, index) => (
                                        <Table.Tr key={index}>
                                            <Table.Td style={{ textWrap: 'pretty', fontSize: '12px' }}>{entrada.sector}</Table.Td>
                                            {/* necesito abreviar el tipo de entrada a 3 letras */}
                                            <Table.Td style={{ fontSize: '12px' }}>{entrada.tipoEntrada.slice(0, 3)}.</Table.Td>
                                            <Table.Td style={{ textWrap: 'nowrap', fontSize: '12px' }}>
                                                S/{entrada.precio}
                                            </Table.Td>
                                            <Table.Td style={{ fontSize: '12px' }}>{entrada.cantidad}</Table.Td>
                                            <Table.Td>
                                                <Button
                                                    variant="transparent"
                                                    color="red"
                                                    onClick={() =>
                                                        setEntradas(entradas.filter((_, i) => i !== index))
                                                    }
                                                    style={{ fontSize: '12px' }}
                                                >
                                                    eliminar
                                                </Button>
                                            </Table.Td>
                                        </Table.Tr>
                                    ))}
                                </Table.Tbody>
                                <Table.Tfoot>
                                    <Table.Tr>
                                        <Table.Td
                                            colSpan={3}
                                            style={{ fontWeight: "bold", fontSize: "20px" }}
                                        >
                                            Total
                                        </Table.Td>
                                        <Table.Td
                                            colSpan={5}
                                            style={{ fontWeight: "bold", fontSize: "20px" }}
                                        >
                                            S/.{" "}
                                            {entradas
                                                .reduce(
                                                    (acc, entrada) =>
                                                        acc + entrada.precio * entrada.cantidad,
                                                    0
                                                )
                                                .toFixed(2)}
                                        </Table.Td>
                                    </Table.Tr>
                                </Table.Tfoot>
                            </Table>
                        </div>
                        <div className="pasarela_resumen_botones">
                            <Button
                                variant="filled"
                                color="red"
                                size="md"
                                radius="lg"
                                style={{ margin: "1rem" }}
                                disabled={entradas.length === 0}
                                onClick={operacionesPagar}
                            >
                                Pagar
                            </Button>
                        </div>
                        <Modal
                        opened={opened}
                        onClose={close}
                        title="Pasarela de pago"
                        yOffset="120px"
                        >
                        {currentUser != null ? (
                        <>
                        {!isValid && (
                        <h3 className="mensaje_error">Por favor, ingrese un monto válido</h3>
                        )}
                        {isShow && (
                        <div className="center-container">
                            <div id="myDIV" className="formulario" style={{ display: isShow ? "block" : "none" }}>
                                <div id="form">
                                    <PaymentForm />
                                </div>
                            </div>
                        </div>
                        )}
                        </>
                        ) : (
                        <h1>Inicie sesión para poder comprar</h1>
                        )}
                        </Modal>

                    </div>
                </div>
            ),
        },
    ];
    // const accordion_pasarela2 = [
    //     {
    //         emoji: <IoTicketOutline />,
    //         value: "Ingresar datos de las entradas",
    //         description: (
    //             <div className="accordion_pasarela_datos_entrada">
    //                 {/* necesito tener tantos formularios como la variable numeroEntradas */}
    //                 {Array.from({ length: numeroEntradas }).map((_, index) => (
    //                     <form key={index}>
    //                         <div className="formulario_entradas">
    //                             <div className="datos_entrada">
    //                                 <h2
    //                                     style={{
    //                                         fontSize: "20px",
    //                                         fontWeight: "700",
    //                                         margin: "1rem 2rem",
    //                                     }}
    //                                 >
    //                                     Datos de la entrada {index + 1}
    //                                 </h2>
    //                                 <div className="datos_entrada_formulario">
    //                                     <h1>Sector:</h1>
    //                                     <h1>Tipo:</h1>
    //                                 </div>
    //                             </div>
    //                             <div className="de_formulario"></div>
    //                         </div>
    //                     </form>
    //                 ))}
    //                 {/* <div className='datos_entrada_form'>
    //                 <h2 style={{fontSize:'20px', fontWeight:'700',margin:'1rem 2rem'}}>Datos de la entrada 1</h2>
    //                 <div className="datos_entrada_formulario">
    //                     <div className="datos_entrada_formulario_input">
    //                         <label htmlFor="nombre">Nombre</label>
    //                         <input type="text" id="nombre" name="nombre" />
    //                         <label htmlFor="apellido">Apellido</label>
    //                         <input type="text" id="apellido" name="apellido" />
    //                         <label htmlFor="dni">DNI</label>
    //                         <input type="text" id="dni" name="dni" />
    //                     </div>
    //                 </div>
    //             </div> */}
    //             </div>
    //         ),
    //     },
    // ];

    const items = accordion_pasarela.map((item) => (
        <Accordion.Item key={item.value} value={item.value} >
            <Accordion.Control icon={item.emoji}  >
                {item.value}
            </Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));


    return (
        <div>
            <div className="top_pasarela">
                <div className="top_pasarela_img">
                    <img src={card.image_pasarela} alt="imagen" />
                </div>
                <div className="top_pasarela_info">
                    <h2 style={{ fontSize: "20px", fontWeight: "700", margin: "9px 0" }}>
                        {card.artist} - {card.title}
                    </h2>
                    <h3 style={{ fontWeight: "500", textWrap: "wrap", margin: "9px 0" }}>
                        {card.badge} / {card.start} hs
                    </h3>
                    <h3 style={{ fontWeight: "500", textWrap: "wrap", margin: "9px 0" }}>
                        Gran Teatro Nacional del Perú
                    </h3>
                </div>
            </div>
            <div className="pasarela_mapa_precios">
                <div className="pasarela_mapa">
                    <img src={mapa} alt="mapa" />
                </div>
                <div className="pasarela_precios">
                    <Table withTableBorder withColumnBorders>
                        <Table.Thead style={{ color: "white" }}>
                            <Table.Tr>
                                <Table.Th
                                    style={{
                                        alignItems: "center",
                                        justifyContent: "center",
                                        display: "flex",
                                    }}
                                >
                                    Sector
                                </Table.Th>
                                <Table.Th>Conadis</Table.Th>
                                <Table.Th>Regular</Table.Th>
                                <Table.Th>Cap.</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                </div>
            </div>
            <h2 style={{ fontSize: "20px", fontWeight: "700", margin: "1rem 2rem" }}>
                Selecciona tus entradas
            </h2>
            
            <div className="accordion_pasarela">
                <Accordion variant="separated" radius="lg" defaultValue="Seleccion de entradas" >
                    {items}
                </Accordion>
            </div>
        </div>
    );
};

export default Pasarela_Entrada;
