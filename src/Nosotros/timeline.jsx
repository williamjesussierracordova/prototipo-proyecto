import React from "react";
import { Chrono } from "react-chrono";

const info  = [
    {
        title: '2007',
        cardTitle: 'Inauguración',
        cardDetailedText: 'Se creó el Patronato del Teatro Nacional - un grupo de benefactores privados que buscaban promover la creación de un recinto moderno y con el mayor nivel tecnológico para las artes escénicas de nuestro país-, con la finalidad de apoyar en las obras civiles iniciales, licencias de obra y gastos de preinversión del proyecto.',
    },
    {
        title:'2010',
        cardTitle: 'Construcción',
        cardDetailedText:'Se propuso el Proyecto de Inversión Pública Nº 150803-2010. Este mismo año, en un importante esfuerzo conjunto entre el gobierno y el Patronato del Teatro Nacional, se inició la obra en el mes de julio. El arquitecto peruano Alfonso de la Piedra fue el encargado de dirigir el proyecto para la construcción de la infraestructura general y el arquitecto brasileño José Nepomuceno fue el encargado de la estructura acústica y la mecánica teatral.'
    },
    {
        title:'2011',
        cardTitle: 'Finalización',
        cardDetailedText:'El 22 de julio de 2011 se llevó a cabo el acto inaugural del Gran Teatro Nacional, encabezado por el presidente de la República, Alan García Pérez, y el primer ministro de Cultura, Juan Ossio Acuña. El concierto se inició con la presentación del Himno Nacional, luego el arpista ayacuchano Otoniel Ccayanchira interpretó el tema "Valicha", junto a la Orquesta Sinfónica Nacional, bajo la dirección del maestro Miguel Harth-Bedoya. En la ceremonia también estuvieron en escena la destacada soprano canadiense Erin Wall y el bajo-barítono italiano Ruggero Raimondi.'
    },
    {
        title:'2012',
        cardTitle: 'Inauguración',
        cardDetailedText:'El 22 de julio de 2011 se llevó a cabo el acto inaugural del Gran Teatro Nacional, encabezado por el presidente de la República, Alan García Pérez, y el primer ministro de Cultura, Juan Ossio Acuña. El concierto se inició con la presentación del Himno Nacional, luego el arpista ayacuchano Otoniel Ccayanchira interpretó el tema "Valicha", junto a la Orquesta Sinfónica Nacional, bajo la dirección del maestro Miguel Harth-Bedoya. En la ceremonia también estuvieron en escena la destacada soprano canadiense Erin Wall y el bajo-barítono italiano Ruggero Raimondi.'
    }
]

const timeline = () => {
    return (
        <div className="timeline section__padding">
            <h1>Historia del Gran Teatro Nacional</h1>
            <Chrono items={info} mode="VERTICAL_ALTERNATING" 
            theme={{
                primary: 'black',
                secondary: 'white',
                cardBgColor: 'white',
                titleColor: 'black',
                titleColorActive: 'red',
            }}
            disableToolbar="true" scrollable  focusActiveItemOnLoad="true" />
        </div>
    );
}

export default timeline;