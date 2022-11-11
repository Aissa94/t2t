import React from 'react'
import BodyCarousel from './BodyCarusal'
import ServiceSection from './ServiceSection'

const Body = () => {
    return (
        <div>

            <ServiceSection />
            <BodyCarousel title="Recommended" />
            <BodyCarousel title="Offers" />
            <BodyCarousel title="Get Inspiration" />

        </div>
    )
}

export default Body
