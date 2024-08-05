import React from 'react'
import '../css/Testimonials.css'
import '../css/Swiper.css'
import tst_img from '../images/Testimonal-profile.png'

const Testimonal = () => {
    return (
        <div>
            <div className="testimonal-container ">
                <section>
                    <div className="testimonial mySwiper container">
                        <div className="testi-content swiper-wrapper">
                            <div className="slide swiper-slide">
                                <img src={tst_img} alt="" className="image" />
                                <h1>
                                    Pranav reddy
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                                    saepe provident <span style={{ color: '#3266AE' }}>quaerat quo error facere nihil</span> nihil
                                    deleniti
                                    eligendi ipsum adipisci, fugit, architecto amet asperiores
                                    doloremque deserunt eum nemo.
                                </p>
                                <i className="bx bxs-quote-alt-left quote-icon"></i>
                            </div>
                            <div className="slide swiper-slide">
                                <img src={tst_img} alt="" className="image" />
                                <h1>
                                    Raj Kumar
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                                    saepe<span style={{ color: '#3266AE' }}>quaerat quo error facere nihil</span> facere nihil
                                    deleniti
                                    eligendi ipsum adipisci, fugit, architecto amet asperiores
                                    doloremque deserunt eum nemo.
                                </p>
                                <i className="bx bxs-quote-alt-left quote-icon"></i>
                            </div>
                            <div className="slide swiper-slide">
                                <img src={tst_img} alt="" className="image" />
                                <h1>
                                    Sai Charan Reddy
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                                    saepe provident dolorem <span style={{ color: '#3266AE' }}>quaerat quo error facere nihil</span>
                                    deleniti
                                    eligendi ipsum adipisci, fugit, architecto amet asperiores
                                    doloremque deserunt eum nemo.
                                </p>
                                <i className="bx bxs-quote-alt-left quote-icon"></i>
                            </div>
                        </div>
                        <div className="swiper-button-next nav-btn"></div>
                        <div className="swiper-button-prev nav-btn"></div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className="container testimonal-details">
                        <hr />
                        <div className="testimonal-user-data">
                            <div className="user-data">
                                <h2>4.95<span style={{ color: '#3266AE' }}>/</span>5</h2>
                                <p>user rating</p>
                            </div>
                            <div className="user-data">
                                <h2>350<span style={{ color: '#FFB545' }} >K</span>+</h2>
                                <p>Customers</p>
                            </div>
                            <div className="user-data">
                                <h2>99<span style={{ color: '#139502' }} >+</span></h2>
                                <p>Team Members</p>
                            </div>
                            <div className="user-data">
                                <h2>41<span style={{ color: '#d00b0b' }}>M</span></h2>
                                <p>Current Users</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Testimonal