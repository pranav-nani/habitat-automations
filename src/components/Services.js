import React from 'react'
import icons_1 from '../images/Service_security.png'
import icons_2 from '../images/home_repair_service.png'
import icons_3 from '../images/Services_parking.png'
import icons_4 from '../images/Services_clubhouse.png'
import icons_5 from '../images/emergency_heat.png'
import icons_6 from '../images/Service_convenience.png'
import '../css/Services.css'
const Services = () => {
    return (
        <div>
            <div>
                <section className="services-provider">
                    <div className="container services-provider-container">
                        <h2>Services that connect you to your users</h2>
                        <div className="service-provider-grid ">
                            <div className="service-provider-item bg-card2 card-shdw1">
                                <img src={icons_1} alt="Icon" />
                                <h3>Security</h3>
                                <p>Our advanced security solutions include 24/7 surveillance, smart access control, and real-time alerts to ensure the safety of your community.</p>
                            </div>
                            <div className="service-provider-item bg-card2 card-shdw2">
                                <img src={icons_2} alt="Icon" />
                                <h3>Maintenance</h3>
                                <p>Streamline maintenance requests with our tech-assisted service, allowing residents to report and track issues effortlessly through a mobile app.</p>
                            </div>
                            <div className="service-provider-item bg-card2 card-shdw1">
                                <img src={icons_3} alt="Icon" />
                                <h3>Parking Automation</h3>
                                <p>Optimize parking management with our automated systems, providing real-time availability and reservations for residents.</p>
                            </div>
                            <div className="service-provider-item bg-card2 card-shdw1">
                                <img src={icons_4} alt="Icon" />
                                <h3>Club House Booking</h3>
                                <p>Easily book and manage clubhouse facilities with our user-friendly scheduling system, enhancing the community experience.
                                </p>
                            </div>
                            <div className="service-provider-item bg-card2 card-shdw2">
                                <img src={icons_5} alt="Icon" />
                                <h3>Emergency Help</h3>
                                <p>Our emergency response feature ensures quick and efficient assistance in case of medical emergencies, providing peace of mind to residents.</p>
                            </div>
                            <div className="service-provider-item bg-card2 card-shdw1">
                                <img src={icons_6} alt="Icon" />
                                <h3>Convenience</h3>
                                <p>Integrated security systems for gated societies. Smart home devices including switches, remotes, dimmers, and locks</p>
                            </div>
                        </div>
                        <div className='service-button'>
                            <button className='service-link'>Explore All <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.67969 2L16.3997 8.24L9.67969 14.48" stroke="white" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" />
                                <path d="M2 7.98266H15.44" stroke="white" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" />
                            </svg></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Services
