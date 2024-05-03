import React from "react";
import gtn_video from "../assets/gtn_video.mp4";
import './nosotros-p.css'

const Nosotros_p = () => {
    return (
        <div className="nosotros-p">
            <div className="nosotros-p-video">
                <video src={gtn_video} autoPlay loop muted />
            </div>
        </div>
    );
}

export default Nosotros_p;