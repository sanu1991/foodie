import React from 'react'
import './Container.css'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Cart from '../cart/Cart';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import NotFound from '../notFound/NotFound';
import Menu from '../menu/Menu';
import Home from '../home/Home';
import ContactUs from '../contact/ContactUs';
import Reservation from '../reservation/Reservation';
import Details from '../details/Details';
import Category from '../category/Category';
import Search from '../search/Search';
import CheckOut from '../checkout/CheckOut';

import ProductsContextProvider from '../../../context/ProductsContext';
import DetailsContextProvider from '../../../context/DetailsContext';
import CartContextProvider from '../../../context/CartContext';
import CategoryContextProvider from '../../../context/CategoryContext';
import SearchContextProvider from '../../../context/SearchContext';
import CheckOutContextProvider from '../../../context/CheckOutContext';

function Container() {

    return (
        <>

            <ProductsContextProvider>
                <DetailsContextProvider>
                    <CartContextProvider>
                        <CategoryContextProvider>
                            <SearchContextProvider>
                                <CheckOutContextProvider>
                                    <Router>
                                        <Navbar />
                                        <Routes>
                                            <Route path='/foodie' exact element={<Home />} />

                                            <Route path="/foodie/menu" element={<Menu />} />
                                            <Route path="/foodie/menu/details/:id" element={<Details />} />
                                            <Route path="/foodie/menu/category/" element={<Category />} />
                                            <Route path="/foodie/menu/category/details/:id" element={<Details />} />

                                            <Route path="/foodie/search" element={<Search />} />
                                            <Route path="/foodie/search/details/:id" element={<Details />} />

                                            <Route path="/foodie/category" element={<Category />} />
                                            <Route path="/foodie/category/details/:id" element={<Details />} />


                                            <Route path="/foodie/cart" element={<Cart />} />
                                            <Route path="/foodie/cart/checkOut" element={<CheckOut />} />
                                            <Route path="/foodie/cart/details/:id" element={<Details />} />

                                            <Route path="/foodie/reservation" element={<Reservation />} />
                                            <Route path="/foodie/ContactUs" element={<ContactUs />} />

                                            <Route path="/foodie/*" element={<NotFound />} />
                                        </Routes>
                                        <Footer />
                                    </Router>
                                </CheckOutContextProvider>
                            </SearchContextProvider>
                        </CategoryContextProvider>
                    </CartContextProvider>
                </DetailsContextProvider>
            </ProductsContextProvider>

        </>
    );
}

export default Container