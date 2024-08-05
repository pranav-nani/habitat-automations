import React from 'react'
import icons_1 from '../images/directions_car.png'
import icons_2 from '../images/home_repair_service.png'
import icons_3 from '../images/emergency_heat.png'
import '../css/Features.css'
const Features = () => {
    return (
        <div>
        <section className="features">
        <div className="container features-container">
            <h2>Explore Premium Features</h2>
            <p>Unique and powerful suite of software to run your entire business, brought to you by a company with the
                long term vision to transform the way you work.</p>
            <div className="features-grid ">
                <div className="feature-item bg-card1 card-shdw1">
                    <img src={icons_1} alt="Icon" />
                    <h3>Parking Automation</h3>
                    <p>Description of feature</p>
                </div>
                <div className="feature-item bg-card2 card-shdw2">
                    <img src={icons_2}  alt="Icon" />
                    <h3>Maintenance</h3>
                    <p>Description of feature</p>
                </div>
                <div className="feature-item bg-card1 card-shdw1">
                    <img src= {icons_3} alt="Icon" />
                    <h3>Emergency Help</h3>
                    <p>Description of feature</p>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default Features
