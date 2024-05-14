import React from "react";
import gtn_video from "../assets/gtn_video.mp4";
import './nosotros-p.css'
import Timeline from "./timeline";
import Map_section from "../map/map-section";
import Info from "../info/info"

const Nosotros_p = () => {
    return (
        <div className="nosotros-p">
            <div className="nosotros-p-video">
                <video src={gtn_video} autoPlay loop muted />
            </div>
            <div className="nosotros-info">
                <Info />
            </div>
            <div className="nosotros-timeline">
                <Timeline />
            </div>
            <div className="nosotros-ubicacion">
                <Map_section />
            </div>
        </div>
    );
}

export default Nosotros_p;