import Demo from "./acordion.jsx";
import { Group,Button } from "@mantine/core";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import './event_page.css';
import { FaRegClock } from "react-icons/fa";
import Countdown  from 'react-countdown';
import Demo2 from "./accordion_event.jsx";
import Map from '../map/map-section.jsx';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate} from "react-router-dom";



function EventPage(  ) { /* necesito que reciba un parametro para saber que evento mostrar */
  const location = useLocation();
  const { card } = location.state;
  const navigate = useNavigate();
  const { idEvento } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(idEvento);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);  

  const renderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <h2 style={{color:"white"}}>El evento ha comenzado</h2>;
    } else {
      // Render a countdown
      return <h2 style={{color:"white"}}>{days} dias | {hours} horas | {minutes} minutos | {seconds} segundos</h2>;
    }
  };

  return (
    <div className="event_page padding_event">
      <div className="button__volver">
            <Group justify="left">
              <Button justify="space-between" variant="light" radius="lg" color="#2A468C" size="lg"  leftSection={<FaRegArrowAltCircleLeft />}  mt="md" onClick={() => navigate(-1)}>
                Volver
              </Button>
            </Group>
      </div>
      <h1>{card.title}</h1>
      <div className="event_divisions">
        <div className="event_page_left">
            <div className="event_page_left_top">
              <div className="event_image">
                <img src={card.Image} alt="clancy_tour" /> 
              </div>
              <div className="countdown">
                <h2> <FaRegClock /> Faltan</h2>
                <Countdown date={card.date} renderer={renderer}/>
              </div>
            </div>
            <div className="event_info">
              <h1 style={{color:"#2A468C"}}>Acerca del evento</h1>
              <h3>{card.subtitle}</h3>
              <p>{card.text_description}</p>
            </div>
            <Demo />
        </div>
        <div className="event_page_right">
          <div className="low_price">
            <h3>Entradas desde</h3>
            <h1>S/.{card.min_price}</h1>
          </div>
          <div className="event_info_schedule">
            <div className="event_dates_info">
              <div className="date_event">
                <p>{card.day}</p>
                <span>{card.month}</span>
              </div>
              <div className="event_schedule">
                <h6>Horarios</h6>
                <div className="event_schedule_hours">
                  <div className="event_schedule_hour">
                    <p>{card.open_door} hs</p>
                    <span>Puertas</span>
                  </div>
                  <div className="event_schedule_hour">
                    <p>{card.start} hs</p>
                    <span>Show</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="event_tickets_button">
              <Button fullWidth variant="filled"  radius="lg" color="black" mt="md" onClick={() => navigate('/pasarela', { state: { card } })} >
                Comprar
              </Button>
            </div>
          </div>
          <div className="event_card_parking">
            <Demo2 />
          </div>
        </div> 
      </div>
      <Map />
    </div>
    
  );
}

export default EventPage;