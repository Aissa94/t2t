import React from 'react'
import BodyCarousel from './BodyCarusal'
import ServiceSection from './ServiceSection'

const Body = () => {
    return (
        <div>
            <ServiceSection />
            <BodyCarousel titleCarsusel="Recommended" />
            <BodyCarousel titleCarsusel="Offers" />
            <BodyCarousel titleCarsusel="Get Inspiration" />
        </div>
    )
}

export default Body
