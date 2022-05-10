import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import collage from '../../images/collage.jpg'
import foodie from '../../images/foodie.png'
import { FaHome, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaGooglePlus, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { ProductsContext } from '../../../context/ProductsContext'
import { CategoryContext } from '../../../context/CategoryContext'

const Footer = () => {
    const FkData = useContext(ProductsContext);
    console.log(FkData);
    const { Products } = useContext(ProductsContext);
    console.log(Products);
    const { Fakedata } = Products;
    console.log(Fakedata);

    const { dispatch2 } = useContext(CategoryContext);

    const uniqueList =
        [
            ...new Set(
                Fakedata.map((curItem) => {
                    return curItem.type;
                })
            )
        ];
    console.log(uniqueList);
    return (
        <>
            <footer class="bg-dark text-white">

                <div className="container-fluid  p-4">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-0 mx-auto">

                        <div class="col-3 col-sm-4 col-lg-2 mx-auto">
                            <Link class="nav-link" to="/">
                                <div class="card" style={{ border: "none" }}>
                                    <img src={collage} class="card-img-top img-fluid" alt="error!" />
                                    <div class="card-body">
                                        <img src={foodie} class="card-img-top img-fluid" alt="error!" />
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div class="col col-sm-6 mx-auto col-lg-3">
                            <div class="card bg-dark" style={{ border: "none" }}>
                                <div class="card-body mx-auto">
                                    <h5 class="px-3 card-title text-uppercase heading">Categories</h5>
                                    <ul>
                                        {uniqueList.map((curItem) => (
                                            <Link style={{ textDecoration: "none", color: "white" }} to={`/foodie/category`} >
                                                <li key={curItem.id} onClick={() => dispatch2({ type: "CATEGORY", id: curItem.id, curItem, Fakedata, uniqueList })} >{curItem}</li>
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-4 mx-auto col-lg-3">
                            <div class="card bg-dark" style={{ border: "none" }}>
                                <div class="card-body mx-auto">
                                    <h5 class="px-3 card-title text-uppercase heading">Informations</h5>
                                    <ul>
                                        <Link style={{ textDecoration: "none", color: "white" }} to={`/foodie/menu`} >
                                            <li>Menu</li>
                                        </Link>
                                        <Link style={{ textDecoration: "none", color: "white" }} to={`/foodie/reservation`} >
                                            <li>Reservations</li>
                                        </Link>
                                        <Link style={{ textDecoration: "none", color: "white" }} to={`/foodie/ContactUs`} >
                                            <li>Contact Us</li>
                                        </Link>
                                        <li>Term & Condition</li>
                                        <li>Return & Exchange</li>
                                        <li>Shipping & Delivery</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col col-sm-5 mx-auto col-lg-4">
                            <div class="card bg-dark" style={{ border: "none" }}>
                                <div class="card-body mx-auto">
                                    <h5 class="card-title text-uppercase heading">Contact Us</h5>
                                    <ul>
                                        <li><FaHome />  Kharagpore, West Bengal, India</li>
                                        <li><FaEnvelope />  sayanpandab@gmail.com</li>
                                        <li><FaPhoneAlt />  8927327667</li>
                                        <li>For Product Registration and general enquires, please contact us.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="mb-4" />

                <div className="container-fluid">
                    <div class="row row-cols-1 row-cols-lg-2 mx-auto">
                        <div class="col-12 col-lg-6 ">
                            <div class="text-center text-lg-start">
                                <p>Copyright © 2022 - All Rights Reserved.</p>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 ">
                            <div class="text-center text-lg-end">
                                <ul className="list-unstyled list-inline">
                                    <li class="list-inline-item"><h4><FaFacebook /></h4></li>
                                    <li class="list-inline-item"><h4><FaTwitter /></h4></li>
                                    <li class="list-inline-item"><h4><FaGooglePlus /></h4></li>
                                    <li class="list-inline-item"><h4><FaLinkedin /></h4></li>
                                    <li class="list-inline-item"><h4><FaYoutube /></h4></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- Back to Top --> */}
            <div className="fixed-bottom text-end m-4">
                <a href="#" class="btn btn-danger back-to-top"><i class="fa fa-angle-double-up"></i></a>
            </div>
        </>
    )
}

export default Footer