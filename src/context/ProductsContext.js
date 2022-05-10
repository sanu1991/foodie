import React, { createContext, useReducer } from 'react'
import Fakedata from '../Fakedata/Fakedata';
import ProductsReducer from '../reducer/ProductsReducer';


export const ProductsContext = createContext();
const initialState = { Products: { Fakedata } };
const ProductsContextProvider = (props) => {

    const [state, dispatch2] = useReducer(ProductsReducer, initialState);
    console.log(state);

    return (
        <ProductsContext.Provider value={{ ...state, dispatch2 }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider