import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import { CartContext } from '../../../context/CartContext';
import { DetailsContext } from '../../../context/DetailsContext';
import { CheckOutContext } from '../../../context/CheckOutContext';


const Cart = () => {
    const detailsData = useContext(CartContext);
    console.log(detailsData);
    const { Cart, totalAmount, totalQty, dispatch1 } = useContext(CartContext); // destructuring, data came from DetailsContext.js
    console.log(Cart);

    const { dispatch } = useContext(DetailsContext);
    const { dispatch2 } = useContext(CheckOutContext);



    return (
        <>
            {Cart.length ?
                <div className="container-fluid cart" style={{ margin: "10px 0 50px 0" }}>
                    <div>
                        <div class="table-responsive" style={{ height: "330px", overflowY: "scroll", backgroundColor: "#f2f1ed" }}>
                            <table class="table table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Item</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Cart.map((curItem) => (
                                        <tr key={curItem.id}>
                                            <td class="align-middle">
                                                <Link to={`details/${curItem.id}`} style={{ textDecoration: "none", color: "white" }}>
                                                    <img onClick={() => dispatch({ type: "VIEW_DETAILS", id: curItem.id, curItem })} style={{ height: "3rem" }} src={curItem.image} alt="error!" />
                                                    {curItem.name}
                                                </Link>
                                            </td>

                                            <td class="align-middle">{curItem.price} ₹ </td>

                                            <td class="align-middle">
                                                <div class="input-group quantity" style={{ width: '100px' }} >
                                                    <div class="input-group-btn">
                                                        <button class="btn btn-sm btn-danger btn-minus" onClick={() => dispatch1({ type: "DEC", id: curItem.id, curItem })}>
                                                            <i class="fa fa-minus"></i>
                                                        </button>
                                                    </div>
                                                    <input type="text" class="form-control form-control-sm bg-light text-center" value={curItem.qty} />

                                                    <div class="input-group-btn">
                                                        <button class="btn btn-sm btn-danger btn-plus" onClick={() => dispatch1({ type: "INC", id: curItem.id, curItem })}>
                                                            <i class="fa fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="align-middle">{curItem.price * curItem.qty} ₹</td>
                                            <td class="align-middle text-danger"><div onClick={() => dispatch1({ type: "DEL", id: curItem.id, curItem })}><FaTrashAlt /></div></td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div class="pt-4">
                            <h1>Summary</h1>
                            <h4>Total Items: {totalQty} </h4>
                            <h4 >Grand Total Price:{totalAmount} ₹ </h4>
                            <Link style={{ textDecoration: "none" }} to={`CheckOut`}>
                                <button class="btn btn-danger btn-lg" onClick={() => dispatch2({ type: "CHECKOUT", id: Cart[0].id, Cart, totalAmount, totalQty })} >CheckOut</button>
                            </Link>
                        </div>
                    </div>
                </div> :
                <div className="container-fluid d-flex justify-content-center align-items-center" style={{ margin: "0 0 50px 0", height: "80vh" }}>
                    <h1>Your cart is Empty</h1>
                </div>
            }
        </>
    )
}

export default Cart