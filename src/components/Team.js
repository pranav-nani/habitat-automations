import React from 'react'
import team_icon_1 from '../images/Team-icon-1.png'
import team_icon_2 from '../images/Team-icon-2.png'
import prfl_img_1 from '../images/Profile-img-1.png'
import prfl_img_2 from '../images/Profile-img-2.png'

import '../css/Team.css'

const Team = () => {
    return (
        <div>
            <div className="team-box">
                <section className="team">
                    <div className="container team-container">
                        <div className="team-content">
                            <h2>Habitat's Creators</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque temporibus tempore optio cum,
                                officiis possimus. Animi temporibus sint dolorum 
                        </p>
                        <div className="team-features">
                            <div className="team-feature">
                                <img src={team_icon_1} alt="Team-icons" />
                                    <h2>Your Security</h2>
                                    <p>cards and make more sales while chatting</p>
                            </div>
                            <div className="team-feature">
                                <img src={team_icon_2} alt="Team-icons" />
                                    <h2>Sommething Else</h2>
                                    <p>Show off your goods in elegant product cards and mak</p>
                            </div>
                        </div>
                        <button>Contact Us</button>
                    </div>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src={prfl_img_1} alt="Profile-image" />
                                <div className="team-member-content">
                                    <h3 className="fnt-primary">Shreyas Gore</h3>
                                    <p className="fnt-secondary-600">Designation</p>
                                    <p className="fnt-secondary-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        Veniam ab aspernatur voluptatibus aliquam corporis. Dolorum voluptas porro dolores vel
                                        non.</p>
                                </div>
                        </div>
                        <div className="team-member">
                            <img src={prfl_img_2} alt="Profile-image" />
                                <div className="team-member-content">
                                    <h3 className="fnt-primary">Keshav Vyas</h3>
                                    <p className="fnt-secondary-600">Designation</p>
                                    <p className="fnt-secondary-400">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi perferendis ipsa non
                                        itaque eveniet doloribus beatae perspiciatis, magnam iusto quasi!
                                    </p>
                                </div>
                        </div>
                    </div>
            </div>
        </section>
    </div >

        </div >
    )
}

export default Team
