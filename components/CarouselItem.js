import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useState, useCallback, useEffect } from "react";

import Image from "next/image";

const CarouselItem = () => {
    return (
        <>
            {/* <div
        className="bg-center bg-cover sm:hidden"
        style={{
          backgroundImage: `url('/images/carousel-md.jpg')`,
          width: "100%",
          height: "100%",
        }}
      ></div> */}
            <div className="pt-10 mt-10 md:mt-8 md:pt-8 lg:mt-6 lg:pt-6 xl:mt-3 xl:pt-3">
                <Carousel
                    showThumbs={false}
                    interval={3000}
                    autoPlay={true}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    showArrows={false}
                >
                    <div>
                        <Image
                            src="/images/carousel.png"
                            alt="image1"
                            width={100}
                            height={100}
                            className=""
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/carousel.png"


                            alt="image2"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div>
                        <Image
                            src="/images/carousel.png"

                            alt="image3"
                            width={100}
                            height={100}
                        />
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default CarouselItem;
