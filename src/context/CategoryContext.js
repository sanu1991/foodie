import React, { createContext, useReducer } from 'react'
import CategoryReducer from '../reducer/CategoryReducer';

export const CategoryContext = createContext();

const initialState = {
    Category: [],
    uniqueList: [],
};

const CategoryContextProvider = (props) => {

    const [state, dispatch2] = useReducer(CategoryReducer, initialState);
    return (
        <CategoryContext.Provider value={{ ...state, dispatch2 }}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider