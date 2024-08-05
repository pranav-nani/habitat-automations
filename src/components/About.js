import React from 'react'
import '../css/About.css'
import abt_img from '../images/About_img.png'
const About = () => {
    return (
        <div>
            <div className="abt-box">
                <section className="about">
                    <div className="container abt-container">
                        <div className="about-image">
                            <img src={abt_img} alt="About-Image" />
                        </div>
                        <div className="abt-content">
                            <h2>Habitat Automations' Aim And Vision........</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, repellat.
                            </p>
                            <div className="abt-cards">
                                <div className="abt-card">
                                    <span className="dot"></span>
                                    <div className="abt-card-content">
                                        <h2>
                                            Enhancing Living Experience
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quam!
                                        </p>
                                    </div>
                                </div>
                                <div className="abt-card">
                                    <span className="dot"></span>
                                    <div className="abt-card-content">
                                        <h2>
                                            A Community together
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quam!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default About
