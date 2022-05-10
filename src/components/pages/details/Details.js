import React, { useContext } from 'react'
import { DetailsContext } from '../../../context/DetailsContext';

const Details = () => {
    const detailsData = useContext(DetailsContext);
    console.log(detailsData);
    const { Details } = useContext(DetailsContext); // destructuring, data came from DetailsContext.js
    console.log(Details);
    return (
        <>
            <section style={{ margin: "130px 0 50px 0" }}>
                <div className="container">

                    {Details.map((mapItem) => (

                        <div class="card mx-auto" style={{ border: "none" }} key={mapItem.id} >
                            <div class="row g-0 mx-auto" >
                                <div class="col-md-4">
                                    <img src={mapItem.image} class="img-fluid rounded-start" alt="error" />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body mx-5">
                                        <h1 class="card-title">{mapItem.name}</h1>
                                        <h5 class="card-title">Type: {mapItem.type}</h5>
                                        <h5 class="card-title">Price: {mapItem.price} ₹</h5>
                                        <h5 class="card-title">Recipe: {mapItem.recipes}</h5>


                                        {/* <Link to={`BookShow/${mapItem.show.id}`}>
                                            <div className="d-grid">
                                                <button type="button" class="btn btn-primary" onClick={() => dispatch({ type: "Book_Show", id: mapItem.show.id, mapItem })}>BookShow</button>
                                            </div>
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>
        </>

    )
}

export default Details