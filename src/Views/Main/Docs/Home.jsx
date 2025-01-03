import CarouselComponent from 'Components/Carousel/CarouselComponent'
import React from 'react'

const Home = () => {
    return (
        <div className="w-100">
            {/* section - 1  */}
            <section className='section-one'>
                <div className="container-fluid px-5">
                    <CarouselComponent />
                </div>
            </section>


        </div>
    )
}

export default Home