/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState, useRef, useEffect } from 'react';
import '../css/Contact.css';
import contct_icon_1 from '../images/Contact-icons-1.png';
import contct_icon_2 from '../images/Contact-icons-2.png';
import contct_icon_3 from '../images/Contact-icons-3.png';
import cnfrm_img from '../images/Confirmation_img.png';
import cncl_img from '../images/Contact_cancle.png';
const Contact = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const confirmationRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirmation(true);
    };

    const handleClickOutside = (event) => {
        if (confirmationRef.current && !confirmationRef.current.contains(event.target)) {
            setShowConfirmation(false);
        }
    };
    const handleCloseConfirmation = () => {
        setShowConfirmation(false);
    };

    useEffect(() => {
        if (showConfirmation) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [showConfirmation]);

    return (
        <div>
            <section className="contact">
                <div className="container contact-container">
                    <div className="contact-blue"></div>
                    <div className="contact-section">
                        <div className="contact-form">
                            <h2 className="fnt-primary">Get In Touch</h2>
                            <p className="fnt-secondary-400">
                                Enim Tempor Eget Pharetra Facilisis Sed Maecenas Adipiscing. Eu Leo Molestie Vel, Ornare Non Id Blandit
                            </p>
                            <form className="contact-form-main" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Name *" required />
                                <input type="email" placeholder="Email" />
                                <input type="tel" placeholder="Phone number *" required />
                                <select required>
                                    <option value="">How did you find us?</option>
                                    <option value="search-engine">Search Engine</option>
                                    <option value="social-media">Social Media</option>
                                    <option value="friend">Friend</option>
                                    <option value="advertisement">Advertisement</option>
                                    <option value="other">Other</option>
                                </select>
                                <button type="submit">SEND</button>
                            </form>
                            <div className="contact-details">
                                <div className="info">
                                    <img src={contct_icon_1} alt="Contact-icons" />
                                    <div className="info-details">
                                        <p>Phone</p>
                                        <span className="fnt-contact-300">03 5432 1234</span>
                                    </div>
                                </div>
                                <div className="info">
                                    <img src={contct_icon_2} alt="Contact-icons" />
                                    <div className="info-details">
                                        <p>Fax</p>
                                        <span className="fnt-contact-300">03 5432 1234</span>
                                    </div>
                                </div>
                                <div className="info">
                                    <img src={contct_icon_3} alt="Contact-icons" />
                                    <div className="info-details">
                                        <p>Email</p>
                                        <span className="fnt-contact-300">info@marcc.com.au</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-map">
                            <div className="map">
                                <iframe
                                    width="445"
                                    height="504"
                                    src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight="0"
                                    marginWidth="0"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showConfirmation && (
                <div>
                    <div className="overlay"></div>
                    <div className="confirmation" ref={confirmationRef}>
                        <div className='contact-confirm'>
                            <img src={cnfrm_img} alt='cnfrm-img' />
                            <button onClick={handleCloseConfirmation}><img src={cncl_img} alt='cnfrm-im'/>
                            </button>
                        </div>
                        <h1>We Got You!</h1>
                        <p>Our team received your message. We will get back to you shortly!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
