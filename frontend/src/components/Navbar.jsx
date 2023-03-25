import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const redirectToRSVP = () => {
        window.open("https://docs.google.com/forms/d/1uAW2cKksi8UMqjz2EEYsJpD6fY4LdSP_0geMslxqi2A", '_blank');
    }
    return (
        <nav className="navbar">
            <div className="logo">navbar</div>
            <ul className="right-navbar">
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/about`}>About Us</Link></li>
                <li><Link to={`/photos`}>Photos</Link></li>
                <li className="cta" onClick={redirectToRSVP}>RSVP</li>
            </ul>
        </nav>
    )
}

export default Navbar