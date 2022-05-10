import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const PER_PAGE = 10;

const Pagination = ({ data }) => {
    console.log(data);
    const { Fakedata } = data;
    console.log(Fakedata);


    const [currentPage, setCurrentPage] = useState(0);
    const handlePageClick = ({ selected: selectedPage }) => {
        console.log("selectedPage", selectedPage);
        setCurrentPage(selectedPage);
        console.log(currentPage);
    }

    const offset = currentPage * PER_PAGE;
    const currentPageData = Fakedata.slice(offset, offset + PER_PAGE).map((curItem) => (
        <div class="col">
            <div key={curItem.id} class="card" >
                {/* <Link to={`details/${curItem.id}`}> */}
                <img src={curItem.image} class="card-img-top img-fluid" style={{ height: "12rem" }} alt="error" />
                {/* </Link> */}
                <div class="card-body">
                    <h5 style={{ height: "50px" }} class="card-title">{curItem.name}</h5>
                    <p style={{ height: "30px", fontSize: "15px" }} class="card-text">Type: {curItem.type}</p>
                    <p style={{ fontSize: "15px" }} class="card-text">Price: {curItem.price} ₹</p>
                </div>

                <div className="d-grid">
                    <button type="button" class="btn btn-danger" >AddToCart</button>
                </div>
            </div>
        </div>
    ))
    const pageCount = Math.ceil(Fakedata.length / PER_PAGE);


    return (
        <>
            {currentPageData}

            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}

                containerClassName={'pagination'}

                previousLabel={'previous'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}

                nextLabel={'next'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}

                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}

                activeClassName={'page-item--active'}
                disabledClassName={'page-item--disabled'}
            />
        </>
    )
}

export default Pagination