import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

import { SearchContext } from '../../../context/SearchContext';
import { CartContext } from '../../../context/CartContext';
import { DetailsContext } from '../../../context/DetailsContext';

const Search = () => {
    const FkData = useContext(SearchContext);
    console.log(FkData);
    const { Products, Menudata } = useContext(SearchContext);
    const { Fakedata } = Products;
    console.log(Fakedata, Menudata);


    const { dispatch } = useContext(DetailsContext);
    const { dispatch1 } = useContext(CartContext);

    return (
        <>
            <div className="menu">

                <section class="my-5">
                    <div class="text-center pb-5">
                        <p class="hvr-grow heading" style={{ fontSize: "4vw" }}> Order food online</p>
                        <hr class="mx-auto" style={{ color: "red", height: "0.3vh", width: "30vw" }} />
                    </div>


                    <div class="mx-5" style={{ height: "800px", overflowY: "scroll", backgroundColor: "#f2f1ed" }}>
                        <div class="container pt-4">
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5  g-4">

                                {Fakedata.map((curItem) => (
                                    <div class="col mx-auto" key={curItem.id} >
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

                </section>
            </div>
        </>
    )
}

export default Search