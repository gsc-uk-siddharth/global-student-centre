import React from 'react'
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
    return (
        <Carousel
            showThumbs={false}
            interval={3000}
            autoPlay={true}
            infiniteLoop={true}
            useKeyboardArrows={true}
            showArrows={false}

        >
            <div>
                <img
                    src="/images/c-1.webp"
                    alt="image1"
                    width={80}
                    height={40}
                    className=""
                />
            </div>
            <div>
                <img
                    src="/images/c-2.webp"


                    alt="image2"
                    width={80}
                    height={40}
                />
            </div>
            <div>
                <img
                    src="/images/c-3.webp"

                    alt="image3"
                    width={80}
                    height={40}
                />
            </div>
            <div>
                <img
                    src="/images/c-4.webp"

                    alt="image4"
                    width={80}
                    height={40}
                />
            </div>
            {/* <div>
      <img
        src="/images/carousel-5.png"

        alt="image5"
        width={80}
        height={40}
      />
      </div>*/}
        </Carousel>
    )
}

export default CarouselComponent