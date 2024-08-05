import React from 'react'
import Contact from '../components/Contact'
import Testimonal from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import ServiceHeader from '../components/ServiceHeader'
import Projects from '../components/Projects'
import Services from '../components/Services'

const ServicesPage = () => {
    return (
        <div>
            <ServiceHeader/>
            <Projects/>
            <Services/>
            <Contact/>
            <Testimonal/>
            <Pricing/>
            <Footer/>
        </div>
    )
}

export default ServicesPage
