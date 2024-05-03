import React from "react";
import "./header.css";
import gtn_logo from "../assets/gtn-logo.png";

const Header = () => {
    return (
        <div className="header">
            <div className="sb__header section__padding">
                <div className="sb__header-links">
                    <div className="sb__header-links_div">
                        <img src={gtn_logo} ></img>
                        <p>GRAN TEATRO NACIONAL</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;