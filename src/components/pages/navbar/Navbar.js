import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import foodie from '../../images/foodie.png'
import { FaHome } from 'react-icons/fa'

import { CartContext } from '../../../context/CartContext'
import { ProductsContext } from '../../../context/ProductsContext'
import { SearchContext } from '../../../context/SearchContext'

const Navbar = () => {
    const FkData = useContext(ProductsContext);
    console.log(FkData);
    const { Products } = useContext(ProductsContext);
    console.log(Products);
    const { Fakedata } = Products;
    console.log(Fakedata);

    // for search option
    const [srchItem, setsrchItem] = useState("");
    const srchValue = (e) => {
        const srchData = e.target.value;
        console.log(srchData);
        setsrchItem(srchData);
    }

    const { totalQty } = useContext(CartContext);

    const { dispatch3 } = useContext(SearchContext);

    return (
        <>
            <div class="bg-dark fixed-top">
                <div class="container-fluid">
                    <div class="row align-items-center py-3 px-xl-5">
                        <div class="col-lg-3 d-none d-lg-block">
                            <Link to={`/foodie`} class="navbar-brand" className="brand hvr-grow">
                                <img src={foodie} alt="error!" width="150" height="70" />
                            </Link>
                        </div>
                        <div class="col-lg-7 col-8 text-start">
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="Search for dishes..." aria-label="Search" value={srchItem} onChange={srchValue} />
                                <Link to={`/foodie/search`} >
                                    <button class="btn btn-outline-danger" type="submit" onClick={() => dispatch3({ type: "SEARCH", srchItem, Fakedata })} >Search</button>
                                </Link>
                            </form>
                        </div>
                        <div class="col-lg-2 col-4 text-end">
                            <Link class="nav-link" to={`/foodie/cart`}>
                                <div class="btn border-danger">
                                    <i class="fas fa-shopping-cart text-light"></i>
                                    <span class="badge">{totalQty}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginTop: "80px" }}>
                <div class="container-fluid">
                    <div className="d-lg-none">
                        <Link to={`/foodie`} class="navbar-brand" className="brand hvr-grow">
                            <img src={foodie} alt="error!" width="150" height="70" class="img img-fluid" />
                        </Link>
                    </div>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
                            <li class="nav-item hvr-underline-from-center hvr-grow">
                                <Link class="nav-link" to={`/foodie`}><FaHome /> Home</Link>
                            </li>
                            <li class="nav-item hvr-underline-from-center hvr-grow">
                                <Link class="nav-link" to={`/foodie/menu`}>Menu</Link>
                            </li>
                            <li class="nav-item hvr-underline-from-center hvr-grow">
                                <Link class="nav-link" to={`/foodie/reservation`}>Reservations</Link>
                            </li>
                            <li class="nav-item hvr-underline-from-center hvr-grow">
                                <Link class="nav-link" to={`/foodie/ContactUs`}>ContactUs</Link>
                            </li>
                            <li class="nav-item hvr-underline-from-center hvr-grow">
                                <Link class="nav-link" to={`/foodie/cart`}>Cart</Link>
                            </li>
                        </ul>
                        {/* <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search for dishes..." aria-label="Search" value={srchItem} onChange={srchValue} />
                            <Link to="search" >
                                <button class="btn btn-outline-danger" type="submit" onClick={() => dispatch3({ type: "SEARCH", srchItem, Fakedata })} >Search</button>
                            </Link>
                        </form> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar