import React from "react";
import hero_img from '../assets/hero_img.jpg'
import map_img from '../assets/map_img.jpg'
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className="homepage">
            <div className="hero-homepage">
                <img className="background" src={hero_img} />
                <div className="foreground">
                    <div>
                        <p>Nijamudeen & <br />Madhuvanthi</p>
                        <p>We are so excited to celebrate this joyous day with you!</p>
                        <p className="hero-cta">RSVP Here</p>
                        <Link to={`/rsvp`}></Link>
                    </div>
                </div>
            </div>
            <div className="map-homepage">
                <img className="map-img" src={map_img} />
                <div className="map-directions">
                    <p>Insert Directions Here!</p>
                </div>
            </div>
        </div>
    )
}

export default Home