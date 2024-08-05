import React from 'react'
import pricing_icn_1 from '../images/Pricing-icon-1.png'
import pricing_icn_2 from '../images/Pricing-icon-2.png'
import '../css/Pricing.css'
const Pricing = () => {
    return (
        <div>
            <section className="pricing">
        <div className="container main-section ">
            <div className="pricing-text">
                <h2 className="fnt-primary" style={{fontSize: '35px', color: '#303030'}}>Deliver End-To-End Retail Billing &
                    Solutions</h2>
                <p className="fnt-secondary-400" style={{padding: '10px 225px', lineHeight: '1.25', fontSize: '16px'}}>
                    Unique And Powerful Suite Of Software to Run Your Entire Bvyness. Brought to You by A
                    Comcony With Long Term Vision To Transform The Way You Work
                </p>
            </div>
            <div className="cards-container">
                <div className="card-wrapper">
                    <div className="card-illustration card-one"></div>
                    <div className="card">
                        <div className="plan-type">
                            <img className="plan-icon" src={pricing_icn_1} alt='pricing-icon'/>
                            <span style={{fontSize: '30px', fontWeight: '400'}}>Stater</span>
                        </div>
                        <div className="card-header">
                            <h1 className="fnt-primary" style={{fontWeight: '700', fontSize: '55px',color: '#303030'}}>$ 45/MO
                            </h1>
                            <p style={{fontSize: '16px', lineHeight: '1.4', padding: '10px', fontWeight: '500'}}>
                                Includes 1,000 marketing contacts. Additional marketing contacts are sold in increments
                                of 1,000 from
                            </p>
                            <hr className="hr-color-2" />
                        </div>
                        <div className="card-body">
                            <ul className="card-options">
                                <li className="green-tick">Outbound email and in-product</li>
                                <li className="green-tick"><span style={{fontWeight:'bold'}}>Multi-channel</span> campaigns</li>
                                <li className="green-tick">A/B testing & control groups</li>
                                <li className="green-tick">Banner messages</li>
                                <li className="green-tick">Custom bots</li>
                                <li className="grey-tick">Mobile Carousels</li>
                                <li className="grey-tick"><span style={{color:'#FFB545'}}> Push messages </span> & notifications</li>
                            </ul>
                        </div>
                        <button className="btn-secondary">Get Started</button>
                    </div>
                </div>
                <div className="card-wrapper">
                    <div className="card-illustration card-two"></div>
                    <div className="card">
                        <div className="plan-type">
                            <img className="plan-icon" src={pricing_icn_2} alt='pricing-icon'/>
                            <span style={{fontSize: '30px', fontWeight: '400'}}>Professional</span>
                        </div>
                        <div className="card-content">
                            <div className="card-header">
                                <h1 className="fnt-primary" style={{fontWeight: '700', fontSize: '55px', color: '#303030'}}>$
                                    62/MO </h1>
                                <p style={{fontSize: '16px',lineHeight: '1.4', padding: '10px', fontWeight: '500'}}>
                                    Includes 1,000 marketing contacts. Additional marketing contacts are sold in
                                    increments of 1,000 from
                                </p>
                                <hr className="hr-color-2" />
                            </div>
                            <div className="card-body">
                                <ul className="card-options">
                                    <li className="green-tick">Outbound email and in-product</li>
                                    <li className="green-tick">Messaging</li>
                                    <li className="green-tick"><span style={{color: '#FFB545'}}> Push messages </span> & notifications </li>
                                    <li className="green-tick"> Mobile Carousels</li>
                                    <li className="green-tick">Custom bots</li>
                                    <li className="green-tick">Mobile Carousels</li>
                                    <li className="green-tick"> <span style={{fontWeight: 'bold'}}>Multi-channel</span>  campaigns</li>
                                    <li className="green-tick"> Custom reporting</li>
                                    <li className="green-tick"> Outbound email and in-product </li>
                                    <li className="green-tick"> Banner messages </li>
                                    <li className="green-tick"> Website traffic analytics </li>
                                    <li className="green-tick"> Salesforce integration </li>
                                </ul>
                            </div>
                        </div>
                        <button className="btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default Pricing
