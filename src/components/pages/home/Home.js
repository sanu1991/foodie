import React from 'react'
import { Link } from 'react-router-dom'

import foods from '../../images/foods.png'
import delivery from '../../images/delivery.png'
import events from '../../images/events.png'
import slider from '../../images/slider.jpg'
import slider1 from '../../images/slider1.jpg'
import slider2 from '../../images/slider2.jpg'
import welcome from '../../images/welcome.jpg'

import { FaEnvelope, FaHome, FaPhoneAlt, FaRegClock } from 'react-icons/fa'


const Home = () => {
    return (
        <>
            <header>
                <div class="card bg-dark text-white">
                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        {/* <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div> */}
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={slider} style={{ opacity: '.5' }} class="d-block w-100 card-img img-fluid" alt="error!" />
                            </div>
                            <div class="carousel-item">
                                <img src={slider1} style={{ opacity: '.5' }} class="d-block w-100 card-img img-fluid" alt="error!" />
                            </div>
                            <div class="carousel-item">
                                <img src={slider2} style={{ opacity: '.5' }} class="d-block w-100 card-img img-fluid" alt="error!" />
                            </div>
                        </div>
                        <div class="card-img-overlay text-center mx-auto w-75 d-flex justify-content-center"  >
                            <div class="animate__animated animate__bounce">
                                <i class="card-title" style={{ fontSize: "20vw" }}>foodie</i>
                                <p class="card-text" style={{ fontSize: "2vw" }}>Pull up a chair and stay a while!</p>
                                <Link class="nav-link" to={`menu`}>
                                    <button type="button" class="btn btn-danger btn-rounded">Oredr Now</button>
                                </Link>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </header>
            <section>
                <div className="container-fluid">
                    <div class="row row-cols-1 row-cols-md-3 g-3 my-auto d-flex">
                        <div class="col text-center">
                            <p><FaEnvelope />  sayanpandab@gmail.com</p>
                            <p><FaPhoneAlt />  8927327667</p>
                        </div>
                        <div class="col text-center">
                            <p><FaHome />  Kharagpore, West Bengal, India</p>
                            <pre>   721101</pre>
                        </div>
                        <div class="col text-center">
                            <p><FaRegClock />  Open: Monday-Friday</p>
                            <pre>   8:00am - 9:00pm</pre>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div class="card mb-3" style={{ border: "none" }} >
                        <div class="row g-0">
                            <div class="col-md-6">
                                <img src={welcome} class="img card-img img-fluid" alt="error" />
                            </div>
                            <div class="col-md-6 bg-dark text-light d-flex align-items-center">
                                <div class="card-body">
                                    <h1 class="card-text text-center heading">About Us</h1>
                                    <p class="card-text text-muted">At Foodie, we just don't make recipes that stands out but also intend to make people happier. The company was built on the belief that every cuisine we present to our customers should be special, and we carry that belief into everything we do. <br /> <br />
                                        With more than 10 years of experience under our belts, we understand how to best serve our customers through tried and true service principles: We create recipes we are proud to serve and deliver it fast to our customers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container-fluid p-5 text-center services">
                    <div class="row row-cols-1 row-cols-md-3 g-5">
                        <div class="col-md-12">
                            <h2 className='heading'>OUR SERVICES</h2>
                            <h5>We are here to assist you with your personalized choice of foods and beverages</h5>
                        </div>
                        <div class="col-md-4">
                            <img src={foods} class="img img-fluid" alt="error" />
                            <h5 className='heading'>HEALTHY FOODS</h5>
                            <p>Choose from our wide range of fresh, non-oily and healthy foods at the comfort of your home. </p>
                        </div>
                        <div class="col-md-4">
                            <img src={delivery} class="img img-fluid" alt="error" />
                            <h5 className='heading'>FASTEST DELIVERY</h5>
                            <p>Get fastest delivery to satisfy your hunger with the food of your choice instantly. </p>
                        </div>
                        <div class="col-md-4">
                            <img src={events} class="img img-fluid" alt="error" />
                            <h5 className='heading'>EVENTS</h5>
                            <p>Make your special day memorable by celebrating it with our unique ideas and gestures.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home