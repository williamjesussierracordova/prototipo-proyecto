import Demo from "./acordion.jsx";
import { Group,Button } from "@mantine/core";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import './event_page.css';
import clancy_tour from '../assets/clancy_tour.jpg';
import { FaRegClock } from "react-icons/fa";
import Countdown  from 'react-countdown';
import Demo2 from "./accordion_event.jsx";
import Map from '../map/map-section.jsx';


function EventPage() {
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
              <Button justify="space-between" variant="light" radius="lg" color="#2A468C" size="lg"  leftSection={<FaRegArrowAltCircleLeft />}  mt="md">
                Volver
              </Button>
            </Group>
      </div>
      <h1>THE CLANCY WORLD TOUR</h1>
      <div className="event_divisions">
        <div className="event_page_left">
            <div className="event_page_left_top">
              <div className="event_image">
                <img src={clancy_tour} alt="clancy_tour" /> 
              </div>
              <div className="countdown">
                <h2> <FaRegClock /> Faltan</h2>
                <Countdown date={'2025-02-02T21:00:00-05:00'} renderer={renderer}/>
              </div>
            </div>
            <div className="event_info">
              <h1 style={{color:"#2A468C"}}>Acerca del evento</h1>
              <h3>TWENTY ONE PILOTS EN LIMA</h3>
              <p>Grammy-Award winning band Twenty One Pilots make their highly anticipated return to Australia and New Zealand for the first time in 6 years on The Clancy World Tour in November 2024. The tour comes in support of the duos anticipated forthcoming album, Clancy, which will be released on May 17.</p>
              <p>Having amassed over 33 billion streams worldwide and over 3 million tickets sold across global headline tours, the Columbus, OH based duo of Tyler Joseph and Josh Dun have established themselves as one of the most successful bands of the 21st century and redefined the sound of a generation.</p>
            </div>
            <Demo />
        </div>
        <div className="event_page_right">
          <div className="low_price">
            <h3>Entradas desde</h3>
            <h1>S/.250</h1>
          </div>
          <div className="event_info_schedule">
            <div className="event_dates_info">
              <div className="date_event">
                <p>02</p>
                <span>Febrero</span>
              </div>
              <div className="event_schedule">
                <h6>Horarios</h6>
                <div className="event_schedule_hours">
                  <div className="event_schedule_hour">
                    <p>19:00 hs</p>
                    <span>Puertas</span>
                  </div>
                  <div className="event_schedule_hour">
                    <p>21:00 hs</p>
                    <span>Show</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="event_tickets_button">
              <Button fullWidth variant="filled"  radius="lg" color="black" mt="md" >
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