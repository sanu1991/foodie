import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const ContactUs = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    console.log(inputs);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        setInputs({});
        const MySwal = withReactContent(Swal)

        MySwal.fire({
            icon: 'success',
            title: 'Your message has been sent successfully !',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <>

            <section className="container p-5" >
                <div class="text-center animate__animated animate__bounce pb-5">
                    <p class="hvr-grow heading" style={{ fontSize: "4vw" }}>Contact Us</p>
                    <hr class="mx-auto" style={{ color: "red", height: "0.3vh", width: "18vw" }} />
                </div>

                <form class="row g-3 mx-auto fs-5" onSubmit={handleSubmit}>
                    <div class="col-md-6">
                        <label for="fstnm" class="form-label">FIRST NAME</label>
                        <input type="text" name="fstnm" value={inputs.fstnm || ""} onChange={handleChange} class="form-control" id="fstnm" required />
                    </div>
                    <div class="col-md-6">
                        <label for="lstnm" class="form-label">LAST NAME</label>
                        <input type="text" name="lstnm" value={inputs.lstnm || ""} onChange={handleChange} class="form-control" id="lstnm" required />
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">EMAIL</label>
                        <input type="email" name="email" value={inputs.email || ""} onChange={handleChange} class="form-control" id="email" required />
                    </div>
                    <div class="col-12">
                        <label for="message" class="form-label">MESSAGE</label>
                        <textarea class="form-control" name="message" value={inputs.message || ""} onChange={handleChange} id="message" rows="3" required></textarea>
                    </div>
                    <div class="col-12">
                        <label for="addDetls" class="form-label">ADDITIONAL DETAILS</label>
                        <textarea class="form-control" id="addDetls" rows="5"></textarea>
                    </div>

                    <div class="col-12 d-grid">
                        <button type="submit" class="btn btn-danger">Send Message</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default ContactUs