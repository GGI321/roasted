import React from 'react'
import './Contact.css'
import ConComp from './ConComp'

function Contact() {
  return (
    <div>

      <div className="container text-center">
        <h1>Contact us</h1>
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <ConComp/>
         <div className="container">
            <div className="row ">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-text "><p><b>call us</b></p></div>
                            <div className="card-text text-danger"><p>+234 8070 4025 09</p></div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-text "><p><b>Hours</b></p></div>
                            <div className="card-text text-danger"><p>Mon-Fri: 11am - 8pm Sat,<br /> Sun: 9am - 10pm</p></div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-text "><p><b>Our Location</b></p></div>
                            <div className="card-text text-danger"><p>Lagos Nigeria</p></div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Contact
