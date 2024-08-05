import React from 'react'
import project_1 from '../images/Projects_1.png';
import project_2 from '../images/Projects_2.png';
import project_3 from '../images/Projects_3.png';
import '../css/Projects.css';
const Projects = () => {
    return (
        <div>
            <section className="projects">
                <div className="container projects-container">
                    <h2>The Projects We Worked On</h2>
                    <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
                    <div className="projects-grid ">
                        <div className="projects-item ">
                            <h3>Security and Maintenance</h3>
                            <img src={project_1} alt="Icon" />
                            <p>Automated security and maintenance solutions for XYZ Residential Society</p>
                            <a href='#learnmore' className='learn-more-link'>Learn more <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.67969 2L16.3997 8.24L9.67969 14.48" stroke="#3266AE" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" />
                                <path d="M2 7.98266H15.44" stroke="#3266AE" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" />
                            </svg>
                            </a>
                        </div>
                        <div className="projects-item ">
                            <h3>Home Automations</h3>
                            <img src={project_2} alt="Icon" />
                            <p>Complete home automation for ABC Luxury Apartments</p>
                            <a href='#learnmore' className='learn-more-link'>Learn more <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.67969 2L16.3997 8.24L9.67969 14.48" stroke="#3266AE" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" />
                                <path d="M2 7.98266H15.44" stroke="#3266AE" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" />
                            </svg>
                            </a>
                        </div>
                        <div className="projects-item ">
                            <h3>Emergency Response</h3>
                            <img src={project_3} alt="Icon" />
                            <p>Integrated emergency response systems for DEF Gated Community</p>
                            <a href='#learnmore' className='learn-more-link'>Learn more <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.67969 2L16.3997 8.24L9.67969 14.48" stroke="#3266AE" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" />
                                <path d="M2 7.98266H15.44" stroke="#3266AE" stroke-width="2.4" stroke-linecap="square" stroke-linejoin="bevel" />
                            </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Projects
