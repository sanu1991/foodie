import React, { createContext, useReducer } from 'react'
import SearchReducer from '../reducer/SearchReducer';


export const SearchContext = createContext();

const initialState = {
    Search: [],
    // uniqueList: [],
};

const SearchContextProvider = (props) => {

    const [state, dispatch3] = useReducer(SearchReducer, initialState);
    return (
        <SearchContext.Provider value={{ ...state, dispatch3 }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider