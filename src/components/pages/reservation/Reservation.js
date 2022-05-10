import React, { useState } from 'react'
import rsrv from '../../images/rsrv.jpg'
// for sweet alert import
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Reservation = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setInputs({});
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            icon: 'success',
            title: 'Your seat has been booked successfully !',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <>
            <header>
                <div class="card bg-dark text-white">
                    <img src={rsrv} class="card-img img-fluid w-100 h-100" alt="error" />
                    <div class="card-img-overlay text-center w-75" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} >
                        <div class="animate__animated animate__bounce">
                            <p class="card-title heading" style={{ fontSize: "5vw" }}>Reserve a Table</p>
                            <p class="card-text" style={{ fontSize: "2vw" }}>Pull up a chair and stay a while!  We’re excited to offer both indoor and outdoor seating weather permitting. Book your table now!</p>
                            <button type="button" class="btn btn-danger btn-rounded">Book Now</button>
                        </div>
                    </div>
                </div>
            </header>
            <section className="container p-5" >
                <div class="text-center animate__animated animate__bounce pb-5">
                    <p class="hvr-grow heading" style={{ fontSize: "4vw" }}>Reservation Form</p>
                    <hr class="mx-auto" style={{ color: "red", height: "0.5vh", width: "22vw" }} />
                </div>
                <form class="row g-3 mx-auto fs-5" onSubmit={handleSubmit}>
                    <div class="col-md-12">
                        <label for="flnm" class="form-label">NAME</label>
                        <input type="text" class="form-control" id="flnm" name="flnm" value={inputs.flnm || ""} onChange={handleChange} required />
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">EMAIL</label>
                        <input type="email" class="form-control" id="email" name="email" value={inputs.email || ""} onChange={handleChange} required />
                    </div>
                    <div className="col-12">
                        <label for="occation" class="form-label">Occation</label>
                        <select class="form-select" id="occation" onChange={handleChange} placeholder="Select Occation">
                            <option name="Wedding" value={inputs.Wedding || ""} >Wedding Ceremony</option>
                            <option name="Birthday" value={inputs.Birthday || ""}>Birthday</option>
                            <option name="Others" value={inputs.Others || ""}>Others</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <label for="message" class="form-label">MESSAGE</label>
                        <textarea class="form-control" id="message" rows="3" name="message" value={inputs.message || ""} onChange={handleChange} required></textarea>
                    </div>
                    <div class="col-12 d-grid">
                        <button type="submit" class="btn btn-danger">RESERVE</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Reservation