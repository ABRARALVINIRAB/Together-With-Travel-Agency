
import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../../images/banner/banner1.jpg"
import banner2 from "../../../images/banner/banner2.jpg"
import banner3 from "../../../images/banner/banner3.jpg"
import "./Banner.css"

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h1 className='text'>
                            Welcome To Our
                            TRAVEL AGENCY</h1>
                        <h4>Best places for your next travel are here check them out</h4>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                        <h1 className='text'>Get New Experience and Greatest Adventure</h1>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text'>Feel free to discover most engaging places.</h1>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;