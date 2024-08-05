import React from 'react'
import '../css/ServiceHeader.css'
import logo from '../images/Logo.png';
import service_img from '../images/Services_img.png'
import { Link } from 'react-router-dom'
const ServiceHeader = () => {
    return (
        <div className="service-container">
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
                            <li><Link to="pricing">Pricing</Link></li>
                            <li><a href="#demo" className="button">Book a Demo</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section className="hero">
                <div className="container service-hero-container">
                    <div className="service-content">
                        <h1>Get Ready To Enhance Your Community Living!</h1>
                        <p>We offer comprehensive suite of services designed to enhance the security, convenience, and overall living experience in residential gated societies.</p>
                        <button>Get Started</button>
                    </div>
                    <div className="service-image">
                        <img src={service_img} alt="Hero-Image" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServiceHeader
