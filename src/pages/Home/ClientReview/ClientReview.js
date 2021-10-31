import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic from "../../../images/client/clientside2.jpg"
import client1 from "../../../images/client/client-review-1.jpg"
import client2 from "../../../images/client/client-review-2.jpg"
import client3 from "../../../images/client/client-review-3.jpg"
import './Client.css'


const ClientReview = () => {
    return (
        <>
            <div class="container">
                <h1>Client Reviews</h1>

                <div class="row">
                    <div class="col-6">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="d-block img-size"
                                    src={client1}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='texts'>Amzing</h5>
                                    <p className='texts'>
                                        This is the first time we visited the travel agency.Their tour is best. Everyone was very kind. 						</p>
                                    <p className='texts'>Abrar</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block img-size img-fluid"
                                    src={client2}
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h5 >Linda Davis! is the best</h5>
                                    <p >							I I am so happy I chose this travel agency . Both of my kids enjoy their tours!</p>
                                    <p >Nir</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block img-size img-fluid"
                                    src={client3}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h5 className='texts'>A Wonderful experience</h5>
                                    <p className='texts'>
                                        It's mind blowing

                                    </p>
                                    <p className='texts'>Abrar</p>


                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div class="col-6 mb-5">
                        <img className="image img-size img-fluid" src={pic} alt="" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientReview;