import React from 'react';
import '../css/Header.css';
import logo from '../images/Logo.png';
import phone_mock from '../images/Phone Mockups.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-container">
            <header>
                <div className="container header-container">
                    <nav className="navbar">
                        <div className="logo">
                            <Link to="/" style={{ display: "flex", gap: "1rem" }}>
                                <img src={logo} alt="Habitat Automations Logo" />
                                <p>Habitat Automations</p>
                            </Link>
                        </div>
                        <ul>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><a href="#demo" className="button">Book a Demo</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1>Some Header Which Represents Habitat Automations</h1>
                        <p>Redefine Your Lifestyle With Habitat While Dealing With Your Day-To-Day Chores</p>
                        <button>Get Started</button>
                    </div>
                    <div className="hero-image">
                        <img src={phone_mock} alt="Hero-Image" />
                        <img src={phone_mock} alt="Hero-Image" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;
