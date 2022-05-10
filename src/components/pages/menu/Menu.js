import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'; // for pagination

import { ProductsContext } from '../../../context/ProductsContext'
import { DetailsContext } from '../../../context/DetailsContext'
import { CartContext } from '../../../context/CartContext'
import { CategoryContext } from '../../../context/CategoryContext'


const Menu = () => {
    const FkData = useContext(ProductsContext);
    console.log(FkData);
    const { Products } = useContext(ProductsContext);
    console.log(Products);
    const { Fakedata } = Products;
    console.log(Fakedata);

    const { dispatch } = useContext(DetailsContext);
    const { dispatch1 } = useContext(CartContext);
    const { dispatch2 } = useContext(CategoryContext);

    // for category list
    const uniqueList =
        [
            ...new Set(
                Fakedata.map((curItem) => {
                    return curItem.type;
                })
            )
        ];
    console.log(uniqueList);

    // for pagination
    const PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = ({ selected: selectedPage }) => {
        console.log("selectedPage", selectedPage);
        setCurrentPage(selectedPage);
        console.log(currentPage);
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(Fakedata.length / PER_PAGE);

    return (
        <>
            <div className="menu">

                <section class="my-5">
                    <div class="text-center pb-5">
                        <p class="hvr-grow heading" style={{ fontSize: "4vw" }}> Order food online</p>
                        <hr class="mx-auto" style={{ color: "red", height: "1vh", width: "32vw" }} />
                    </div>

                    <div class="container mx-auto" style={{ maxWidth: "95vw" }}>
                        <div class="row row-cols-2">

                            <div class="col-xl-2 col-3" style={{ padding: "0px" }}>
                                <div class="dropdown">
                                    <button class="btn btn-danger dropdown-toggle w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        CATEGORIES
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        {uniqueList.map((curItem) => (
                                            <Link style={{ textDecoration: "none" }} to={`category`}>
                                                {/* <div key={curItem.id}> */}
                                                <p key={curItem.id} class="dropdown-item" onClick={() => dispatch2({ type: "CATEGORY", id: curItem.id, curItem, Fakedata, uniqueList })}>{curItem}</p>
                                                {/* </div> */}
                                            </Link>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xl-10 col-9">
                                <div style={{ height: "800px", overflowY: "scroll", backgroundColor: "#f2f1ed" }}>
                                    <div class="container-fluid pt-4">
                                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-4">
                                            {/* {Fakedata.map((curItem) => ( */}
                                            {/* pagination  */}
                                            {Fakedata.slice(offset, offset + PER_PAGE).map((curItem) => (
                                                <div class="col">
                                                    <div key={curItem.id} class="card" >
                                                        <Link to={`details/${curItem.id}`}>
                                                            <img src={curItem.image} class="card-img-top img-fluid" style={{ height: "12rem" }} alt="error" onClick={() => dispatch({ type: "VIEW_DETAILS", id: curItem.id, curItem })} />
                                                        </Link>
                                                        <div class="card-body">
                                                            <p style={{ height: "50px", fontSize: "18px" }} class="card-title">{curItem.name}</p>
                                                            <p style={{ height: "30px", fontSize: "15px" }} class="card-text"><b>Type: </b> {curItem.type}</p>
                                                            <p style={{ fontSize: "15px" }} class="card-text"><b> Price: </b> {curItem.price} ₹</p>
                                                        </div>

                                                        <div className="d-grid">
                                                            <button type="button" onClick={() => dispatch1({ type: "ADD_TO_CART", id: curItem.id, curItem })} class="btn btn-danger" >AddToCart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='my-5'>
                                        <ReactPaginate
                                            pageCount={pageCount}
                                            onPageChange={handlePageClick}

                                            containerClassName={'pagination justify-content-center'}

                                            previousLabel={'<<'}
                                            previousClassName={'page-item'}
                                            previousLinkClassName={'page-link text-danger'}

                                            nextLabel={'>>'}
                                            nextClassName={'page-item'}
                                            nextLinkClassName={'page-link text-danger'}

                                            pageClassName={'page-item'}
                                            pageLinkClassName={'page-link'}

                                            activeClassName={'page-item active'}
                                            disabledClassName={'page-item disabled'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Menu