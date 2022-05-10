import React, { createContext, useReducer } from 'react'
import CheckOutReducer from '../reducer/CheckOutReducer';



export const CheckOutContext = createContext();

const initialState = {
    checkout: {}
};

const CheckOutContextProvider = (props) => {

    const [state, dispatch2] = useReducer(CheckOutReducer, initialState);
    return (
        <CheckOutContext.Provider value={{ ...state, dispatch2 }}>
            {props.children}
        </CheckOutContext.Provider>
    )
}

export default CheckOutContextProvider