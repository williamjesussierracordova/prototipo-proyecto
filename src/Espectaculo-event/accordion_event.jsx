import React from 'react';
import { Accordion, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { FaCarAlt } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import  {RiVisaFill}  from "react-icons/ri";
import  {FaCcMastercard}  from "react-icons/fa";
import {SiAmericanexpress}  from "react-icons/si";

const event = [
    {
      emoji: <BsCreditCardFill />,
      value: 'Metodos de pago',
      description:
         'Se puede pagar con :',
    },
    {
      emoji: <FaCarAlt />,
      value: 'Estacionamiento',
      description:
      'Tenemos espacios para estacionar tu auto, moto o bicicleta totalmente gratis (Entrada posterior: Calle El Comercio S/N Puerta 6). Aforo limitado.',
    },
  ];

  
function accordion_event() {
    // See event data above
    const items = event.map((item) => (
      <Accordion.Item key={item.value} value={item.value} >
        <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
        {item.value === 'Metodos de pago' ?
            <Accordion.Panel > {item.description}<Text size='50px' > <RiVisaFill /> <FaCcMastercard/>  <SiAmericanexpress/> </Text> </Accordion.Panel>
            : 
            item.value === 'Estacionamiento' ?
            <Accordion.Panel>{item.description}</Accordion.Panel>
            :
            null
        }
      </Accordion.Item>
    ));
  
    return (
        <Accordion variant="separated" radius="lg" defaultValue="Apples" >
          {items}
        </Accordion>
  );
}

export default accordion_event;