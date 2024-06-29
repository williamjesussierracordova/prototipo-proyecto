import React, { useEffect, useState } from "react";
import './novedades_page.css';
import { Card, Image, Text } from '@mantine/core';
import clancy from '../assets/clancy_tour.jpg';
import cuco_tour from '../assets/cuco_tour.jpg';
import { Badge, Group } from '@mantine/core';
import { usePagination } from "@mantine/hooks";
import { Pagination } from "@mantine/core";
import tyler_piano from '../assets/tyler_piano.jpg';
import top_pasrela from '../assets/top_pasarela.jpg';
import nbhd_pasarela from '../assets/nbhd_pasarela.jpg';
import artic_slider from '../assets/artic_slider.avif';
import joji_pasarela from '../assets/joji_pasarela.jpg';
import { useNavigate } from 'react-router-dom';

const cards = [
    {
        id: 1,
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '03 Feb 2025',
        information:'Cuco, cuyo nombre real es Omar Banos, es un artista chicano emergente que ha capturado corazones con su estilo único que fusiona indie pop, psicodelia y dream pop, acompañado de letras bilingües que reflejan su herencia cultural. Nacido en 1998 en Hawthorne, California, Cuco comenzó a ganar notoriedad en 2017 con su sencillo "Lo Que Siento", una balada melancólica que rápidamente se volvió viral en plataformas de streaming. Su música es una mezcla de sonidos lo-fi, sintetizadores suaves y una voz dulce y melódica que transmite una sensación de nostalgia y sinceridad. Cuco ha sabido conectar profundamente con su audiencia, especialmente entre los jóvenes latinos en Estados Unidos, abordando temas de amor, desamor y la búsqueda de identidad. Su álbum debut "Para Mi" (2019) fue muy bien recibido, consolidándolo como una figura prominente en la música indie. Además de su talento musical, Cuco también es conocido por su estilo DIY y su autenticidad, lo que le ha permitido mantener una conexión genuina con sus fans.'
    },
    {
        id: 2,
        Image: top_pasrela,
        title: 'Musica',
        description: 'TOP 2025',
        badge: '04 Feb 2025',
        information:'Twenty One Pilots es un dúo musical estadounidense compuesto por Tyler Joseph y Josh Dun, que ha redefinido los límites de la música alternativa con su innovador enfoque y estilo ecléctico. Formados en 2009 en Columbus, Ohio, la banda ganó reconocimiento global con su álbum "Blurryface" en 2015, que incluyó éxitos como "Stressed Out" y "Ride". Este álbum, que explora temas profundos como la ansiedad, la depresión y el auto-descubrimiento, resonó enormemente con una audiencia joven que encontró consuelo y comprensión en sus letras sinceras y vulnerables. El dúo es conocido por sus energéticas actuaciones en vivo, que a menudo incluyen acrobacias impresionantes y una interacción cercana con el público. Su habilidad para fusionar géneros tan diversos como el hip hop, rock alternativo, pop y música electrónica ha hecho que su sonido sea único y reconocible al instante. Con una estética distintiva y una dedicación a abordar temas serios con autenticidad, Twenty One Pilots se ha consolidado como una voz significativa en la música moderna.'
    },
    {
        id: 3,
        Image: nbhd_pasarela,
        title: 'Musica',
        description: 'Un ultimo concierto',
        badge: '05 Feb 2025',
        information:'The Neighbourhood es una banda de rock alternativo formada en 2011 en Newbury Park, California, que ha capturado la atención de la audiencia con su distintivo sonido que combina elementos de rock, indie y R&B. Su primer sencillo, "Sweater Weather", lanzado en 2012, se convirtió en un éxito viral, catapultando a la banda al reconocimiento internacional y consolidando su lugar en la escena musical alternativa. La banda, compuesta por Jesse Rutherford (vocalista), Jeremy Freedman (guitarrista), Zach Abels (guitarrista), Mikey Margott (bajista) y Brandon Fried (baterista), es conocida por su estética en blanco y negro, tanto en su música como en sus videos y presentaciones. Su álbum debut "I Love You" (2013) recibió elogios por su cohesión sonora y lirismo introspectivo, que a menudo explora temas de amor, desamor y la lucha personal. Con el tiempo, The Neighbourhood ha continuado evolucionando su sonido, incorporando más elementos de pop y electrónica, demostrando su capacidad para crecer y adaptarse en un panorama musical en constante cambio.'
    },
    {
        id: 4,
        Image: artic_slider,
        title: 'Musica',
        description: 'Artic Monkeys - The car',
        badge: '06 Feb 2025',
        information: 'Arctic Monkeys es una banda británica de rock formada en 2002 en Sheffield, Inglaterra, que ha sido aclamada por su lirismo agudo, sonido innovador y la capacidad de reinventarse continuamente. Liderada por Alex Turner, la banda alcanzó la fama con su álbum debut "Whatever People Say I Am, That`s What I`m Not" (2006), que se convirtió en el álbum debut más vendido en la historia del Reino Unido. Con canciones icónicas como "I Bet You Look Good on the Dancefloor" y "When the Sun Goes Down", el álbum capturó la energía y el espíritu de la vida nocturna británica. A lo largo de los años, Arctic Monkeys ha experimentado con diferentes estilos musicales, desde el garage rock y el punk en sus inicios hasta un sonido más refinado y psicodélico en "AM" (2013) y el atmosférico "Tranquility Base Hotel & Casino" (2018). Este constante cambio y evolución han mantenido a la banda relevante y fresca en la escena musical global. Su habilidad para combinar letras ingeniosas y narrativas complejas con música pegajosa y electrizante ha asegurado su lugar como una de las bandas más influyentes de su generación.',
    },
    {
        id: 5,
        Image: joji_pasarela,
        title: 'Musica',
        description: 'Filthy Frank - Joji',
        badge: '03 Feb 2025',
        information:'Joji, nacido George Miller, es un artista multifacético que ha tenido una trayectoria única en la industria del entretenimiento. Comenzó su carrera en la comedia y como creador de contenido en YouTube, donde ganó fama con personajes como Filthy Frank y Pink Guy. Sin embargo, en 2017, Miller decidió alejarse de la comedia y centrarse en su pasión por la música, adoptando el nombre artístico de Joji. Su música es una combinación de R&B, trip hop y lo-fi, caracterizada por su tono melancólico y letras introspectivas. El álbum debut de Joji, "Ballads 1" (2018), alcanzó el número uno en la lista de álbumes de R&B de Billboard, impulsado por el éxito de sencillos como "Slow Dancing in the Dark" y "Yeah Right". Joji ha logrado diferenciarse por su habilidad para transmitir emociones profundas a través de su música, explorando temas de amor, pérdida y auto-reflexión. Su segundo álbum, "Nectar" (2020), continuó demostrando su crecimiento artístico y su capacidad para crear una conexión emocional con su audiencia.',
    },
    {
        id: 1,
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '03 Feb 2025',
        information:'Cuco, cuyo nombre real es Omar Banos, es un artista chicano emergente que ha capturado corazones con su estilo único que fusiona indie pop, psicodelia y dream pop, acompañado de letras bilingües que reflejan su herencia cultural. Nacido en 1998 en Hawthorne, California, Cuco comenzó a ganar notoriedad en 2017 con su sencillo "Lo Que Siento", una balada melancólica que rápidamente se volvió viral en plataformas de streaming. Su música es una mezcla de sonidos lo-fi, sintetizadores suaves y una voz dulce y melódica que transmite una sensación de nostalgia y sinceridad. Cuco ha sabido conectar profundamente con su audiencia, especialmente entre los jóvenes latinos en Estados Unidos, abordando temas de amor, desamor y la búsqueda de identidad. Su álbum debut "Para Mi" (2019) fue muy bien recibido, consolidándolo como una figura prominente en la música indie. Además de su talento musical, Cuco también es conocido por su estilo DIY y su autenticidad, lo que le ha permitido mantener una conexión genuina con sus fans.'
    },
    {
        id: 2,
        Image: top_pasrela,
        title: 'Musica',
        description: 'TOP 2025',
        badge: '04 Feb 2025',
        information:'Twenty One Pilots es un dúo musical estadounidense compuesto por Tyler Joseph y Josh Dun, que ha redefinido los límites de la música alternativa con su innovador enfoque y estilo ecléctico. Formados en 2009 en Columbus, Ohio, la banda ganó reconocimiento global con su álbum "Blurryface" en 2015, que incluyó éxitos como "Stressed Out" y "Ride". Este álbum, que explora temas profundos como la ansiedad, la depresión y el auto-descubrimiento, resonó enormemente con una audiencia joven que encontró consuelo y comprensión en sus letras sinceras y vulnerables. El dúo es conocido por sus energéticas actuaciones en vivo, que a menudo incluyen acrobacias impresionantes y una interacción cercana con el público. Su habilidad para fusionar géneros tan diversos como el hip hop, rock alternativo, pop y música electrónica ha hecho que su sonido sea único y reconocible al instante. Con una estética distintiva y una dedicación a abordar temas serios con autenticidad, Twenty One Pilots se ha consolidado como una voz significativa en la música moderna.'
    },
    {
        id: 3,
        Image: nbhd_pasarela,
        title: 'Musica',
        description: 'Un ultimo concierto',
        badge: '05 Feb 2025',
        information:'The Neighbourhood es una banda de rock alternativo formada en 2011 en Newbury Park, California, que ha capturado la atención de la audiencia con su distintivo sonido que combina elementos de rock, indie y R&B. Su primer sencillo, "Sweater Weather", lanzado en 2012, se convirtió en un éxito viral, catapultando a la banda al reconocimiento internacional y consolidando su lugar en la escena musical alternativa. La banda, compuesta por Jesse Rutherford (vocalista), Jeremy Freedman (guitarrista), Zach Abels (guitarrista), Mikey Margott (bajista) y Brandon Fried (baterista), es conocida por su estética en blanco y negro, tanto en su música como en sus videos y presentaciones. Su álbum debut "I Love You" (2013) recibió elogios por su cohesión sonora y lirismo introspectivo, que a menudo explora temas de amor, desamor y la lucha personal. Con el tiempo, The Neighbourhood ha continuado evolucionando su sonido, incorporando más elementos de pop y electrónica, demostrando su capacidad para crecer y adaptarse en un panorama musical en constante cambio.'
    },
    {
        id: 4,
        Image: artic_slider,
        title: 'Musica',
        description: 'Artic Monkeys - The car',
        badge: '06 Feb 2025',
        information: 'Arctic Monkeys es una banda británica de rock formada en 2002 en Sheffield, Inglaterra, que ha sido aclamada por su lirismo agudo, sonido innovador y la capacidad de reinventarse continuamente. Liderada por Alex Turner, la banda alcanzó la fama con su álbum debut "Whatever People Say I Am, That`s What I`m Not" (2006), que se convirtió en el álbum debut más vendido en la historia del Reino Unido. Con canciones icónicas como "I Bet You Look Good on the Dancefloor" y "When the Sun Goes Down", el álbum capturó la energía y el espíritu de la vida nocturna británica. A lo largo de los años, Arctic Monkeys ha experimentado con diferentes estilos musicales, desde el garage rock y el punk en sus inicios hasta un sonido más refinado y psicodélico en "AM" (2013) y el atmosférico "Tranquility Base Hotel & Casino" (2018). Este constante cambio y evolución han mantenido a la banda relevante y fresca en la escena musical global. Su habilidad para combinar letras ingeniosas y narrativas complejas con música pegajosa y electrizante ha asegurado su lugar como una de las bandas más influyentes de su generación.',
    },
    {
        id: 5,
        Image: joji_pasarela,
        title: 'Musica',
        description: 'Filthy Frank - Joji',
        badge: '03 Feb 2025',
        information:'Joji, nacido George Miller, es un artista multifacético que ha tenido una trayectoria única en la industria del entretenimiento. Comenzó su carrera en la comedia y como creador de contenido en YouTube, donde ganó fama con personajes como Filthy Frank y Pink Guy. Sin embargo, en 2017, Miller decidió alejarse de la comedia y centrarse en su pasión por la música, adoptando el nombre artístico de Joji. Su música es una combinación de R&B, trip hop y lo-fi, caracterizada por su tono melancólico y letras introspectivas. El álbum debut de Joji, "Ballads 1" (2018), alcanzó el número uno en la lista de álbumes de R&B de Billboard, impulsado por el éxito de sencillos como "Slow Dancing in the Dark" y "Yeah Right". Joji ha logrado diferenciarse por su habilidad para transmitir emociones profundas a través de su música, explorando temas de amor, pérdida y auto-reflexión. Su segundo álbum, "Nectar" (2020), continuó demostrando su crecimiento artístico y su capacidad para crear una conexión emocional con su audiencia.',
    },
    {
        id: 1,
        Image: cuco_tour,
        title: 'Musica',
        description: 'Cuco en Lima por primera vez',
        badge: '03 Feb 2025',
        information:'Cuco, cuyo nombre real es Omar Banos, es un artista chicano emergente que ha capturado corazones con su estilo único que fusiona indie pop, psicodelia y dream pop, acompañado de letras bilingües que reflejan su herencia cultural. Nacido en 1998 en Hawthorne, California, Cuco comenzó a ganar notoriedad en 2017 con su sencillo "Lo Que Siento", una balada melancólica que rápidamente se volvió viral en plataformas de streaming. Su música es una mezcla de sonidos lo-fi, sintetizadores suaves y una voz dulce y melódica que transmite una sensación de nostalgia y sinceridad. Cuco ha sabido conectar profundamente con su audiencia, especialmente entre los jóvenes latinos en Estados Unidos, abordando temas de amor, desamor y la búsqueda de identidad. Su álbum debut "Para Mi" (2019) fue muy bien recibido, consolidándolo como una figura prominente en la música indie. Además de su talento musical, Cuco también es conocido por su estilo DIY y su autenticidad, lo que le ha permitido mantener una conexión genuina con sus fans.'
    },
    {
        id: 2,
        Image: top_pasrela,
        title: 'Musica',
        description: 'TOP 2025',
        badge: '04 Feb 2025',
        information:'Twenty One Pilots es un dúo musical estadounidense compuesto por Tyler Joseph y Josh Dun, que ha redefinido los límites de la música alternativa con su innovador enfoque y estilo ecléctico. Formados en 2009 en Columbus, Ohio, la banda ganó reconocimiento global con su álbum "Blurryface" en 2015, que incluyó éxitos como "Stressed Out" y "Ride". Este álbum, que explora temas profundos como la ansiedad, la depresión y el auto-descubrimiento, resonó enormemente con una audiencia joven que encontró consuelo y comprensión en sus letras sinceras y vulnerables. El dúo es conocido por sus energéticas actuaciones en vivo, que a menudo incluyen acrobacias impresionantes y una interacción cercana con el público. Su habilidad para fusionar géneros tan diversos como el hip hop, rock alternativo, pop y música electrónica ha hecho que su sonido sea único y reconocible al instante. Con una estética distintiva y una dedicación a abordar temas serios con autenticidad, Twenty One Pilots se ha consolidado como una voz significativa en la música moderna.'
    },
    {
        id: 3,
        Image: nbhd_pasarela,
        title: 'Musica',
        description: 'Un ultimo concierto',
        badge: '05 Feb 2025',
        information:'The Neighbourhood es una banda de rock alternativo formada en 2011 en Newbury Park, California, que ha capturado la atención de la audiencia con su distintivo sonido que combina elementos de rock, indie y R&B. Su primer sencillo, "Sweater Weather", lanzado en 2012, se convirtió en un éxito viral, catapultando a la banda al reconocimiento internacional y consolidando su lugar en la escena musical alternativa. La banda, compuesta por Jesse Rutherford (vocalista), Jeremy Freedman (guitarrista), Zach Abels (guitarrista), Mikey Margott (bajista) y Brandon Fried (baterista), es conocida por su estética en blanco y negro, tanto en su música como en sus videos y presentaciones. Su álbum debut "I Love You" (2013) recibió elogios por su cohesión sonora y lirismo introspectivo, que a menudo explora temas de amor, desamor y la lucha personal. Con el tiempo, The Neighbourhood ha continuado evolucionando su sonido, incorporando más elementos de pop y electrónica, demostrando su capacidad para crecer y adaptarse en un panorama musical en constante cambio.'
    },
    {
        id: 4,
        Image: artic_slider,
        title: 'Musica',
        description: 'Artic Monkeys - The car',
        badge: '06 Feb 2025',
        information: 'Arctic Monkeys es una banda británica de rock formada en 2002 en Sheffield, Inglaterra, que ha sido aclamada por su lirismo agudo, sonido innovador y la capacidad de reinventarse continuamente. Liderada por Alex Turner, la banda alcanzó la fama con su álbum debut "Whatever People Say I Am, That`s What I`m Not" (2006), que se convirtió en el álbum debut más vendido en la historia del Reino Unido. Con canciones icónicas como "I Bet You Look Good on the Dancefloor" y "When the Sun Goes Down", el álbum capturó la energía y el espíritu de la vida nocturna británica. A lo largo de los años, Arctic Monkeys ha experimentado con diferentes estilos musicales, desde el garage rock y el punk en sus inicios hasta un sonido más refinado y psicodélico en "AM" (2013) y el atmosférico "Tranquility Base Hotel & Casino" (2018). Este constante cambio y evolución han mantenido a la banda relevante y fresca en la escena musical global. Su habilidad para combinar letras ingeniosas y narrativas complejas con música pegajosa y electrizante ha asegurado su lugar como una de las bandas más influyentes de su generación.',
    },
    {
        id: 5,
        Image: joji_pasarela,
        title: 'Musica',
        description: 'Filthy Frank - Joji',
        badge: '03 Feb 2025',
        information:'Joji, nacido George Miller, es un artista multifacético que ha tenido una trayectoria única en la industria del entretenimiento. Comenzó su carrera en la comedia y como creador de contenido en YouTube, donde ganó fama con personajes como Filthy Frank y Pink Guy. Sin embargo, en 2017, Miller decidió alejarse de la comedia y centrarse en su pasión por la música, adoptando el nombre artístico de Joji. Su música es una combinación de R&B, trip hop y lo-fi, caracterizada por su tono melancólico y letras introspectivas. El álbum debut de Joji, "Ballads 1" (2018), alcanzó el número uno en la lista de álbumes de R&B de Billboard, impulsado por el éxito de sencillos como "Slow Dancing in the Dark" y "Yeah Right". Joji ha logrado diferenciarse por su habilidad para transmitir emociones profundas a través de su música, explorando temas de amor, pérdida y auto-reflexión. Su segundo álbum, "Nectar" (2020), continuó demostrando su crecimiento artístico y su capacidad para crear una conexión emocional con su audiencia.',
    },
]


const ItemsPerPage = 6 ; 

function Novedades() {
    const navigate = useNavigate();
    const slides = cards.map((card, index) => (
        <Card component='a' onClick={() => navigate(`/novedades/${card.id}`, { state: { card: card } })}
        target="_blank"
         key={index} style={{width:350, height:'fit-content', flexDirection:'row-wrap', display:'flex'}} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={card.Image}
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{card.title}</Text>
                <Badge color="pink">{card.badge}</Badge>
            </Group>

            <Text size="lg" style={{fontSize:'20px', fontWeight:'bold'}}> 
                {card.description}
            </Text>

        </Card>
    ));

    
    const [visibleEvents, setVisibleEvents] = useState(
        slides.slice(0, ItemsPerPage)
    );

    const pagination = usePagination({
        total: slides.length/ItemsPerPage,
        initialPage: 1,
        onChange(page){
            const star = (page - 1) * ItemsPerPage;
            const end = star + ItemsPerPage;
            setVisibleEvents(slides.slice(star, end));
        }
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);

    return (
        <div className="novedades_page">
            <div className="title_novedades">
                <h1>Descubre GTN</h1>
            </div>
            <div className="novedades_principales">
                <div className="novedad_1">
                    <Card component='a' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    target="_blank"
                    style={{width:'fit-content', height:'fit-content', objectFit:'contain' , flexDirection:'row-wrap', display:'flex' }} shadow="sm" padding="lg" radius="md" withBorder>
                        <Card.Section>
                            <Image
                                src={tyler_piano}
                                alt="Norway"
                                height= {400}
                                width='fit-content'
                            />
                        </Card.Section>

                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>Musica</Text>
                            <Badge color="pink">03 Feb 2025</Badge>
                        </Group>

                        <Text size="lg" style={{fontSize:'20px', fontWeight:'bold'}}> 
                            Tyler Joseph tocando el piano
                        </Text>
                    </Card>
                </div>
                {/* <div className="novedades_2">
                    <div className="novedades_2_1">
                        <div className="novedades_2_1_container">
                            <Card component='a' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                            style={{width:400, height:'fit-content', flexDirection:'row-wrap', display:'flex'}} shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={cuco_tour}
                                        height={160}
                                        alt="Norway"
                                    />
                                </Card.Section>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>Musica</Text>
                                    <Badge color="pink">03 Feb 2025</Badge>
                                </Group>

                                <Text size="lg" style={{fontSize:'20px', fontWeight:'bold'}}> 
                                    Cuco en Lima por primera vez
                                </Text>
                            </Card>
                        </div>
                    </div>
                    <div className="novedades_2_2">
                        <div className="novedades_2_2_container">
                            <Card component='a' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                            style={{width:400, height:'fit-content', flexDirection:'row-wrap', display:'flex'}} shadow="sm" padding="lg" radius="md" withBorder>
                                <Card.Section>
                                    <Image
                                        src={cuco_tour}
                                        height={160}
                                        alt="Norway"
                                    />
                                </Card.Section>

                                <Group justify="space-between" mt="md" mb="xs">
                                    <Text fw={500}>Musica</Text>
                                    <Badge color="pink">03 Feb 2025</Badge>
                                </Group>

                                <Text size="lg" style={{fontSize:'20px', fontWeight:'bold'}}> 
                                    Cuco en Lima por primera vez
                                </Text>
                            </Card>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="novedades_pagination">
            <div style={{display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap'
                        }} className="novedades_slides" >
                            {visibleEvents.map((slide) => (
                                <div key={slide} className="slide_events" >
                                    {slide}
                                </div>
                            ))}
                        </div>
                        <div className="pagination_buttons">
                            {
                                <Pagination
                                    total={slides.length/ItemsPerPage}
                                    value={pagination.page}
                                    onChange={pagination.setPage}
                                />
                                // pagination.range.map(range => (
                                //     // <button key={range} onClick={() => pagination.setPage(range)}>{range}</button>
                                // ))
                            }
                        </div>
            </div>

        </div>
    );
}

export default Novedades;   