import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

import { CartContext } from '../../../context/CartContext';
import { CategoryContext } from '../../../context/CategoryContext';
import { DetailsContext } from '../../../context/DetailsContext';

const Category = () => {

    const FkData = useContext(CategoryContext);
    console.log(FkData);
    const { Products, uniqueList, Menudata } = useContext(CategoryContext);
    const { Fakedata } = Products;
    console.log(Fakedata, uniqueList, Menudata);

    const { dispatch } = useContext(DetailsContext);
    const { dispatch1 } = useContext(CartContext);
    const { dispatch2 } = useContext(CategoryContext);

    return (
        <>
            <div className="menu">

                <section class="my-5">
                    <div class="text-center pb-5">
                        <p class="hvr-grow" style={{ fontSize: "4vw" }}> Order food online</p>
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

                                            <div key={curItem.id}>
                                                <p style={{ cursor: "pointer" }} class="dropdown-item" onClick={() => dispatch2({ type: "CATEGORY1", id: curItem.id, curItem, Menudata, uniqueList })}>{curItem}</p>
                                            </div>

                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xl-10 col-9">
                                <div style={{ height: "800px", overflowY: "scroll", backgroundColor: "#f2f1ed" }}>
                                    <div class="container-fluid pt-4">
                                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-5">

                                            {Fakedata.map((curItem) => (
                                                <div class="col" key={curItem.id} >
                                                    <div class="card mx-auto" style={{ height: "23rem" }}>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Category