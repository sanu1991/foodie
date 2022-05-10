import React, { createContext, useReducer } from 'react'
import CartReducer from '../reducer/CartReducer';

export const CartContext = createContext();

const initialState = {
    Cart: [],
    totalAmount: 0,
    totalQty: 0,
};

const CartContextProvider = (props) => {

    const [state, dispatch1] = useReducer(CartReducer, initialState);
    return (
        <CartContext.Provider value={{ ...state, dispatch1 }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider