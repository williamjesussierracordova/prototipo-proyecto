import React from 'react';
import { Accordion } from '@mantine/core';
import '@mantine/core/styles.css';
import { IoTicketOutline } from "react-icons/io5";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import { TbDisabled } from "react-icons/tb";
import { TbDeviceMobileCheck } from "react-icons/tb";
import { RiForbid2Line } from "react-icons/ri";

const groceries = [
    {
      emoji: <IoTicketOutline />,
      value: 'Cantidad maxima de entradas por persona',
      description:
      'Se podrán adquirir un máximo de 6 entradas por transacción.',
    },
    {
      emoji: <FaRegFaceGrinBeam />,
      value: 'Politica de menores',
      description:
      'Está prohibido el ingreso a menores de 3 años. Mayores de 3 años abonan ticket. Menores de 14 años deben ingresar acompañados por un adulto.',
    },
    {
      emoji: <TbDisabled />,
      value: 'Movilidad reducida',
      description:
      'El usuario de silla de ruedas y su acompañante abonan el 100% del valor correspondiente al sector de la entrada adquirida. Aplica únicamente para personas en silla de ruedas.',
    },
    {
      emoji: <TbDeviceMobileCheck />,
      value: 'E-Ticket',
      description:
      'Las entradas digitales (E-tickets) no son entradas personalizadas. Es decir, no se pide DNI al ingreso y no necesariamente debe ser el titular de la compra quien la utilice.',
    },
    {
      emoji: <TbDeviceMobileCheck />,
      value: 'Envio de entradas',
      description:
      'La distribución de las entradas se realiza aproximadamente a los 10 días hábiles de realizada la compra.',
    },
    {
      emoji: <RiForbid2Line />,
      value: 'Objetos prohibidos',
      description:
        <ul>
          <li>Está prohibido el ingreso de alimentos y bebidas.</li>
          <li>Está prohibido el ingreso de pirotecnia y elementos que puedan ser utilizados como proyectiles.</li>
          <li>Está prohibido el ingreso de elementos cortantes o punzantes.</li>
          <li>Está prohibido el ingreso de bebidas alcohólicas.</li>
          <li>Está prohibido el ingreso de elementos que puedan ser utilizados como armas.</li>
          <li>Está prohibido el ingreso de elementos que puedan ser utilizados como armas.</li>
        </ul>
    },
  ];

function Demo() {
    // See groceries data above
    const items = groceries.map((item) => (
      <Accordion.Item key={item.value} value={item.value} >
        <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
        <Accordion.Panel>{item.description}</Accordion.Panel>
      </Accordion.Item>
    ));
  
    return (
        <Accordion variant="separated" radius="lg" defaultValue="Apples"  >
          {items}
        </Accordion>
  );
}

export default Demo;