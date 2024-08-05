import React from 'react'
import '../css/ContactPage.css';
import logo from '../images/Logo.png';
import { Link } from "react-router-dom";
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const ContactPage = () => {
    return (
        <div className='contact-page-container'>
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
            <Contact/>
            <Footer/>
        </div>
    )
}

export default ContactPage
