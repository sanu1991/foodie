import React, { createContext, useReducer } from 'react'
import DetailsReducer from '../reducer/DetailsReducer';


export const DetailsContext = createContext();

const initialState = {
    Details: [],
};

const DetailsContextProvider = (props) => {

    const [state, dispatch] = useReducer(DetailsReducer, initialState);
    return (
        <DetailsContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </DetailsContext.Provider>
    )
}

export default DetailsContextProvider