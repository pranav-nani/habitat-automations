import React from 'react'
import '../css/Footer.css'
import logo from '../images/Logo.png'
import ftr_img from '../images/Footer-img.png'
const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: '#303030' }}>
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-logo" style={{ paddingBottom: '20px' }}>
                            <div className="footer-logo">
                                <img src={logo} alt="Habitat Automations Logo" />
                                <p>Habitat Automations</p>
                            </div>
                            <div className="social-media-logo">
                            </div>
                        </div>
                        <div className="footer-links" style={{ paddingBottom: '10px' }}>
                            <hr className="hr-color" />
                            <ul className="Links" style={{ color: 'white' }}>
                                <li><a href="#UsefulLinks">Useful Links</a></li>
                                <li><a href="#service">Service</a></li>
                                <li><a href="#contact">Contact Us</a></li>
                                <li><a href="#pricing">Our Latest News</a></li>
                            </ul>
                        </div>
                        <hr className="hr-color" />
                        <div className="footer-info" style={{ color: 'white', lineHeight: '1.44', fontWeight: '400' }}>
                            <div className="footer-details">
                                <p>Solutions</p>
                                <p>Industries</p>
                                <p>Products</p>
                                <p>Resources</p>
                                <p>Pricing</p>
                            </div>
                            <div className="footer-details">
                                <p>Sale</p>
                                <p>Marketing</p>
                                <p>Real Estate</p>
                                <p>Automative</p>
                                <p>Education</p>
                            </div>
                            <div className="footer-addresses">
                                <div className="footer-address">
                                    <p>1700 W Blancke St, kiyev
                                        port south USA, American</p>
                                </div>
                                <div className="footer-address">
                                    <p>+3255 456 789
                                        mail@primarily.com </p>
                                </div>
                            </div>
                            <img src={ftr_img} alt='foter-img' />
                        </div>
                        <hr className="hr-color" />
                        <p className="footer-end">Copyright © Habitat | Designed by VictorFlow Templates </p>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer
